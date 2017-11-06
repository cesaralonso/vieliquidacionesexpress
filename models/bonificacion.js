const connection = require('../config/db-connection');

const Bonificacion = {};

Bonificacion.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM bonificacion', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Bonificacion.findById = (BonificacionId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM bonificacion WHERE idbonificacion = ?',
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
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Bonificacion.update = (Bonificacion, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE bonificacion SET ? WHERE idbonificacion = ?', [Bonificacion, Bonificacion.idbonificacion], (error, result) => {
        if ( error )
            return next({ success: false, error: error });
        else
            return next( null, { success: true, result: result});
    });
};

Bonificacion.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Bonificacion;
