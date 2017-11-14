const router = require('express').Router();
const Bonificacion = require('../models/bonificacion');
const passport = require('passport');

router
    .get('/', (req, res, next) => {
        Bonificacion.all( (error, data) => {
            return Bonificacion.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Bonificacion.count( (error, data) => {
            return Bonificacion.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Bonificacion.exist( req.params.id, (error, data) => {
            return Bonificacion.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const bonificacionId = req.params.id;
        Bonificacion.findById( bonificacionId, (error, data) => {
            return Bonificacion.response(res, error, data);
        });
    })
    .delete('/:id', (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            const bonificacionId = req.params.id;
            Bonificacion.logicRemove( bonificacionId, (error, data) => {
                return Bonificacion.response(res, error, data);
            });
        })(req, res, next);
    })
    .patch('/', (req, res, next) => {
        const bonificacion = {
            idbonificacion: req.body.idbonificacion,
            cantidad: req.body.cantidad,
            validado: req.body.validado,
            status: req.body.status,
            concepto: req.body.concepto,
            chofer_idchofer: req.body.chofer_idchofer,

        };
        Bonificacion.update( bonificacion, (error, data) => {
            return Bonificacion.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const bonificacion = {
            idbonificacion: null,
            cantidad: req.body.cantidad,
            validado: req.body.validado,
            status: req.body.status,
            concepto: req.body.concepto,
            chofer_idchofer: req.body.chofer_idchofer,
            baja: false

        };
        console.log(bonificacion);
        Bonificacion.insert( bonificacion, (error, data) => {
            return Bonificacion.response(res, error, data);
        });
    })

module.exports = router;
