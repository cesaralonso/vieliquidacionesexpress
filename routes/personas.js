const router = require('express').Router();
const Persona = require('../models/persona');
const passport = require('passport');

router
    .get('/', (req, res, next) => {
        Persona.all( (error, data) => {
            return Persona.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Persona.count( (error, data) => {
            return Persona.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Persona.exist( req.params.id, (error, data) => {
            return Persona.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const personaId = req.params.id;
        Persona.findById( personaId, (error, data) => {
            return Persona.response(res, error, data);
        });
    })


    .delete('/:id', (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            const personaId = req.params.id;
            Persona.logicRemove( personaId, (error, data) => {
                return Persona.response(res, error, data);
            });
        })(req, res, next);
    })

    .patch('/', (req, res, next) => {
        const persona = {
            idpersona: req.body.idpersona,
            nombre: req.body.nombre,
            edad: req.body.edad,
            sexo: req.body.sexo,
            RFC: req.body.RFC,
            telefono: req.body.telefono,
            domicilio: req.body.domicilio,
            coordenada_idcoordenada: req.body.coordenada_idcoordenada,
        };
        Persona.update( persona, (error, data) => {
            return Persona.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const persona = {
            idpersona: null,
            nombre: req.body.nombre,
            edad: req.body.edad,
            sexo: req.body.sexo,
            RFC: req.body.RFC,
            telefono: req.body.telefono,
            domicilio: req.body.domicilio,
            coordenada_idcoordenada: req.body.coordenada_idcoordenada,
            baja: false
        };
        console.log(persona);
        Persona.insert( persona, (error, data) => {
            return Persona.response(res, error, data);
        });
    })
    .delete('/:id', (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            const personaId = req.params.id;
            Persona.logicRemove( personaId, (error, data) => {
                return Persona.response(res, error, data);
            });
        })(req, res, next);        
    })

module.exports = router;
