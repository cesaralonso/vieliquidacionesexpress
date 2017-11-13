const connection = require('../config/db-connection');

const Vehiculoreparando = {};

Vehiculoreparando.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM vehiculoreparando HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Vehiculoreparando.findById = (VehiculoreparandoId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM vehiculoreparando WHERE idvehiculoreparando = ? HAVING baja IS NULL OR baja = false',
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


Vehiculoreparando.logicRemove = (vehiculoreparandoId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE vehiculoreparando SET baja = 1 WHERE idvehiculoreparando = ?', [vehiculoreparandoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Vehiculoreparando eliminado' });
    });
};

Vehiculoreparando.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Vehiculoreparando;
