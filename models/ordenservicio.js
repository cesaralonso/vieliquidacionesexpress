const connection = require('../config/db-connection');

const Ordenservicio = {};

Ordenservicio.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM ordenservicio HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Ordenservicio.findById = (OrdenservicioId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM ordenservicio WHERE idordenservicio = ? HAVING baja IS NULL OR baja = false',
    [OrdenservicioId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Ordenservicio.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idordenservicio) AS count FROM ordenservicio`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Ordenservicio.exist = (OrdenservicioId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM ordenservicio WHERE idordenservicio = ?) AS exist', [OrdenservicioId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Ordenservicio.insert = (Ordenservicio, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO ordenservicio SET ?`, [Ordenservicio], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Ordenservicio.update = (Ordenservicio, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE ordenservicio SET ? WHERE idordenservicio = ?', [Ordenservicio, Ordenservicio.idordenservicio], (error, result) => {
        if ( error )
            return next({ success: false, error: error });
        else
            return next( null, { success: true, result: result});
    });
};

Ordenservicio.logicRemove = (ordenservicioId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE ordenservicio SET baja = 1 WHERE idordenservicio = ?', [ordenservicioId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Ordenservicio eliminado' });
    });
};

Ordenservicio.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Ordenservicio;
