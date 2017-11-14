const router = require('express').Router();
const Fianza = require('../models/fianza');
const passport = require('passport');

router
    .get('/', (req, res, next) => {
        Fianza.all( (error, data) => {
            return Fianza.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Fianza.count( (error, data) => {
            return Fianza.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Fianza.exist( req.params.id, (error, data) => {
            return Fianza.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const fianzaId = req.params.id;
        Fianza.findById( fianzaId, (error, data) => {
            return Fianza.response(res, error, data);
        });
    })
    .delete('/:id', (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            const fianzaId = req.params.id;
            Fianza.logicRemove( fianzaId, (error, data) => {
                return Fianza.response(res, error, data);
            });
        })(req, res, next);
    })
    .patch('/', (req, res, next) => {
        const fianza = {
            idfianza: req.body.idfianza,
            montopagado: req.body.montopagado,
            montoadeudado: req.body.montoadeudado,
            status: req.body.status,
            chofer_idchofer: req.body.chofer_idchofer,

        };
        Fianza.update( fianza, (error, data) => {
            return Fianza.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const fianza = {
            idfianza: null,
            montopagado: req.body.montopagado,
            montoadeudado: req.body.montoadeudado,
            status: req.body.status,
            chofer_idchofer: req.body.chofer_idchofer,
            baja: false
        };
        console.log(fianza);
        Fianza.insert( fianza, (error, data) => {
            return Fianza.response(res, error, data);
        });
    })

module.exports = router;
