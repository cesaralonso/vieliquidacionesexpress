const connection = require('../config/db-connection');

const Concepto = {};

Concepto.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM concepto HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Concepto.findById = (ConceptoId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM concepto WHERE idconcepto = ? HAVING baja IS NULL OR baja = false',
    [ConceptoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Concepto.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idconcepto) AS count FROM concepto`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Concepto.exist = (ConceptoId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM concepto WHERE idconcepto = ?) AS exist', [ConceptoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Concepto.insert = (Concepto, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO concepto SET ?`, [Concepto], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo' })
        else
            return next( null, { success: true, result: result, message: 'Concepto agregado correctamente' });
});
};

Concepto.update = (Concepto, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE concepto SET ? WHERE idconcepto = ?', [Concepto, Concepto.idconcepto], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo'});
        else
            return next( null, { success: true, result: result, message: 'Datos del concepto actualizados'});
    });
};

Concepto.logicRemove = (conceptoId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE concepto SET baja = 1 WHERE idconcepto = ?', [conceptoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Concepto eliminado' });
    });
};

Concepto.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Concepto;
