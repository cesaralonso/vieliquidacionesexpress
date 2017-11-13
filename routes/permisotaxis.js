const router = require('express').Router();
const Permisotaxi = require('../models/permisotaxi');

router
    .get('/', (req, res, next) => {
        Permisotaxi.all( (error, data) => {
            return Permisotaxi.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Permisotaxi.count( (error, data) => {
            return Permisotaxi.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Permisotaxi.exist( req.params.id, (error, data) => {
            return Permisotaxi.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const permisotaxiId = req.params.id;
        Permisotaxi.findById( permisotaxiId, (error, data) => {
            return Permisotaxi.response(res, error, data);
        });
    })


    .delete('/:id', (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            const permisotaxiId = req.params.id;
            Permisotaxi.logicRemove( permisotaxiId, (error, data) => {
                return Permisotaxi.response(res, error, data);
            });
        })(req, res, next);
    })

    .patch('/', (req, res, next) => {
        const permisotaxi = {
            idpermisotaxi: req.body.idpermisotaxi,
            numero: req.body.numero,
            status: req.body.status,
            fechaAlta: req.body.fechaAlta,
            vigencia: req.body.vigencia,
            liquidez: req.body.liquidez,
            liquidezDom: req.body.liquidezDom,
            propietario: req.body.propietario,

        };
        Permisotaxi.update( permisotaxi, (error, data) => {
            return Permisotaxi.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const permisotaxi = {
            idpermisotaxi: null,
            numero: req.body.numero,
            status: req.body.status,
            fechaAlta: req.body.fechaAlta,
            vigencia: req.body.vigencia,
            liquidez: req.body.liquidez,
            liquidezDom: req.body.liquidezDom,
            propietario: req.body.propietario,
            baja: false

          };
        console.log(permisotaxi);
        Permisotaxi.insert( permisotaxi, (error, data) => {
            return Permisotaxi.response(res, error, data);
        });
    })

module.exports = router;
