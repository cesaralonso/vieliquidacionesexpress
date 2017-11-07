const router = require('express').Router();
const Folio = require('../models/folio');

router
    .get('/', (req, res, next) => {
        Folio.all( (error, data) => {
            return Folio.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Folio.count( (error, data) => {
            return Folio.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Folio.exist( req.params.id, (error, data) => {
            return Folio.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const folioId = req.params.id;
        Folio.findById( folioId, (error, data) => {
            return Folio.response(res, error, data);
        });
    })
    .patch('/', (req, res, next) => {
        const folio = {
            idfolio: req.body.idfolio,
            fecha: req.body.fecha,

        };
        Folio.update( folio, (error, data) => {
            return Folio.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const folio = {
            idfolio: null,
            fecha: req.body.fecha,
          
          };
        console.log(folio);
        Folio.insert( folio, (error, data) => {
            return Folio.response(res, error, data);
        });
    })

module.exports = router;
