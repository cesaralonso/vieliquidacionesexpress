const router = require('express').Router();
const Chofer = require('../models/chofer');
const passport = require('passport');

router
    .get('/', (req, res, next) => {
        Chofer.all( (error, data) => {
            return Chofer.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Chofer.count( (error, data) => {
            return Chofer.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Chofer.exist( req.params.id, (error, data) => {
            return Chofer.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const choferId = req.params.id;
        Chofer.findById( choferId, (error, data) => {
            return Chofer.response(res, error, data);
        });
    })


    .delete('/:id', (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            const choferId = req.params.id;
            Chofer.logicRemove( choferId, (error, data) => {
                return Chofer.response(res, error, data);
            });
        })(req, res, next);
    })

    
    .patch('/', (req, res, next) => {
        const chofer = {
            idchofer: req.body.idchofer,
            licencia: req.body.licencia,
            fianza: req.body.fianza,
            status: req.body.status,
            chofer: req.body.chofer,
            aval1: req.body.aval1,
            aval2: req.body.aval2,
            aval3: req.body.aval3,
            aval4: req.body.aval4,
        };
        Chofer.update( chofer, (error, data) => {
            return Chofer.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const chofer = {
            idchofer: null,
            licencia: req.body.licencia,
            fianza: req.body.fianza,
            status: req.body.status,
            chofer: req.body.chofer,
            aval1: req.body.aval1,
            aval2: req.body.aval2,
            aval3: req.body.aval3,
            aval4: req.body.aval4,
            baja: false
        };
        console.log(chofer);
        Chofer.insert( chofer, (error, data) => {
            return Chofer.response(res, error, data);
        });
    })

module.exports = router;
