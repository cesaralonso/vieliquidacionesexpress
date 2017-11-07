const router = require('express').Router();
const Ordenrefaccion = require('../models/ordenrefaccion');

router
    .get('/', (req, res, next) => {
        Ordenrefaccion.all( (error, data) => {
            return Ordenrefaccion.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Ordenrefaccion.count( (error, data) => {
            return Ordenrefaccion.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Ordenrefaccion.exist( req.params.id, (error, data) => {
            return Ordenrefaccion.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const ordenrefaccionId = req.params.id;
        Ordenrefaccion.findById( ordenrefaccionId, (error, data) => {
            return Ordenrefaccion.response(res, error, data);
        });
    })
    .patch('/', (req, res, next) => {
        const ordenrefaccion = {
            idordenrefaccion: req.body.idordenrefaccion,
            orden_idorden: req.body.orden_idorden,
            refaccion_idrefaccion: req.body.refaccion_idrefaccion,

        };
        Ordenrefaccion.update( ordenrefaccion, (error, data) => {
            return Ordenrefaccion.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const ordenrefaccion = {
            idordenrefaccion: null,
            orden_idorden: req.body.orden_idorden,
            refaccion_idrefaccion: req.body.refaccion_idrefaccion,
          
          };
        console.log(ordenrefaccion);
        Ordenrefaccion.insert( ordenrefaccion, (error, data) => {
            return Ordenrefaccion.response(res, error, data);
        });
    })

module.exports = router;
