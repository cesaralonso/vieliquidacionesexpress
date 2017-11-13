const connection = require('../config/db-connection');

const Folio = {};

Folio.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM folio HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Folio.findById = (FolioId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM folio WHERE idfolio = ? HAVING baja IS NULL OR baja = false',
    [FolioId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Folio.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idfolio) AS count FROM folio`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Folio.exist = (FolioId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM folio WHERE idfolio = ?) AS exist', [FolioId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Folio.insert = (Folio, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO folio SET ?`, [Folio], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Folio.update = (Folio, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE folio SET ? WHERE idfolio = ?', [Folio, Folio.idfolio], (error, result) => {
        if ( error )
            return next({ success: false, error: error });
        else
            return next( null, { success: true, result: result});
    });
};

Folio.logicRemove = (folioId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE folio SET baja = 1 WHERE idfolio = ?', [folioId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Folio eliminado' });
    });
};

Folio.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Folio;
