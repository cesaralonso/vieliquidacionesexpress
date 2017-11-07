const router = require('express').Router();
const Fianza = require('../models/fianza');

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
            
          };
        console.log(fianza);
        Fianza.insert( fianza, (error, data) => {
            return Fianza.response(res, error, data);
        });
    })

module.exports = router;
