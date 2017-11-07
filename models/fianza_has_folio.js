const connection = require('../config/db-connection');

const Fianza_has_folio = {};

Fianza_has_folio.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM fianza_has_folio', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Fianza_has_folio.findById = (fianza_idfianzaId,folio_idfolioId next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM fianza_has_folio WHERE fianza_idfianza = ? AND folio_idfolio = ?',
    [fianza_idfianzaId,folio_idfolioId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Fianza_has_folio.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(fianza_idfianza) AS count FROM fianza_has_folio`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Fianza_has_folio.exist = (fianza_idfianzaId, folio_idfolioId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM fianza_has_folio WHERE fianza_idfianza = ? AND folio_idfolio = ?) AS exist', [fianza_idfianzaId,folio_idfolioId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Fianza_has_folio.insert = (Fianza_has_folio, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO fianza_has_folio SET ?`, [Fianza_has_folio], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Fianza_has_folio.update = (Fianza_has_folio, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE fianza_has_folio SET ? WHERE fianza_idfianza = ? AND folio_idfolio = ?', [Fianza_has_folio, Fianza_has_folio.fianza_idfianza, Fianza_has_folio.folio_idfolio], (error, result) => {
        if ( error )
            return next({ success: false, error: error });
        else
            return next( null, { success: true, result: result});
    });
};

Fianza_has_folio.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Fianza_has_folio;
