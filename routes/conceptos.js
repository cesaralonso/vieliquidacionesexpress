const router = require('express').Router();
const Concepto = require('../models/concepto');

router
    .get('/', (req, res, next) => {
        Concepto.all( (error, data) => {
            return Concepto.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Concepto.count( (error, data) => {
            return Concepto.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Concepto.exist( req.params.id, (error, data) => {
            return Concepto.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const conceptoId = req.params.id;
        Concepto.findById( conceptoId, (error, data) => {
            return Concepto.response(res, error, data);
        });
    })


    .delete('/:id', (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            const conceptoId = req.params.id;
            Concepto.logicRemove( conceptoId, (error, data) => {
                return Concepto.response(res, error, data);
            });
        })(req, res, next);
    })



    .patch('/', (req, res, next) => {
        const concepto = {
            idconcepto: req.body.idconcepto,
            nombre: req.body.nombre,

        };
        Concepto.update( concepto, (error, data) => {
            return Concepto.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const concepto = {
            idconcepto: null,
            nombre: req.body.nombre,
            baja: false

        };
        console.log(concepto);
        Concepto.insert( concepto, (error, data) => {
            return Concepto.response(res, error, data);
        });
    })

module.exports = router;
