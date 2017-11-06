const router = require('express').Router();
const Coordenada = require('../models/coordenada');

router
    .get('/', (req, res, next) => {
        Coordenada.all( (error, data) => {
            return Coordenada.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Coordenada.count( (error, data) => {
            return Coordenada.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Coordenada.exist( req.params.id, (error, data) => {
            return Coordenada.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const coordenadaId = req.params.id;
        Coordenada.findById( coordenadaId, (error, data) => {
            return Coordenada.response(res, error, data);
        });
    })
    .patch('/', (req, res, next) => {
        const coordenada = {
            idcoordenada: req.body.idcoordenada,
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            
        };
        Coordenada.update( coordenada, (error, data) => {
            return Coordenada.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const coordenada = {
            idcoordenada: null,
            latitud: req.body.latitud,
            longitud: req.body.longitud,

          };
        console.log(coordenada);
        Coordenada.insert( coordenada, (error, data) => {
            return Coordenada.response(res, error, data);
        });
    })

module.exports = router;
