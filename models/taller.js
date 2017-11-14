const connection = require('../config/db-connection');

const Taller = {};

Taller.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM taller HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Taller.findById = (TallerId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM taller WHERE idtaller = ? HAVING baja IS NULL OR baja = false',
    [TallerId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Taller.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idtaller) AS count FROM taller`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Taller.exist = (TallerId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM taller WHERE idtaller = ?) AS exist', [TallerId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Taller.insert = (Taller, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO taller SET ?`, [Taller], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo' })
        else
            return next( null, { success: true, result: result, message: 'Taller agregado correctamente' });
    });
};

Taller.update = (Taller, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE taller SET ? WHERE idtaller = ?', [Taller, Taller.idtaller], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo'});
        else
            return next( null, { success: true, result: result, message: 'Datos del taller actualizados'});
    });
};

Taller.logicRemove = (tallerId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE taller SET baja = 1 WHERE idtaller = ?', [tallerId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Taller eliminado' });
    });
};

Taller.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Taller;
