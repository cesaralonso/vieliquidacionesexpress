const router = require('express').Router();
const Enviotaller = require('../models/enviotaller');
const passport = require('passport');

router
    .get('/', (req, res, next) => {
        Enviotaller.all( (error, data) => {
            return Enviotaller.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Enviotaller.count( (error, data) => {
            return Enviotaller.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Enviotaller.exist( req.params.id, (error, data) => {
            return Enviotaller.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const enviotallerId = req.params.id;
        Enviotaller.findById( enviotallerId, (error, data) => {
            return Enviotaller.response(res, error, data);
        });
    })
    .delete('/:id', (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            const enviotallerId = req.params.id;
            Enviotaller.logicRemove( enviotallerId, (error, data) => {
                return Enviotaller.response(res, error, data);
            });
        })(req, res, next);
    })
    .patch('/', (req, res, next) => {
        const enviotaller = {
            idenviotaller: req.body.idenviotaller,
            fecha: req.body.fecha,
            motivo: req.body.motivo,
            permisotaxiasignado_idpermisotaxiasignado: req.body.permisotaxiasignado_idpermisotaxiasignado,
            taller_idtaller: req.body.taller_idtaller,

        };
        Enviotaller.update( enviotaller, (error, data) => {
            return Enviotaller.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const enviotaller = {
            idenviotaller: null,
            fecha: req.body.fecha,
            motivo: req.body.motivo,
            permisotaxiasignado_idpermisotaxiasignado: req.body.permisotaxiasignado_idpermisotaxiasignado,
            taller_idtaller: req.body.taller_idtaller,
            baja: false

          };
        console.log(enviotaller);
        Enviotaller.insert( enviotaller, (error, data) => {
            return Enviotaller.response(res, error, data);
        });
    })

module.exports = router;
