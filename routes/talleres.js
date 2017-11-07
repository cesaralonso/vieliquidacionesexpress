const router = require('express').Router();
const Taller = require('../models/taller');

router
    .get('/', (req, res, next) => {
        Taller.all( (error, data) => {
            return Taller.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Taller.count( (error, data) => {
            return Taller.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Taller.exist( req.params.id, (error, data) => {
            return Taller.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const tallerId = req.params.id;
        Taller.findById( tallerId, (error, data) => {
            return Taller.response(res, error, data);
        });
    })
    .patch('/', (req, res, next) => {
        const taller = {
            idtaller: req.body.idtaller,
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            descripcion: req.body.descripcion,
            coordenada_idcoordenada: req.body.coordenada_idcoordenada,

        };
        Taller.update( taller, (error, data) => {
            return Taller.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const taller = {
            idtaller: null,
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            descripcion: req.body.descripcion,
            coordenada_idcoordenada: req.body.coordenada_idcoordenada,
          
          };
        console.log(taller);
        Taller.insert( taller, (error, data) => {
            return Taller.response(res, error, data);
        });
    })

module.exports = router;