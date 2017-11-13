const connection = require('../config/db-connection');

const Permiso = {};

Permiso.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM permiso HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Permiso.findById = (PermisoId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM permiso WHERE idpermiso = ? HAVING baja IS NULL OR baja = false',
    [PermisoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Permiso.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idpermiso) AS count FROM permiso`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Permiso.exist = (PermisoId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM permiso WHERE idpermiso = ?) AS exist', [PermisoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Permiso.insert = (Permiso, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO permiso SET ?`, [Permiso], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Permiso.update = (Permiso, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE permiso SET ? WHERE idpermiso = ?', [Permiso, Permiso.idpermiso], (error, result) => {
        if ( error )
            return next({ success: false, error: error });
        else
            return next( null, { success: true, result: result});
    });
};

Permiso.logicRemove = (permisoId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE permiso SET baja = 1 WHERE idpermiso = ?', [permisoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Permiso eliminado' });
    });
};

Permiso.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Permiso;
