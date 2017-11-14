const router = require('express').Router();
const Corralon = require('../models/corralon');
const passport = require('passport');

router
    .get('/', (req, res, next) => {
        Corralon.all( (error, data) => {
            return Corralon.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Corralon.count( (error, data) => {
            return Corralon.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Corralon.exist( req.params.id, (error, data) => {
            return Corralon.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const corralonId = req.params.id;
        Corralon.findById( corralonId, (error, data) => {
            return Corralon.response(res, error, data);
        });
    })


    .delete('/:id', (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            const corralonId = req.params.id;
            Corralon.logicRemove( corralonId, (error, data) => {
                return Corralon.response(res, error, data);
            });
        })(req, res, next);
    })


    .patch('/', (req, res, next) => {
        const corralon = {
            idcorralon: req.body.idcorralon,
            fecha: req.body.fecha,
            infraccionNumero: req.body.infraccionNumero,
            corralonNombre: req.body.corralonNombre,
            motivo: req.body.motivo,
            status: req.body.status,
            permisotaxiasignado_idpermisotaxiasignado: req.body.permisotaxiasignado_idpermisotaxiasignado,

        };
        Corralon.update( corralon, (error, data) => {
            return Corralon.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const corralon = {
            idcorralon: null,
            fecha: req.body.fecha,
            infraccionNumero: req.body.infraccionNumero,
            corralonNombre: req.body.corralonNombre,
            motivo: req.body.motivo,
            status: req.body.status,
            permisotaxiasignado_idpermisotaxiasignado: req.body.permisotaxiasignado_idpermisotaxiasignado,
            baja: false

          };
        console.log(corralon);
        Corralon.insert( corralon, (error, data) => {
            return Corralon.response(res, error, data);
        });
    })

module.exports = router;
