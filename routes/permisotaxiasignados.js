const router = require('express').Router();
const Permisotaxiasignado = require('../models/permisotaxiasignado');

router
    .get('/', (req, res, next) => {
        Permisotaxiasignado.all( (error, data) => {
            return Permisotaxiasignado.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Permisotaxiasignado.count( (error, data) => {
            return Permisotaxiasignado.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Permisotaxiasignado.exist( req.params.id, (error, data) => {
            return Permisotaxiasignado.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const permisotaxiasignadoId = req.params.id;
        Permisotaxiasignado.findById( permisotaxiasignadoId, (error, data) => {
            return Permisotaxiasignado.response(res, error, data);
        });
    })


    .delete('/:id', (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            const permisotaxiasignadoId = req.params.id;
            Permisotaxiasignado.logicRemove( permisotaxiasignadoId, (error, data) => {
                return Permisotaxiasignado.response(res, error, data);
            });
        })(req, res, next);
    })

    .patch('/', (req, res, next) => {
        const permisotaxiasignado = {
            idpermisotaxiasignado: req.body.idpermisotaxiasignado,
            status: req.body.status,
            fecha: req.body.fecha,
            chofer_idchofer: req.body.chofer_idchofer,
            vehiculo_idvehiculo: req.body.vehiculo_idvehiculo,
            permisotaxi_idpermisotaxi: req.body.permisotaxi_idpermisotaxi,

        };
        Permisotaxiasignado.update( permisotaxiasignado, (error, data) => {
            return Permisotaxiasignado.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const permisotaxiasignado = {
            idpermisotaxiasignado: null,
            status: req.body.status,
            fecha: req.body.fecha,
            chofer_idchofer: req.body.chofer_idchofer,
            vehiculo_idvehiculo: req.body.vehiculo_idvehiculo,
            permisotaxi_idpermisotaxi: req.body.permisotaxi_idpermisotaxi,
            baja: false

          };
        console.log(permisotaxiasignado);
        Permisotaxiasignado.insert( permisotaxiasignado, (error, data) => {
            return Permisotaxiasignado.response(res, error, data);
        });
    })

module.exports = router;
