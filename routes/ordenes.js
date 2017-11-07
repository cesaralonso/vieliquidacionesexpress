const router = require('express').Router();
const Orden = require('../models/orden');

router
    .get('/', (req, res, next) => {
        Orden.all( (error, data) => {
            return Orden.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Orden.count( (error, data) => {
            return Orden.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Orden.exist( req.params.id, (error, data) => {
            return Orden.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const ordenId = req.params.id;
        Orden.findById( ordenId, (error, data) => {
            return Orden.response(res, error, data);
        });
    })
    .patch('/', (req, res, next) => {
        const orden = {
            idorden: req.body.idorden,
            fecha: req.body.fecha,
            manoObra: req.body.manoObra,
            subtotal: req.body.subtotal,
            total: req.body.total,
            anticipo: req.body.anticipo,
            status: req.body.status,
            vehiculoreparando_idvehiculoreparando: req.body.vehiculoreparando_idvehiculoreparando,

        };
        Orden.update( orden, (error, data) => {
            return Orden.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const orden = {
            idorden: null,
            fecha: req.body.fecha,
            manoObra: req.body.manoObra,
            subtotal: req.body.subtotal,
            total: req.body.total,
            anticipo: req.body.anticipo,
            status: req.body.status,
            vehiculoreparando_idvehiculoreparando: req.body.vehiculoreparando_idvehiculoreparando,
          
          };
        console.log(orden);
        Orden.insert( orden, (error, data) => {
            return Orden.response(res, error, data);
        });
    })

module.exports = router;
