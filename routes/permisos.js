const router = require('express').Router();
const Permiso = require('../models/permiso');
const passport = require('passport');

router
    .get('/', (req, res, next) => {
        Permiso.all( (error, data) => {
            return Permiso.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Permiso.count( (error, data) => {
            return Permiso.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Permiso.exist( req.params.id, (error, data) => {
            return Permiso.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const permisoId = req.params.id;
        Permiso.findById( permisoId, (error, data) => {
            return Permiso.response(res, error, data);
        });
    })
    .delete('/:id', (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            const permisoId = req.params.id;
            Permiso.logicRemove( permisoId, (error, data) => {
                return Permiso.response(res, error, data);
            });
        })(req, res, next);
    })
    .patch('/', (req, res, next) => {
        const permiso = {
            idpermiso: req.body.idpermiso,
            acceso: req.body.acceso,
            rol_idrol: req.body.rol_idrol,
            modulo_idmodulo: req.body.modulo_idmodulo,
        };
        Permiso.update( permiso, (error, data) => {
            return Permiso.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const permiso = {
            idpermiso: null,
            acceso: req.body.acceso,
            rol_idrol: req.body.rol_idrol,
            modulo_idmodulo: req.body.modulo_idmodulo,
            baja: false
        };
        console.log(permiso);
        Permiso.insert( permiso, (error, data) => {
            return Permiso.response(res, error, data);
        });
    })

module.exports = router;
