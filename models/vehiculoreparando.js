const connection = require('../config/db-connection');

const Vehiculoreparando = {};

Vehiculoreparando.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM vehiculoreparando', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Vehiculoreparando.findById = (VehiculoreparandoId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM vehiculoreparando WHERE idvehiculoreparando = ?',
    [VehiculoreparandoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Vehiculoreparando.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idvehiculoreparando) AS count FROM vehiculoreparando`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Vehiculoreparando.exist = (VehiculoreparandoId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM vehiculoreparando WHERE idvehiculoreparando = ?) AS exist', [VehiculoreparandoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Vehiculoreparando.insert = (Vehiculoreparando, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO vehiculoreparando SET ?`, [Vehiculoreparando], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Vehiculoreparando.update = (Vehiculoreparando, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE vehiculoreparando SET ? WHERE idvehiculoreparando = ?', [Vehiculoreparando, Vehiculoreparando.idvehiculoreparando], (error, result) => {
        if ( error )
            return next({ success: false, error: error });
        else
            return next( null, { success: true, result: result});
    });
};

Vehiculoreparando.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Vehiculoreparando;
