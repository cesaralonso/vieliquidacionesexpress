const connection = require('../config/db-connection');

const Mecanico = {};

Mecanico.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM mecanico HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Mecanico.findById = (MecanicoId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM mecanico WHERE idmecanico = ? HAVING baja IS NULL OR baja = false',
    [MecanicoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Mecanico.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idmecanico) AS count FROM mecanico`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Mecanico.exist = (MecanicoId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM mecanico WHERE idmecanico = ?) AS exist', [MecanicoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Mecanico.insert = (Mecanico, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO mecanico SET ?`, [Mecanico], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo' })
        else
            return next( null, { success: true, result: result, message: 'Mecanico agregado correctamente' });
    });
};

Mecanico.update = (Mecanico, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE mecanico SET ? WHERE idmecanico = ?', [Mecanico, Mecanico.idmecanico], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo'});
        else
            return next( null, { success: true, result: result, message: 'Datos del mecanico actualizados'});
    });
};

Mecanico.logicRemove = (mecanicoId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE mecanico SET baja = 1 WHERE idmecanico = ?', [mecanicoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Mecanico eliminado' });
    });
};

Mecanico.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Mecanico;
