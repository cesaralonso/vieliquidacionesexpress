const router = require('express').Router();
const Bonificacion_has_liquidacion = require('../models/bonificacion_has_liquidacion');

router
    .get('/', (req, res, next) => {
        Bonificacion_has_liquidacion.all( (error, data) => {
            return Bonificacion_has_liquidacion.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Bonificacion_has_liquidacion.count( (error, data) => {
            return Bonificacion_has_liquidacion.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Bonificacion_has_liquidacion.exist( req.params.id, (error, data) => {
            return Bonificacion_has_liquidacion.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const bonificacion_has_liquidacionId = req.params.id;
        Bonificacion_has_liquidacion.findById( bonificacion_has_liquidacionId, (error, data) => {
            return Bonificacion_has_liquidacion.response(res, error, data);
        });
    })

    .delete('/:id', (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            const bonificacion_idbonificacionId = req.params.id;
            Bonificacion_has_liquidacion.logicRemove( bonificacion_idbonificacionId, liquidacion_idliquidacionId, (error, data) => {
                return Bonificacion_has_liquidacion.response(res, error, data);
            });
        })(req, res, next);
    })


    .patch('/', (req, res, next) => {
        const bonificacion_has_liquidacion = {
            bonificacion_idbonificacion: req.body.bonificacion_idbonificacion,
            liquidacion_idliquidacion: req.body.liquidacion_idliquidacion,

        };
        Bonificacion_has_liquidacion.update( bonificacion_has_liquidacion, (error, data) => {
            return Bonificacion_has_liquidacion.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const bonificacion_has_liquidacion = {
            bonificacion_idbonificacion: req.body.bonificacion_idbonificacion,
            liquidacion_idliquidacion: req.body.liquidacion_idliquidacion,
            baja: false

        };
        console.log(bonificacion_has_liquidacion);
        Bonificacion_has_liquidacion.insert( bonificacion_has_liquidacion, (error, data) => {
            return Bonificacion_has_liquidacion.response(res, error, data);
        });
    })

module.exports = router;
