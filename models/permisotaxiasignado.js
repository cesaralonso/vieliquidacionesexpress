const connection = require('../config/db-connection');

const Permisotaxiasignado = {};

Permisotaxiasignado.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM permisotaxiasignado', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Permisotaxiasignado.findById = (PermisotaxiasignadoId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM permisotaxiasignado WHERE idpermisotaxiasignado = ?',
    [PermisotaxiasignadoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Permisotaxiasignado.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idpermisotaxiasignado) AS count FROM permisotaxiasignado`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Permisotaxiasignado.exist = (PermisotaxiasignadoId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM permisotaxiasignado WHERE idpermisotaxiasignado = ?) AS exist', [PermisotaxiasignadoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Permisotaxiasignado.insert = (Permisotaxiasignado, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO permisotaxiasignado SET ?`, [Permisotaxiasignado], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Permisotaxiasignado.update = (Permisotaxiasignado, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE permisotaxiasignado SET ? WHERE idpermisotaxiasignado = ?', [Permisotaxiasignado, Permisotaxiasignado.idpermisotaxiasignado], (error, result) => {
        if ( error )
            return next({ success: false, error: error });
        else
            return next( null, { success: true, result: result});
    });
};

Permisotaxiasignado.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Permisotaxiasignado;
