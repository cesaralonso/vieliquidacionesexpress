const router = require('express').Router();
const Liquidacion_has_folio = require('../models/liquidacion_has_folio');

router
    .get('/', (req, res, next) => {
        Liquidacion_has_folio.all( (error, data) => {
            return Liquidacion_has_folio.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Liquidacion_has_folio.count( (error, data) => {
            return Liquidacion_has_folio.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Liquidacion_has_folio.exist( req.params.id, (error, data) => {
            return Liquidacion_has_folio.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const liquidacion_has_folioId = req.params.id;
        Liquidacion_has_folio.findById( liquidacion_has_folioId, (error, data) => {
            return Liquidacion_has_folio.response(res, error, data);
        });
    })
    .patch('/', (req, res, next) => {
        const liquidacion_has_folio = {
            liquidacion_idliquidacion: req.body.liquidacion_idliquidacion,
            folio_idfolio: req.body.folio_idfolio,

        };
        Liquidacion_has_folio.update( liquidacion_has_folio, (error, data) => {
            return Liquidacion_has_folio.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const liquidacion_has_folio = {
            liquidacion_idliquidacion: req.body.liquidacion_idliquidacion,
            folio_idfolio: req.body.folio_idfolio,

        };
        console.log(liquidacion_has_folio);
        Liquidacion_has_folio.insert( liquidacion_has_folio, (error, data) => {
            return Liquidacion_has_folio.response(res, error, data);
        });
    })

module.exports = router;
