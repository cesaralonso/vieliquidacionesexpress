const connection = require('../config/db-connection');

const Liquidacion = {};

Liquidacion.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM liquidacion HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Liquidacion.findById = (LiquidacionId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM liquidacion WHERE idliquidacion = ? HAVING baja IS NULL OR baja = false',
    [LiquidacionId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Liquidacion.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idliquidacion) AS count FROM liquidacion`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Liquidacion.exist = (LiquidacionId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM liquidacion WHERE idliquidacion = ?) AS exist', [LiquidacionId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Liquidacion.insert = (Liquidacion, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO liquidacion SET ?`, [Liquidacion], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Liquidacion.update = (Liquidacion, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE liquidacion SET ? WHERE idliquidacion = ?', [Liquidacion, Liquidacion.idliquidacion], (error, result) => {
        if ( error )
            return next({ success: false, error: error });
        else
            return next( null, { success: true, result: result});
    });
};

Liquidacion.logicRemove = (liquidacionId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE liquidacion SET baja = 1 WHERE idliquidacion = ?', [liquidacionId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Liquidacion eliminado' });
    });
};

Liquidacion.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Liquidacion;
