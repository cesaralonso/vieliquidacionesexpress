const router = require('express').Router();
const Vehiculoreparando = require('../models/vehiculoreparando');
const passport = require('passport');

router
    .get('/', (req, res, next) => {
        Vehiculoreparando.all( (error, data) => {
            return Vehiculoreparando.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Vehiculoreparando.count( (error, data) => {
            return Vehiculoreparando.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Vehiculoreparando.exist( req.params.id, (error, data) => {
            return Vehiculoreparando.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const vehiculoreparandoId = req.params.id;
        Vehiculoreparando.findById( vehiculoreparandoId, (error, data) => {
            return Vehiculoreparando.response(res, error, data);
        });
    })
    .delete('/:id', (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            const vehiculoreparandoId = req.params.id;
            Vehiculoreparando.logicRemove( vehiculoreparandoId, (error, data) => {
                return Vehiculoreparando.response(res, error, data);
            });
        })(req, res, next);
    })
    .patch('/', (req, res, next) => {
        const vehiculoreparando = {
            idvehiculoreparando: req.body.idvehiculoreparando,
            fechaIngresa: req.body.fechaIngresa,
            fechaSalida: req.body.fechaSalida,
            fechaEstimada: req.body.fechaEstimada,
            inventario: req.body.inventario,
            motivo: req.body.motivo,
            status: req.body.status,
            orden: req.body.orden,
            enviotaller_idenviotaller: req.body.enviotaller_idenviotaller,
            taller_idtaller: req.body.taller_idtaller,
            mecanico_idmecanico: req.body.mecanico_idmecanico,
            permisotaxiasignado_idpermisotaxiasignado: req.body.permisotaxiasignado_idpermisotaxiasignado,

        };
        Vehiculoreparando.update( vehiculoreparando, (error, data) => {
            return Vehiculoreparando.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const vehiculoreparando = {
            idvehiculoreparando: null,
            fechaIngresa: req.body.fechaIngresa,
            fechaSalida: req.body.fechaSalida,
            fechaEstimada: req.body.fechaEstimada,
            inventario: req.body.inventario,
            motivo: req.body.motivo,
            status: req.body.status,
            orden: req.body.orden,
            enviotaller_idenviotaller: req.body.enviotaller_idenviotaller,
            taller_idtaller: req.body.taller_idtaller,
            mecanico_idmecanico: req.body.mecanico_idmecanico,
            permisotaxiasignado_idpermisotaxiasignado: req.body.permisotaxiasignado_idpermisotaxiasignado,
            baja: false

          };
        console.log(vehiculoreparando);
        Vehiculoreparando.insert( vehiculoreparando, (error, data) => {
            return Vehiculoreparando.response(res, error, data);
        });
    })

module.exports = router;
