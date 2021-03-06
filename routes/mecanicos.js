const router = require('express').Router();
const Mecanico = require('../models/mecanico');
const passport = require('passport');

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


    .delete('/:id', (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            const mecanicoId = req.params.id;
            Mecanico.logicRemove( mecanicoId, (error, data) => {
                return Mecanico.response(res, error, data);
            });
        })(req, res, next);
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
            baja: false

          };
        console.log(mecanico);
        Mecanico.insert( mecanico, (error, data) => {
            return Mecanico.response(res, error, data);
        });
    })

module.exports = router;
