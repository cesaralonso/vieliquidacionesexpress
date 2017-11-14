const connection = require('../config/db-connection');

const Enviotaller = {};

Enviotaller.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM enviotaller HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Enviotaller.findById = (EnviotallerId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM enviotaller WHERE idenviotaller = ? HAVING baja IS NULL OR baja = false',
    [EnviotallerId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Enviotaller.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idenviotaller) AS count FROM enviotaller`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Enviotaller.exist = (EnviotallerId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM enviotaller WHERE idenviotaller = ?) AS exist', [EnviotallerId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Enviotaller.insert = (Enviotaller, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO enviotaller SET ?`, [Enviotaller], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo' })
        else
            return next( null, { success: true, result: result, message: 'Registro de envío a taller agregado correctamente' });
    });
};

Enviotaller.update = (Enviotaller, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE enviotaller SET ? WHERE idenviotaller = ?', [Enviotaller, Enviotaller.idenviotaller], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo'});
        else
            return next( null, { success: true, result: result, message: 'Datos del envío al taller actualizados'});
    });
};

Enviotaller.logicRemove = (enviotallerId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE enviotaller SET baja = 1 WHERE idenviotaller = ?', [enviotallerId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Enviotaller eliminado' });
    });
};

Enviotaller.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Enviotaller;
