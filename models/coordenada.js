const connection = require('../config/db-connection');

const Coordenada = {};

Coordenada.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM coordenada HAVING baja IS NULL OR baja = false', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Coordenada.findById = (CoordenadaId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM coordenada WHERE idcoordenada = ? HAVING baja IS NULL OR baja = false',
    [CoordenadaId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Coordenada.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idcoordenada) AS count FROM coordenada`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Coordenada.exist = (CoordenadaId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM coordenada WHERE idcoordenada = ?) AS exist', [CoordenadaId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Coordenada.insert = (Coordenada, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO coordenada SET ?`, [Coordenada], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Coordenada.update = (coordenada, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE coordenada SET ? WHERE idcoordenada = ?', [coordenada, coordenada.idcoordenada], (error, result) => {
        if ( error )
            return next({ success: false, error: error });
        else
            return next( null, { success: true, result: result});
    });
};

Coordenada.logicRemove = (coordenadaId, next) => {
    if( !connection )
        return next('Connection refused');
    connection.query('UPDATE coordenada SET baja = 1 WHERE idcoordenada = ?', [coordenadaId], (error, result) => {
        if ( error )
            return next({ success: false, error: error, message: 'Hubo un error al eliminar este registro' });
        else
            return next( null, { success: true, result: result, message: 'Coordenada eliminado' });
    });
};

Coordenada.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Coordenada;
