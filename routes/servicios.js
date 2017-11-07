const router = require('express').Router();
const Servicio = require('../models/servicio');

router
    .get('/', (req, res, next) => {
        Servicio.all( (error, data) => {
            return Servicio.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Servicio.count( (error, data) => {
            return Servicio.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Servicio.exist( req.params.id, (error, data) => {
            return Servicio.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const servicioId = req.params.id;
        Servicio.findById( servicioId, (error, data) => {
            return Servicio.response(res, error, data);
        });
    })
    .patch('/', (req, res, next) => {
        const servicio = {
            idservicio: req.body.idservicio,
            nombre: req.body.nombre,
            precio: req.body.precio,
            iva: req.body.iva,

        };
        Servicio.update( servicio, (error, data) => {
            return Servicio.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const servicio = {
            idservicio: null,
            nombre: req.body.nombre,
            precio: req.body.precio,
            iva: req.body.iva,

          };
        console.log(servicio);
        Servicio.insert( servicio, (error, data) => {
            return Servicio.response(res, error, data);
        });
    })

module.exports = router;
