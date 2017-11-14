const connection = require('../config/db-connection');

const Modulo = {};

Modulo.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM modulo HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Modulo.findById = (ModuloId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM modulo WHERE idmodulo = ? HAVING baja IS NULL OR baja = false',
    [ModuloId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Modulo.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idmodulo) AS count FROM modulo`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Modulo.exist = (ModuloId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM modulo WHERE idmodulo = ?) AS exist', [ModuloId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Modulo.insert = (Modulo, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO modulo SET ?`, [Modulo], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo' })
        else
            return next( null, { success: true, result: result, message: 'Módulo agregado correctamente' });
    });
};

Modulo.update = (Modulo, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE modulo SET ? WHERE idmodulo = ?', [Modulo, Modulo.idmodulo], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo'});
        else
            return next( null, { success: true, result: result, message: 'Datos del módulo actualizados'});
    });
};

Modulo.logicRemove = (moduloId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE modulo SET baja = 1 WHERE idmodulo = ?', [moduloId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Modulo eliminado' });
    });
};


Modulo.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Modulo;
