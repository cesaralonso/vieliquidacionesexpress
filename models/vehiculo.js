const connection = require('../config/db-connection');

const Vehiculo = {};

Vehiculo.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM vehiculo HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Vehiculo.findById = (VehiculoId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM vehiculo WHERE idvehiculo = ? HAVING baja IS NULL OR baja = false',
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
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo' })
        else
            return next( null, { success: true, result: result, message: 'Vehiculo agregado correctamente' });
    });
};

Vehiculo.update = (Vehiculo, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE vehiculo SET ? WHERE idvehiculo = ?', [Vehiculo, Vehiculo.idvehiculo], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo'});
        else
            return next( null, { success: true, result: result, message: 'Datos del vehiculo actualizados'});
    });
};

Vehiculo.logicRemove = (vehiculoId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE vehiculo SET baja = 1 WHERE idvehiculo = ?', [vehiculoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Vehiculo eliminado' });
    });
};


Vehiculo.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Vehiculo;
