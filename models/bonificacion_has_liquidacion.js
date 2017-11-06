const connection = require('../config/db-connection');

const Bonificacion_has_liquidacion = {};

Bonificacion_has_liquidacion.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM bonificacion_has_liquidacion', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Bonificacion_has_liquidacion.findById = (bonificacion_idbonificacionId,liquidacion_idliquidacionId next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM bonificacion_has_liquidacion WHERE bonificacion_idbonificacion = ? AND liquidacion_idliquidacion = ?',
    [bonificacion_idbonificacionId,liquidacion_idliquidacionId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Bonificacion_has_liquidacion.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(bonificacion_idbonificacion) AS count FROM bonificacion_has_liquidacion`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Bonificacion_has_liquidacion.exist = (bonificacion_idbonificacionId, liquidacion_idliquidacionId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM bonificacion_has_liquidacion WHERE bonificacion_idbonificacion = ? AND liquidacion_idliquidacion = ?) AS exist', [bonificacion_idbonificacionId,liquidacion_idliquidacionId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Bonificacion_has_liquidacion.insert = (Bonificacion_has_liquidacion, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO bonificacion_has_liquidacion SET ?`, [Bonificacion_has_liquidacion], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Bonificacion_has_liquidacion.update = (Bonificacion_has_liquidacion, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE bonificacion_has_liquidacion SET ? WHERE bonificacion_idbonificacion = ? AND liquidacion_idliquidacion = ?', [Bonificacion_has_liquidacion, Bonificacion_has_liquidacion.bonificacion_idbonificacion, Bonificacion_has_liquidacion.liquidacion_idliquidacion], (error, result) => {
        if ( error )
            return next({ success: false, error: error });
        else
            return next( null, { success: true, result: result});
    });
};

Bonificacion_has_liquidacion.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Bonificacion_has_liquidacion;
