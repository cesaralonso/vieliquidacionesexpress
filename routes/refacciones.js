const router = require('express').Router();
const Refaccion = require('../models/refaccion');
const passport = require('passport');

router
    .get('/', (req, res, next) => {
        Refaccion.all( (error, data) => {
            return Refaccion.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Refaccion.count( (error, data) => {
            return Refaccion.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Refaccion.exist( req.params.id, (error, data) => {
            return Refaccion.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const refaccionId = req.params.id;
        Refaccion.findById( refaccionId, (error, data) => {
            return Refaccion.response(res, error, data);
        });
    })
    .delete('/:id', (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            const refaccionId = req.params.id;
            Refaccion.logicRemove( refaccionId, (error, data) => {
                return Refaccion.response(res, error, data);
            });
        })(req, res, next);
    })
    .patch('/', (req, res, next) => {
        const refaccion = {
            idrefaccion: req.body.idrefaccion,
            nombre: req.body.nombre,
            precioCompra: req.body.precioCompra,
            precioVenta: req.body.precioVenta,
            precioVentaIva: req.body.precioVentaIva,
            taller_idtaller: req.body.taller_idtaller,

        };
        Refaccion.update( refaccion, (error, data) => {
            return Refaccion.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const refaccion = {
            idrefaccion: null,
            nombre: req.body.nombre,
            precioCompra: req.body.precioCompra,
            precioVenta: req.body.precioVenta,
            taller_idtaller: req.body.taller_idtaller,
            baja: false
          };
        console.log(refaccion);
        Refaccion.insert( refaccion, (error, data) => {
            console.log(error);
            return Refaccion.response(res, error, data);
        });
    })

module.exports = router;
