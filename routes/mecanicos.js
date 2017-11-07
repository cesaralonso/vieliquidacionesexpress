const router = require('express').Router();
const Mecanico = require('../models/mecanico');

router
    .get('/', (req, res, next) => {
        Mecanico.all( (error, data) => {
            return Mecanico.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Mecanico.count( (error, data) => {
            return Mecanico.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Mecanico.exist( req.params.id, (error, data) => {
            return Mecanico.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const mecanicoId = req.params.id;
        Mecanico.findById( mecanicoId, (error, data) => {
            return Mecanico.response(res, error, data);
        });
    })
    .patch('/', (req, res, next) => {
        const mecanico = {
            idmecanico: req.body.idmecanico,
            persona_idpersona: req.body.persona_idpersona,
            taller_idtaller: req.body.taller_idtaller,

        };
        Mecanico.update( mecanico, (error, data) => {
            return Mecanico.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const mecanico = {
            idmecanico: null,
            persona_idpersona: req.body.persona_idpersona,
            taller_idtaller: req.body.taller_idtaller,
          
          };
        console.log(mecanico);
        Mecanico.insert( mecanico, (error, data) => {
            return Mecanico.response(res, error, data);
        });
    })

module.exports = router;
