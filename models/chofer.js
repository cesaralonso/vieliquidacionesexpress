const connection = require('../config/db-connection');

const Chofer = {};

Chofer.all = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM chofer', (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Chofer.findById = (ChoferId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT * FROM chofer WHERE idchofer = ?',
    [ChoferId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Chofer.count = next => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`SELECT COUNT(idchofer) AS count FROM chofer`, (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });
    });
};

Chofer.exist = (ChoferId, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query('SELECT EXISTS(SELECT 1 FROM chofer WHERE idchofer = ?) AS exist', [ChoferId], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result[0] });

    })
};

Chofer.insert = (chofer, next) => {
    if ( !connection )
        return next('Connection refused');
    connection.query(`INSERT INTO chofer SET ?`, [chofer], (error, result) => {
        if ( error )
            return next({ success: false, error: error })
        else
            return next( null, { success: true, result: result });
    });
};

Chofer.update = (Chofer, next) => {
  console.log(Chofer);
    if ( !connection )
        return next('Connection refused');
    connection.query('UPDATE chofer SET ? WHERE idchofer = ?', [Chofer, Chofer.idchofer], (error, result) => {
        if ( error )
            return next({ success: false, error: error });
        else
            return next( null, { success: true, result: result});
    });
};

Chofer.response = (res, error, data) => {
    if ( error )
        res.status(500).json(error);
    else
        res.status(200).json(data);
};

module.exports = Chofer;
