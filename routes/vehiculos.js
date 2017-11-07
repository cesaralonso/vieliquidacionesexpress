const router = require('express').Router();
const Vehiculo = require('../models/vehiculo');

router
    .get('/', (req, res, next) => {
        Vehiculo.all( (error, data) => {
            return Vehiculo.response(res, error, data);
        });
    })
    .get('/count', (req, res, next) => {
        Vehiculo.count( (error, data) => {
            return Vehiculo.response(res, error, data);
        });
    })
    .get('/exist/:id', (req, res, next) => {
        Vehiculo.exist( req.params.id, (error, data) => {
            return Vehiculo.response(res, error, data);
        });
    })
    .get('/:id', (req, res, next) => {
        const vehiculoId = req.params.id;
        Vehiculo.findById( vehiculoId, (error, data) => {
            return Vehiculo.response(res, error, data);
        });
    })
    .patch('/', (req, res, next) => {
        const vehiculo = {
            idvehiculo: req.body.idvehiculo,
            marca: req.body.marca,
            modelo: req.body.modelo,
            anio: req.body.anio,
            serie: req.body.serie,
            serieMotor: req.body.serieMotor,
            placa: req.body.placa,
            kilometraje: req.body.kilometraje,
            status: req.body.status,
            poliza: req.body.poliza,
            polizaTipo: req.body.polizaTipo,
            condActual: req.body.condActual,
            condInicial: req.body.condInicial,
            color: req.body.color,
            propietario: req.body.propietario,
        };
        Vehiculo.update( vehiculo, (error, data) => {
            return Vehiculo.response(res, error, data);
        })
    })
    .post('/', (req, res, next) => {
        const vehiculo = {
            idvehiculo: null,
            marca: req.body.marca,
            modelo: req.body.modelo,
            anio: req.body.anio,
            serie: req.body.serie,
            serieMotor: req.body.serieMotor,
            placa: req.body.placa,
            kilometraje: req.body.kilometraje,
            status: req.body.status,
            poliza: req.body.poliza,
            polizaTipo: req.body.polizaTipo,
            condActual: req.body.condActual,
            condInicial: req.body.condInicial,
            color: req.body.color,
            propietario: req.body.propietario,
          };
        console.log(vehiculo);
        Vehiculo.insert( vehiculo, (error, data) => {
            return Vehiculo.response(res, error, data);
        });
    })

module.exports = router;
