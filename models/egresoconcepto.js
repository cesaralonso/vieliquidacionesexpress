const connection = require('../config/db-connection');

const Egresoconcepto = {};

Egresoconcepto.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM egresoconcepto HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Egresoconcepto.findById = (EgresoconceptoId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM egresoconcepto WHERE idegresoconcepto = ? HAVING baja IS NULL OR baja = false',
    [EgresoconceptoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Egresoconcepto.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idegresoconcepto) AS count FROM egresoconcepto`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Egresoconcepto.exist = (EgresoconceptoId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM egresoconcepto WHERE idegresoconcepto = ?) AS exist', [EgresoconceptoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Egresoconcepto.insert = (Egresoconcepto, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO egresoconcepto SET ?`, [Egresoconcepto], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo' })
        else
            return next( null, { success: true, result: result, message: 'Egreso de concepto agregado correctamente' });
    });
};

Egresoconcepto.update = (Egresoconcepto, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE egresoconcepto SET ? WHERE idegresoconcepto = ?', [Egresoconcepto, Egresoconcepto.idegresoconcepto], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al realizar esta acción, intente de nuevo'});
        else
            return next( null, { success: true, result: result, message: 'Datos del egreso actualizados'});
    });
};

Egresoconcepto.logicRemove = (egresoconceptoId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE egresoconcepto SET baja = 1 WHERE idegresoconcepto = ?', [egresoconceptoId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Egreso de concepto eliminado' });
    });
};

Egresoconcepto.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Egresoconcepto;
