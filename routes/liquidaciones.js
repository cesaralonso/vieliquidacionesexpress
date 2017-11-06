const router = require('express').Router();
const Liquidacion = require('../models/liquidacion');

router
    .get('/', (req, res, next) => {
        Liquidacion.all( (error, data) => {
            return Liquidacion.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Liquidacion.count( (error, data) => {
            return Liquidacion.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Liquidacion.exist( req.params.id, (error, data) => {
            return Liquidacion.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const liquidacionId = req.params.id;
        Liquidacion.findById( liquidacionId, (error, data) => {
            return Liquidacion.response(res, error, data);
        });
    })
    .patch('/', (req, res, next) => {
        const liquidacion = {
            idliquidacion: req.body.idliquidacion,
            cantidadRecibida: req.body.cantidadRecibida,
            cambio: req.body.cambio,
            folio: req.body.folio,
            kilometraje: req.body.kilometraje,
            fecha: req.body.fecha,
            nota: req.body.nota,
            cantPagada: req.body.cantPagada,
            cantDeuda: req.body.cantDeuda,
            status: req.body.status,
            bonificado: req.body.bonificado,
            chofer_idchofer: req.body.chofer_idchofer,
            };

        Liquidacion.update( liquidacion, (error, data) => {
            return Liquidacion.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const liquidacion = {
            idliquidacion: null,
            cantidadRecibida: req.body.cantidadRecibida,
            cambio: req.body.cambio,
            folio: req.body.folio,
            kilometraje: req.body.kilometraje,
            fecha: req.body.fecha,
            nota: req.body.nota,
            cantPagada: req.body.cantPagada,
            cantDeuda: req.body.cantDeuda,
            status: req.body.status,
            bonificado: req.body.bonificado,
            chofer_idchofer: req.body.chofer_idchofer,
        };
        console.log(liquidacion);
        Liquidacion.insert( liquidacion, (error, data) => {
            return Liquidacion.response(res, error, data);
        });
    })

module.exports = router;
