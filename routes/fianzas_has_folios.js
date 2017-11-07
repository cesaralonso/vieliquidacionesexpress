const router = require('express').Router();
const Fianza_has_folio = require('../models/fianza_has_folio');

router
    .get('/', (req, res, next) => {
        Fianza_has_folio.all( (error, data) => {
            return Fianza_has_folio.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Fianza_has_folio.count( (error, data) => {
            return Fianza_has_folio.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Fianza_has_folio.exist( req.params.id, (error, data) => {
            return Fianza_has_folio.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const fianza_has_folioId = req.params.id;
        Fianza_has_folio.findById( fianza_has_folioId, (error, data) => {
            return Fianza_has_folio.response(res, error, data);
        });
    })
    .patch('/', (req, res, next) => {
        const fianza_has_folio = {
            fianza_idfianza: req.body.fianza_idfianza,
            folio_idfolio: req.body.folio_idfolio,

        };
        Fianza_has_folio.update( fianza_has_folio, (error, data) => {
            return Fianza_has_folio.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const fianza_has_folio = {
            fianza_idfianza: req.body.fianza_idfianza,
            folio_idfolio: req.body.folio_idfolio,

        };
        console.log(fianza_has_folio);
        Fianza_has_folio.insert( fianza_has_folio, (error, data) => {
            return Fianza_has_folio.response(res, error, data);
        });
    })

module.exports = router;
