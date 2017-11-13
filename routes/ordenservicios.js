const router = require('express').Router();
const Ordenservicio = require('../models/ordenservicio');

router
    .get('/', (req, res, next) => {
        Ordenservicio.all( (error, data) => {
            return Ordenservicio.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Ordenservicio.count( (error, data) => {
            return Ordenservicio.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Ordenservicio.exist( req.params.id, (error, data) => {
            return Ordenservicio.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const ordenservicioId = req.params.id;
        Ordenservicio.findById( ordenservicioId, (error, data) => {
            return Ordenservicio.response(res, error, data);
        });
    })


    .delete('/:id', (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            const ordenservicioId = req.params.id;
            Ordenservicio.logicRemove( ordenservicioId, (error, data) => {
                return Ordenservicio.response(res, error, data);
            });
        })(req, res, next);
    })

    .patch('/', (req, res, next) => {
        const ordenservicio = {
            idordenservicio: req.body.idordenservicio,
            orden_idorden: req.body.orden_idorden,
            servicio_idservicio: req.body.servicio_idservicio,

        };
        Ordenservicio.update( ordenservicio, (error, data) => {
            return Ordenservicio.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const ordenservicio = {
            idordenservicio: null,
            orden_idorden: req.body.orden_idorden,
            servicio_idservicio: req.body.servicio_idservicio,
            baja: false

          };
        console.log(ordenservicio);
        Ordenservicio.insert( ordenservicio, (error, data) => {
            return Ordenservicio.response(res, error, data);
        });
    })

module.exports = router;
