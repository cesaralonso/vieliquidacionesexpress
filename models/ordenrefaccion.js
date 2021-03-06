const connection = require('../config/db-connection');

const Ordenrefaccion = {};

Ordenrefaccion.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM ordenrefaccion HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Ordenrefaccion.findById = (OrdenrefaccionId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM ordenrefaccion WHERE idordenrefaccion = ? HAVING baja IS NULL OR baja = false',
    [OrdenrefaccionId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Ordenrefaccion.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idordenrefaccion) AS count FROM ordenrefaccion`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};


Ordenrefaccion.exist = (OrdenrefaccionId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM ordenrefaccion WHERE idordenrefaccion = ?) AS exist', [OrdenrefaccionId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Ordenrefaccion.insert = (Ordenrefaccion, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO ordenrefaccion SET ?`, [Ordenrefaccion], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Ordenrefaccion.update = (Ordenrefaccion, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE ordenrefaccion SET ? WHERE idordenrefaccion = ?', [Ordenrefaccion, Ordenrefaccion.idordenrefaccion], (error, result) => {
        if ( error )
            return next({ success: false, error: error });
        else
            return next( null, { success: true, result: result});
    });
};

Ordenrefaccion.logicRemove = (ordenrefaccionId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE ordenrefaccion SET baja = 1 WHERE idordenrefaccion = ?', [ordenrefaccionId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Ordenrefaccion eliminado' });
    });
};


Ordenrefaccion.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Ordenrefaccion;
