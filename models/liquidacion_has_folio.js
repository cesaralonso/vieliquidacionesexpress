const connection = require('../config/db-connection');

const Liquidacion_has_folio = {};

Liquidacion_has_folio.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM liquidacion_has_folio', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Liquidacion_has_folio.findById = (liquidacion_idliquidacionId,folio_idfolioId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM liquidacion_has_folio WHERE liquidacion_idliquidacion = ? AND folio_idfolio = ?',
    [liquidacion_idliquidacionId,folio_idfolioId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Liquidacion_has_folio.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(liquidacion_idliquidacion) AS count FROM liquidacion_has_folio`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Liquidacion_has_folio.exist = (liquidacion_idliquidacionId, folio_idfolioId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM liquidacion_has_folio WHERE liquidacion_idliquidacion = ? AND folio_idfolio = ?) AS exist', [liquidacion_idliquidacionId,folio_idfolioId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Liquidacion_has_folio.insert = (Liquidacion_has_folio, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO liquidacion_has_folio SET ?`, [Liquidacion_has_folio], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Liquidacion_has_folio.update = (Liquidacion_has_folio, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE liquidacion_has_folio SET ? WHERE liquidacion_idliquidacion = ? AND folio_idfolio = ?', [Liquidacion_has_folio, Liquidacion_has_folio.liquidacion_idliquidacion, Liquidacion_has_folio.folio_idfolio], (error, result) => {
        if ( error )
            return next({ success: false, error: error });
        else
            return next( null, { success: true, result: result});
    });
};

Liquidacion_has_folio.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Liquidacion_has_folio;
