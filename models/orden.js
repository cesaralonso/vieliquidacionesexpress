const connection = require('../config/db-connection');

const Orden = {};

Orden.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM orden HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Orden.findById = (OrdenId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM orden WHERE idorden = ? HAVING baja IS NULL OR baja = false',
    [OrdenId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
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

Orden.insert = (Orden, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO orden SET ?`, [Orden], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
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
