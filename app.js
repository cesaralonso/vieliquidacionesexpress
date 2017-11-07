const express = require('express');
const connection = require('./config/db-connection');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');


//Route importation.
const coordenada = require('./routes/coordenadas');
const user = require('./routes/users');
const rol = require('./routes/roles');
const modulo = require('./routes/modulos');
const permiso = require('./routes/permisos');
const orden = require('./routes/ordenes');
const persona = require('./routes/personas');
const bonificacion = require('./routes/bonificaciones');
const liquidacion = require('./routes/liquidaciones');
const bonificacion_has_liquidacion = require('./routes/bonificaciones_has_liquidaciones');
const concepto = require('./routes/conceptos');
const vehiculo = require('./routes/vehiculos');
const permisotaxi = require('./routes/permisotaxis');
const chofer = require('./routes/choferes');
const permisotaxiasignado = require('./routes/permisotaxiasignados');
const corralon = require('./routes/corralones');
const taller = require('./routes/talleres');
const egresoconcepto = require('./routes/egresoconceptos');
const enviotaller = require('./routes/enviotalleres');
const fianza = require('./routes/fianzas');
const folio = require('./routes/folios');
const fianza_has_folio = require('./routes/fianzas_has_folios');
const liquidacion_has_folio = require('./routes/liquidaciones_has_folios');
const mecanico = require('./routes/mecanicos');
const vehiculoreparando = require('./routes/vehiculoreparandos');
const servicio = require('./routes/servicios');
const ordenservicio = require('./routes/ordenservicios');
const refaccion = require('./routes/refacciones');
const ordenrefaccion = require('./routes/ordenrefacciones');

// Express Instance
const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());



// Initialize passport
app.use(passport.initialize());

// Call passport Strategy
require('./config/passport')(passport);

// Warehouses
app.use('/coordenada', coordenada);
app.use('/user', user);
app.use('/rol',rol);
app.use('/modulo', modulo);
app.use('/orden', orden);
app.use('/permiso', permiso);
app.use('/persona', persona);
app.use('/bonificacion', bonificacion);
app.use('/liquidacion', liquidacion);
app.use('/bonificacion_has_liquidacion', bonificacion_has_liquidacion);
app.use('/concepto', concepto);
app.use('/vehiculo', vehiculo);
app.use('/permisotaxi', permisotaxi);
app.use('/chofer',chofer);
app.use('/permisotaxiasignado', permisotaxiasignado);
app.use('/corralon', corralon);
app.use('/taller', taller);
app.use('/egresoconcepto', egresoconcepto);
app.use('/enviotaller', enviotaller);
app.use('/fianza',fianza);
app.use('/folio', folio);
app.use('/fianza_has_folio', fianza_has_folio);
app.use('/liquidacion_has_folio', liquidacion_has_folio);
app.use('/mecanico', mecanico);
app.use('/vehiculoreparando', vehiculoreparando);
app.use('/servicio',servicio);
app.use('/ordenservicio', ordenservicio);
app.use('/refaccion', refaccion);
app.use('/ordenrefaccion',ordenrefaccion);



// Set port
app.listen(3000);
