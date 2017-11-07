const router = require('express').Router();
const Egresoconcepto = require('../models/egresoconcepto');

router
    .get('/', (req, res, next) => {
        Egresoconcepto.all( (error, data) => {
            return Egresoconcepto.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Egresoconcepto.count( (error, data) => {
            return Egresoconcepto.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Egresoconcepto.exist( req.params.id, (error, data) => {
            return Egresoconcepto.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const egresoconceptoId = req.params.id;
        Egresoconcepto.findById( egresoconceptoId, (error, data) => {
            return Egresoconcepto.response(res, error, data);
        });
    })
    .patch('/', (req, res, next) => {
        const egresoconcepto = {
            idegresoconcepto: req.body.idegresoconcepto,
            fecha: req.body.fecha,
            total: req.body.total,
            taller_idtaller: req.body.taller_idtaller,
            concepto_idconcepto: req.body.concepto_idconcepto,

        };
        Egresoconcepto.update( egresoconcepto, (error, data) => {
            return Egresoconcepto.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const egresoconcepto = {
            idegresoconcepto: null,
            fecha: req.body.fecha,
            total: req.body.total,
            taller_idtaller: req.body.taller_idtaller,
            concepto_idconcepto: req.body.concepto_idconcepto,
            concepto_idconceptoMotor: req.body.concepto_idconceptoMotor,
          
          };
        console.log(egresoconcepto);
        Egresoconcepto.insert( egresoconcepto, (error, data) => {
            return Egresoconcepto.response(res, error, data);
        });
    })

module.exports = router;
