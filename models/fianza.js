const connection = require('../config/db-connection');

const Fianza = {};

Fianza.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM fianza HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Fianza.findById = (FianzaId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM fianza WHERE idfianza = ? HAVING baja IS NULL OR baja = false',
    [FianzaId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Fianza.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idfianza) AS count FROM fianza`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Fianza.exist = (FianzaId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM fianza WHERE idfianza = ?) AS exist', [FianzaId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Fianza.insert = (Fianza, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO fianza SET ?`, [Fianza], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Fianza.update = (Fianza, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE fianza SET ? WHERE idfianza = ?', [Fianza, Fianza.idfianza], (error, result) => {
        if ( error )
            return next({ success: false, error: error });
        else
            return next( null, { success: true, result: result});
    });
};

Fianza.logicRemove = (fianzaId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE fianza SET baja = 1 WHERE idfianza = ?', [fianzaId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Fianza eliminado' });
    });
};

Fianza.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Fianza;
