const connection = require('../config/db-connection');

const Vehiculo = {};

Vehiculo.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM vehiculo', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Vehiculo.findById = (VehiculoId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM vehiculo WHERE idvehiculo = ?',
    [VehiculoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Vehiculo.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idvehiculo) AS count FROM vehiculo`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Vehiculo.exist = (VehiculoId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM vehiculo WHERE idvehiculo = ?) AS exist', [VehiculoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Vehiculo.insert = (Vehiculo, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO vehiculo SET ?`, [Vehiculo], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Vehiculo.update = (Vehiculo, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE vehiculo SET ? WHERE idvehiculo = ?', [Vehiculo, Vehiculo.idvehiculo], (error, result) => {
        if ( error )
            return next({ success: false, error: error });
        else
            return next( null, { success: true, result: result});
    });
};

Vehiculo.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Vehiculo;
