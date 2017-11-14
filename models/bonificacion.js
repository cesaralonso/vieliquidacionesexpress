const connection = require('../config/db-connection');

const Bonificacion = {};

Bonificacion.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM bonificacion HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Bonificacion.findById = (BonificacionId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM bonificacion WHERE idbonificacion = ? HAVING baja IS NULL OR baja = false',
    [BonificacionId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Bonificacion.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idbonificacion) AS count FROM bonificacion`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Bonificacion.exist = (BonificacionId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM bonificacion WHERE idbonificacion = ?) AS exist', [BonificacionId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Bonificacion.insert = (Bonificacion, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO bonificacion SET ?`, [Bonificacion], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo' })
        else
            return next( null, { success: true, result: result, message: 'Bonificación agregada correctamente' });
    });
};

Bonificacion.update = (Bonificacion, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE bonificacion SET ? WHERE idbonificacion = ?', [Bonificacion, Bonificacion.idbonificacion], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo'});
        else
            return next( null, { success: true, result: result, message: 'Datos de la bonificación actualizados'});
    });
};

Bonificacion.logicRemove = (bonificacionId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE bonificacion SET baja = 1 WHERE idbonificacion = ?', [bonificacionId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Bonificacion eliminada' });
    });
};



Bonificacion.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Bonificacion;
