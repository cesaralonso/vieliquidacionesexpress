const connection = require('../config/db-connection');

const Refaccion = {};

Refaccion.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM refaccion HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Refaccion.findById = (RefaccionId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM refaccion WHERE idrefaccion = ? HAVING baja IS NULL OR baja = false',
    [RefaccionId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Refaccion.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idrefaccion) AS count FROM refaccion`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Refaccion.exist = (RefaccionId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM refaccion WHERE idrefaccion = ?) AS exist', [RefaccionId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Refaccion.insert = (Refaccion, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO refaccion SET ?`, [Refaccion], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo' })
        else
            return next( null, { success: true, result: result, message: 'Refacción agregada correctamente' });
    });
};

Refaccion.update = (Refaccion, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE refaccion SET ? WHERE idrefaccion = ?', [Refaccion, Refaccion.idrefaccion], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo'});
        else
            return next( null, { success: true, result: result, message: 'Datos de la refaccón actualizados'});
    });
};

Refaccion.logicRemove = (refaccionId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE refaccion SET baja = 1 WHERE idrefaccion = ?', [refaccionId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Refaccion eliminado' });
    });
};

Refaccion.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Refaccion;
