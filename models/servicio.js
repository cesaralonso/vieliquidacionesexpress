const connection = require('../config/db-connection');

const Servicio = {};

Servicio.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM servicio HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Servicio.findById = (ServicioId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM servicio WHERE idservicio = ? HAVING baja IS NULL OR baja = false',
    [ServicioId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Servicio.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idservicio) AS count FROM servicio`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Servicio.exist = (ServicioId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM servicio WHERE idservicio = ?) AS exist', [ServicioId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Servicio.insert = (Servicio, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO servicio SET ?`, [Servicio], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo' })
        else
            return next( null, { success: true, result: result, message: 'Servicio agregado correctamente' });
    });
};

Servicio.update = (Servicio, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE servicio SET ? WHERE idservicio = ?', [Servicio, Servicio.idservicio], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo'});
        else
            return next( null, { success: true, result: result, message: 'Datos del servicio actualizados'});
    });
};

Servicio.logicRemove = (servicioId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE servicio SET baja = 1 WHERE idservicio = ?', [servicioId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Servicio eliminado' });
    });
};


Servicio.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Servicio;
