const connection = require('../config/db-connection');
const { waterfall, each } = require('async');
const DynamicQueries = require('../services/dynamic-queries');

const Orden = {};

Orden.all = next => {
    if ( !connection )
        return next('Connection refused');
    waterfall([
        next => {
            connection.query('SELECT * FROM orden HAVING baja IS NULL OR baja = false', (error, result) =>
                error ? next(error) : next(null, result));
        },
        (prevResult, next) => {
            DynamicQueries.addRelation(prevResult, 'orden_has_refaccion', 'idorden', 'orden_idorden', 'refacciones', (error, result) =>
                error ? next(error) : next(null, result));
        }
    ],
    (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });

    })
};

Orden.findById = (ordenId, next) => {
    if ( !connection )
        return next('Connection refused');
    waterfall([
        next => {
            connection.query('SELECT * FROM orden WHERE idorden = ? HAVING baja IS NULL OR baja = false',
            [ordenId], (error, result) =>
                error ? next(error) : next(null, result));
        },
        (prevResult, next) => {
            DynamicQueries.addRelation(prevResult, 'orden_has_refaccion', 'idorden', 'orden_idorden', 'refacciones', (error, result) =>
                error ? next(error) : next(null, result));
        }
    ],
    (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });

    })
};

Orden.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idorden) AS count FROM orden`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Orden.exist = (OrdenId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM orden WHERE idorden = ?) AS exist', [OrdenId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Orden.insert = (oden, refacciones, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.beginTransaction( err => {
        if ( err ) return next(err)
        waterfall([
            next => {
                connection.query(`INSERT INTO orden SET ?`, [oden], (error, result) => {
                    error ? next(error) : next(null, result)
                })
            },
            (resultOrden, next) => {
                let refaccionInsert = { orden_idorden: resultOrden.insertId, baja: false }
                each( refacciones, (refaccion, cb) => {
                    refaccionInsert.refaccion_idrefaccion = refaccion.idrefaccion
                    refaccionInsert.cantidad = refaccion.cantidad
                    connection.query(`INSERT INTO orden_has_refaccion SET ? `,
                    [refaccionInsert], (error, result)=> error ? cb(error) : cb());
                },
                // Error from async.each
                error => error ? next(error) : next(null, resultOrden))
            }
        ],
        (error, result) => {
            if ( error ) 
                connection.rollback( () => next({ success: false, error: error }))
            else 
                connection.commit( error =>{
                    if ( error ) 
                        connecttion.rollback( () => next({ success: false, error: error }))
                    else
                        return next( null, { success: true, result: result });
                })
        })

    })

};

Orden.update = (Orden, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE orden SET ? WHERE idorden = ?', [Orden, Orden.idorden], (error, result) => {
        if ( error )
            return next({ success: false, error: error });
        else
            return next( null, { success: true, result: result});
    });
};

Orden.logicRemove = (ordenId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE orden SET baja = 1 WHERE idorden = ?', [ordenId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Orden eliminado' });
    });
};


Orden.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Orden;
