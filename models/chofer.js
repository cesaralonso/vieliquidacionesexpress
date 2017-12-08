const connection = require('../config/db-connection');
const { waterfall } = require('async');
const DynamicQueries = require('../services/dynamic-queries');

const Chofer = {};

Chofer.all = next => {
    if ( !connection )
        return next('Connection refused');
    waterfall([
        next => {
            connection.query('SELECT * FROM chofer HAVING baja IS NULL OR baja = false', (error, result) => {
                error ? next(error) : next(null, result)
            });
        }
        // (prevResult, next) => {
        //     // Add relation chofer => person
        //     // And then aval1 => person, and so on
        //     // DynamicQueries.addRelation( prevResult, 'persona', '')
        // }
    ],
    (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    })
};

Chofer.findById = (choferId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM chofer WHERE idchofer = ? HAVING baja IS NULL OR baja = false',
    [choferId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Chofer.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idchofer) AS count FROM chofer`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Chofer.exist = (choferId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM chofer WHERE idchofer = ?) AS exist', [choferId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Chofer.insert = (chofer, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO chofer SET ?`, [chofer], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo' })
        else
            return next( null, { success: true, result: result, message: 'Chofer agregado correctamente' });
    });
};

Chofer.update = (chofer, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE chofer SET ? WHERE idchofer = ?', [chofer, chofer.idchofer], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo'});
        else
            return next( null, { success: true, result: result, message: 'Datos del chofer actualizados'});
    });
};

Chofer.logicRemove = (choferId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE chofer SET baja = 1 WHERE idchofer = ?', [choferId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Chofer eliminado' });
    });
};

Chofer.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Chofer;
