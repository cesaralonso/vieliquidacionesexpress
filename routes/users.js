const router = require('express').Router();
const User = require('../models/user');
const passport = require('passport');

router
    .post('/register', (req, res, next) => {
        const user = {
          iduser: null,
          usuario: req.body.usuario,
          email: req.body.email,
          password: req.body.password,
          rol_idrol: req.body.rol_idrol,
          baja: false
        }
        User.register( user, (error, data) =>{
            User.response(res, error, data);
        });
    })
    .post('/login', (req, res, next) => {
        const email = req.body.email;
        const password = req.body.password;

        User.login( email, password, ( error, data ) => {
            return User.response( res, error, data );
        });
    })
    // Route with authentication
    .post('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
        res.send('Route Authentication Works!');
    })
    .get('/', (req, res, next) => {
        User.all( (error, data) => {
            return User.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        User.count( (error, data) => {
            return User.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        User.exist( req.params.id, (error, data) => {
            return User.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const userId = req.params.id;
        User.findById( userId, (error, data) => {
            return User.response(res, error, data);
        });
    })
    .delete('/:id', (req, res, next) => {
        const userId = req.params.id;
        User.remove( userId, (error, data) => {
            return User.response(res, error, data);
        });
    })
    .patch('/', (req, res, next) => {
        const user = {
          iduser: req.body.iduser,
          usuario: req.body.usuario,
          password: req.body.password,
          rol_idrol: req.body.rol_idrol,
        };
        User.update( user, (error, data) => {
            return User.response(res, error, data);
        })
    })



module.exports = router;
