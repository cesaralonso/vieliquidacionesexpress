const connection = require('../config/db-connection');

const Corralon = {};

Corralon.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM corralon', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Corralon.findById = (CorralonId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM corralon WHERE idcorralon = ?',
    [CorralonId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Corralon.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idcorralon) AS count FROM corralon`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Corralon.exist = (CorralonId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM corralon WHERE idcorralon = ?) AS exist', [CorralonId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Corralon.insert = (Corralon, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO corralon SET ?`, [Corralon], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Corralon.update = (Corralon, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE corralon SET ? WHERE idcorralon = ?', [Corralon, Corralon.idcorralon], (error, result) => {
        if ( error )
            return next({ success: false, error: error });
        else
            return next( null, { success: true, result: result});
    });
};

Corralon.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Corralon;
