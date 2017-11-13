const connection = require('../config/db-connection');

const Permisotaxi = {};

Permisotaxi.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM permisotaxi HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Permisotaxi.findById = (PermisotaxiId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM permisotaxi WHERE idpermisotaxi = ? HAVING baja IS NULL OR baja = false',
    [PermisotaxiId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Permisotaxi.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idpermisotaxi) AS count FROM permisotaxi`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Permisotaxi.exist = (PermisotaxiId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM permisotaxi WHERE idpermisotaxi = ?) AS exist', [PermisotaxiId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Permisotaxi.insert = (Permisotaxi, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO permisotaxi SET ?`, [Permisotaxi], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo' })
        else
            return next( null, { success: true, result: result, message: 'Permiso de taxi agregado correctamente' });
    });
};

Permisotaxi.update = (Permisotaxi, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE permisotaxi SET ? WHERE idpermisotaxi = ?', [Permisotaxi, Permisotaxi.idpermisotaxi], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo'});
        else
            return next( null, { success: true, result: result, message: 'Datos del permiso actualizados'});
    });
};

Permisotaxi.logicRemove = (permisotaxiId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE permisotaxi SET baja = 1 WHERE idpermisotaxi = ?', [permisotaxiId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Permiso eliminado' });
    });
};

Permisotaxi.logicRemove = (permisotaxiId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE permisotaxi SET baja = 1 WHERE idpermisotaxi = ?', [permisotaxiId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Permisotaxi eliminado' });
    });
};


Permisotaxi.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Permisotaxi;
