-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 21, 2017 at 04:07 AM
-- Server version: 5.6.35
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `vieliquidaciones`
--

-- --------------------------------------------------------

--
-- Table structure for table `bonificacion`
--

CREATE TABLE `bonificacion` (
  `idbonificacion` int(11) NOT NULL,
  `cantidad` float DEFAULT NULL,
  `validado` tinyint(4) DEFAULT NULL,
  `status` varchar(25) DEFAULT NULL,
  `concepto` varchar(45) DEFAULT NULL,
  `chofer_idchofer` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `bonificacion_has_liquidacion`
--

CREATE TABLE `bonificacion_has_liquidacion` (
  `bonificacion_idbonificacion` int(11) NOT NULL,
  `liquidacion_idliquidacion` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `chofer`
--

CREATE TABLE `chofer` (
  `idchofer` int(11) NOT NULL,
  `licencia` varchar(40) DEFAULT NULL,
  `fianza` int(11) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `chofer` int(11) NOT NULL,
  `aval1` int(11) NOT NULL,
  `aval2` int(11) NOT NULL,
  `aval3` int(11) NOT NULL,
  `aval4` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chofer`
--

INSERT INTO `chofer` (`idchofer`, `licencia`, `fianza`, `status`, `chofer`, `aval1`, `aval2`, `aval3`, `aval4`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(4, 'Licencia de chofer', 300, 'Activo', 47, 48, 49, 50, 51, 0, NULL, '2017-11-16 21:15:37', NULL),
(5, 'Licencia de chofer', 200, 'Activo', 53, 54, 55, 56, 57, 0, NULL, '2017-11-17 20:06:50', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `concepto`
--

CREATE TABLE `concepto` (
  `idconcepto` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `coordenada`
--

CREATE TABLE `coordenada` (
  `idcoordenada` int(11) NOT NULL,
  `latitud` varchar(45) DEFAULT NULL,
  `longitud` varchar(45) DEFAULT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `coordenada`
--

INSERT INTO `coordenada` (`idcoordenada`, `latitud`, `longitud`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, '2131', '-999321', 0, NULL, '2017-11-16 18:11:29', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `corralon`
--

CREATE TABLE `corralon` (
  `idcorralon` int(11) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `infraccionNumero` int(11) DEFAULT NULL,
  `corralonNombre` varchar(45) DEFAULT NULL,
  `motivo` varchar(150) DEFAULT NULL,
  `status` varchar(25) DEFAULT NULL,
  `permisotaxiasignado_idpermisotaxiasignado` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `egresoconcepto`
--

CREATE TABLE `egresoconcepto` (
  `idegresoconcepto` int(11) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `taller_idtaller` int(11) NOT NULL,
  `concepto_idconcepto` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `enviotaller`
--

CREATE TABLE `enviotaller` (
  `idenviotaller` int(11) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `motivo` varchar(80) DEFAULT NULL,
  `permisotaxiasignado_idpermisotaxiasignado` int(11) NOT NULL,
  `taller_idtaller` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `enviotaller`
--

INSERT INTO `enviotaller` (`idenviotaller`, `fecha`, `motivo`, `permisotaxiasignado_idpermisotaxiasignado`, `taller_idtaller`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, '2017-11-17 00:00:00', 'Choque', 1, 1, 0, NULL, '2017-11-17 22:51:18', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `fianza`
--

CREATE TABLE `fianza` (
  `idfianza` int(11) NOT NULL,
  `montopagado` float DEFAULT NULL,
  `montoadeudado` float DEFAULT NULL,
  `status` varchar(25) DEFAULT NULL,
  `chofer_idchofer` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `fianza_has_folio`
--

CREATE TABLE `fianza_has_folio` (
  `fianza_idfianza` int(11) NOT NULL,
  `folio_idfolio` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `folio`
--

CREATE TABLE `folio` (
  `idfolio` int(11) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `liquidacion`
--

CREATE TABLE `liquidacion` (
  `idliquidacion` int(11) NOT NULL,
  `cantidadRecibida` int(11) DEFAULT NULL,
  `cambio` int(11) DEFAULT NULL,
  `folio` varchar(45) DEFAULT NULL,
  `kilometraje` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `nota` varchar(60) DEFAULT NULL,
  `cantPagada` int(11) DEFAULT NULL,
  `cantDeuda` int(11) DEFAULT NULL,
  `status` varchar(25) DEFAULT NULL,
  `bonificado` int(11) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `chofer_idchofer` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `liquidacion_has_folio`
--

CREATE TABLE `liquidacion_has_folio` (
  `liquidacion_idliquidacion` int(11) NOT NULL,
  `folio_idfolio` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `mecanico`
--

CREATE TABLE `mecanico` (
  `idmecanico` int(11) NOT NULL,
  `persona_idpersona` int(11) NOT NULL,
  `taller_idtaller` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mecanico`
--

INSERT INTO `mecanico` (`idmecanico`, `persona_idpersona`, `taller_idtaller`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, 55, 1, 0, NULL, '2017-11-17 22:47:43', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `modulo`
--

CREATE TABLE `modulo` (
  `idmodulo` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `orden`
--

CREATE TABLE `orden` (
  `idorden` int(11) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `manoObra` int(11) DEFAULT NULL,
  `subtotal` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `anticipo` int(11) DEFAULT NULL,
  `status` varchar(25) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `vehiculoreparando_idvehiculoreparando` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orden`
--

INSERT INTO `orden` (`idorden`, `fecha`, `manoObra`, `subtotal`, `total`, `anticipo`, `status`, `descripcion`, `vehiculoreparando_idvehiculoreparando`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(3, '2017-01-19 00:00:00', 100, 872, 962, 10, 'stats', NULL, 1, 0, NULL, '2017-11-21 00:02:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orden_has_refaccion`
--

CREATE TABLE `orden_has_refaccion` (
  `orden_idorden` int(11) NOT NULL,
  `refaccion_idrefaccion` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orden_has_refaccion`
--

INSERT INTO `orden_has_refaccion` (`orden_idorden`, `refaccion_idrefaccion`, `cantidad`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(3, 1, 3, 0, NULL, '2017-11-21 00:02:24', NULL),
(3, 2, 1, 0, NULL, '2017-11-21 00:02:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `permiso`
--

CREATE TABLE `permiso` (
  `idpermiso` int(11) NOT NULL,
  `acceso` tinyint(4) DEFAULT NULL,
  `rol_idrol` int(11) NOT NULL,
  `modulo_idmodulo` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `permisotaxi`
--

CREATE TABLE `permisotaxi` (
  `idpermisotaxi` int(11) NOT NULL,
  `numero` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `fechaAlta` date DEFAULT NULL,
  `vigencia` date DEFAULT NULL,
  `liquidez` int(11) DEFAULT NULL,
  `liquidezDom` int(11) DEFAULT NULL,
  `propietario` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `permisotaxi`
--

INSERT INTO `permisotaxi` (`idpermisotaxi`, `numero`, `status`, `fechaAlta`, `vigencia`, `liquidez`, `liquidezDom`, `propietario`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, '4234234', 'stats', '2017-11-17', '2017-11-30', 200, 300, 57, 0, NULL, '2017-11-17 22:47:03', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `permisotaxiasignado`
--

CREATE TABLE `permisotaxiasignado` (
  `idpermisotaxiasignado` int(11) NOT NULL,
  `status` varchar(25) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `chofer_idchofer` int(11) NOT NULL,
  `vehiculo_idvehiculo` int(11) NOT NULL,
  `permisotaxi_idpermisotaxi` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `permisotaxiasignado`
--

INSERT INTO `permisotaxiasignado` (`idpermisotaxiasignado`, `status`, `fecha`, `chofer_idchofer`, `vehiculo_idvehiculo`, `permisotaxi_idpermisotaxi`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, 'stats', '2017-11-17', 5, 1, 1, 0, NULL, '2017-11-17 22:50:26', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `persona`
--

CREATE TABLE `persona` (
  `idpersona` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `sexo` varchar(15) DEFAULT NULL,
  `RFC` varchar(45) DEFAULT NULL,
  `telefono` int(11) DEFAULT NULL,
  `domicilio` varchar(60) DEFAULT NULL,
  `coordenada_idcoordenada` int(11) DEFAULT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `persona`
--

INSERT INTO `persona` (`idpersona`, `nombre`, `edad`, `sexo`, `RFC`, `telefono`, `domicilio`, `coordenada_idcoordenada`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(45, 'Pedro', 40, 'H', NULL, 412435, 'dom', 1, 0, NULL, '2017-11-16 21:12:59', NULL),
(46, 'Ana', 29, 'M', NULL, 532345, 'Dom #43', 1, 0, NULL, '2017-11-16 21:13:28', NULL),
(47, 'Juan', 30, 'H', NULL, 412367, 'Dom ', 1, 0, NULL, '2017-11-16 21:14:27', NULL),
(48, 'Pedro', 41, 'H', 'HJK', 41234, 'Dom', 1, 0, NULL, '2017-11-16 21:14:48', NULL),
(49, 'Ana', 29, 'M', NULL, 413456, 'Dom', 1, 0, NULL, '2017-11-16 21:15:04', NULL),
(50, 'Andres', 30, 'H', NULL, 412456, 'Domc', 1, 0, NULL, '2017-11-16 21:15:23', NULL),
(51, 'Carlos', 30, 'H', NULL, 41345, 'Dom', 1, 0, NULL, '2017-11-16 21:15:35', NULL),
(52, 'Emmanuel', 39, 'H', NULL, 41234324, 'Domcilio #12', 1, 0, NULL, '2017-11-17 20:04:42', NULL),
(53, 'Emmanuel', 39, 'H', 'FGHJ', 41234324, 'Domcilio #12', 1, 0, NULL, '2017-11-17 20:04:45', NULL),
(54, 'Juan', 39, 'H', NULL, 41234, 'Domcilio #12', 1, 0, NULL, '2017-11-17 20:05:45', NULL),
(55, 'Pedro', 49, 'H', NULL, 4123453, 'Domcilio #13', 1, 0, NULL, '2017-11-17 20:06:03', NULL),
(56, 'Juana', 39, 'M', NULL, 41234, 'Domcilio #15', 1, 0, NULL, '2017-11-17 20:06:23', NULL),
(57, 'Ana', 39, 'M', NULL, 4345678, 'Domcilio #121', 1, 0, NULL, '2017-11-17 20:06:44', NULL),
(58, 'lkj', 0, 'lkj', NULL, 0, 'lk', 1, 0, NULL, '2017-11-17 20:11:23', NULL),
(59, 'Chofer nombre', 0, 'lkj', NULL, 0, 'jlkj', 1, 0, NULL, '2017-11-17 20:15:26', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `refaccion`
--

CREATE TABLE `refaccion` (
  `idrefaccion` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `precioCompra` int(11) DEFAULT NULL,
  `precioVenta` int(11) DEFAULT NULL,
  `taller_idtaller` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `refaccion`
--

INSERT INTO `refaccion` (`idrefaccion`, `nombre`, `precioCompra`, `precioVenta`, `taller_idtaller`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, 'Llanta', 200, 232, 1, 0, NULL, '2017-11-17 23:06:14', NULL),
(2, 'Espejo lateral', 150, 176, 1, 0, NULL, '2017-11-17 23:07:01', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `rol`
--

CREATE TABLE `rol` (
  `idrol` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rol`
--

INSERT INTO `rol` (`idrol`, `nombre`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, 'Rol 1', 0, NULL, '2017-11-16 17:58:42', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `taller`
--

CREATE TABLE `taller` (
  `idtaller` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `direccion` varchar(80) DEFAULT NULL,
  `telefono` int(11) DEFAULT NULL,
  `descripcion` varchar(80) DEFAULT NULL,
  `coordenada_idcoordenada` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `taller`
--

INSERT INTO `taller` (`idtaller`, `nombre`, `direccion`, `telefono`, `descripcion`, `coordenada_idcoordenada`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, 'Reparacion de taxis', 'Pascual galindo #232', 4213454, 'Taller de auto parte para taxis', 1, 0, NULL, '2017-11-17 22:46:07', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `iduser` int(11) NOT NULL,
  `usuario` varchar(45) DEFAULT NULL,
  `email` varchar(80) NOT NULL,
  `password` binary(60) DEFAULT NULL,
  `rol_idrol` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`iduser`, `usuario`, `email`, `password`, `rol_idrol`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, 'Brandon', 'brandon@gmail.com', 0x2432612431302437743946626978484f77586d7437705064335979334f544741564a6e5667306a304a7073744e532f75433251543243574d30437671, 1, 0, NULL, '2017-11-16 18:00:36', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `vehiculo`
--

CREATE TABLE `vehiculo` (
  `idvehiculo` int(11) NOT NULL,
  `marca` varchar(20) DEFAULT NULL,
  `modelo` varchar(20) DEFAULT NULL,
  `anio` int(11) DEFAULT NULL,
  `serie` varchar(30) DEFAULT NULL,
  `serieMotor` varchar(40) DEFAULT NULL,
  `placa` varchar(10) DEFAULT NULL,
  `kilometraje` int(11) DEFAULT NULL,
  `status` varchar(15) DEFAULT NULL,
  `poliza` varchar(15) DEFAULT NULL,
  `polizaTipo` varchar(15) DEFAULT NULL,
  `condActual` varchar(150) DEFAULT NULL,
  `condInicial` varchar(150) DEFAULT NULL,
  `color` varchar(20) DEFAULT NULL,
  `propietario` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `vehiculo`
--

INSERT INTO `vehiculo` (`idvehiculo`, `marca`, `modelo`, `anio`, `serie`, `serieMotor`, `placa`, `kilometraje`, `status`, `poliza`, `polizaTipo`, `condActual`, `condInicial`, `color`, `propietario`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, 'SEAT', 'IBIZA', 2012, '1', '14234234', 'JH-23-32', 94389, 'stats', 'poliz', 'poliza', 'El vehiculo se encuentra en optimas condiciones', 'Condicional', 'negro', 55, 0, NULL, '2017-11-17 22:50:16', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `vehiculoreparando`
--

CREATE TABLE `vehiculoreparando` (
  `idvehiculoreparando` int(11) NOT NULL,
  `fechaIngresa` datetime DEFAULT NULL,
  `fechaSalida` datetime DEFAULT NULL,
  `fechaEstimada` datetime DEFAULT NULL,
  `inventario` varchar(80) DEFAULT NULL,
  `motivo` varchar(80) DEFAULT NULL,
  `status` varchar(25) DEFAULT NULL,
  `orden` varchar(45) DEFAULT NULL,
  `enviotaller_idenviotaller` int(11) DEFAULT NULL,
  `taller_idtaller` int(11) NOT NULL,
  `mecanico_idmecanico` int(11) NOT NULL,
  `permisotaxiasignado_idpermisotaxiasignado` int(11) DEFAULT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `vehiculoreparando`
--

INSERT INTO `vehiculoreparando` (`idvehiculoreparando`, `fechaIngresa`, `fechaSalida`, `fechaEstimada`, `inventario`, `motivo`, `status`, `orden`, `enviotaller_idenviotaller`, `taller_idtaller`, `mecanico_idmecanico`, `permisotaxiasignado_idpermisotaxiasignado`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, '2017-11-17 00:00:00', '2017-11-24 00:00:00', '2017-11-25 00:00:00', 'inventario', 'motivo', 'status', 'orden', 1, 1, 1, 1, 0, NULL, '2017-11-17 22:51:21', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bonificacion`
--
ALTER TABLE `bonificacion`
  ADD PRIMARY KEY (`idbonificacion`),
  ADD KEY `fk_bonificacion_chofer1_idx` (`chofer_idchofer`);

--
-- Indexes for table `bonificacion_has_liquidacion`
--
ALTER TABLE `bonificacion_has_liquidacion`
  ADD KEY `fk_bonificacion_has_liquidacion_bonificacion1_idx` (`bonificacion_idbonificacion`),
  ADD KEY `fk_bonificacion_has_liquidacion_liquidacion1_idx` (`liquidacion_idliquidacion`);

--
-- Indexes for table `chofer`
--
ALTER TABLE `chofer`
  ADD PRIMARY KEY (`idchofer`),
  ADD KEY `fk_chofer_persona1_idx` (`chofer`),
  ADD KEY `fk_chofer_persona2_idx` (`aval1`),
  ADD KEY `fk_chofer_persona3_idx` (`aval2`),
  ADD KEY `fk_chofer_persona4_idx` (`aval3`),
  ADD KEY `fk_chofer_persona5_idx` (`aval4`);

--
-- Indexes for table `concepto`
--
ALTER TABLE `concepto`
  ADD PRIMARY KEY (`idconcepto`);

--
-- Indexes for table `coordenada`
--
ALTER TABLE `coordenada`
  ADD PRIMARY KEY (`idcoordenada`);

--
-- Indexes for table `corralon`
--
ALTER TABLE `corralon`
  ADD PRIMARY KEY (`idcorralon`),
  ADD KEY `fk_corralon_permisotaxiasignado1_idx` (`permisotaxiasignado_idpermisotaxiasignado`);

--
-- Indexes for table `egresoconcepto`
--
ALTER TABLE `egresoconcepto`
  ADD PRIMARY KEY (`idegresoconcepto`),
  ADD KEY `fk_egresoconcepto_taller1_idx` (`taller_idtaller`),
  ADD KEY `fk_egresoconcepto_concepto1_idx` (`concepto_idconcepto`);

--
-- Indexes for table `enviotaller`
--
ALTER TABLE `enviotaller`
  ADD PRIMARY KEY (`idenviotaller`),
  ADD KEY `fk_enviotaller_permisotaxiasignado1_idx` (`permisotaxiasignado_idpermisotaxiasignado`),
  ADD KEY `fk_enviotaller_taller1_idx` (`taller_idtaller`);

--
-- Indexes for table `fianza`
--
ALTER TABLE `fianza`
  ADD PRIMARY KEY (`idfianza`),
  ADD KEY `fk_fianza_chofer1_idx` (`chofer_idchofer`);

--
-- Indexes for table `fianza_has_folio`
--
ALTER TABLE `fianza_has_folio`
  ADD KEY `fk_fianza_has_folio_fianza1_idx` (`fianza_idfianza`),
  ADD KEY `fk_fianza_has_folio_folio1_idx` (`folio_idfolio`);

--
-- Indexes for table `folio`
--
ALTER TABLE `folio`
  ADD PRIMARY KEY (`idfolio`);

--
-- Indexes for table `liquidacion`
--
ALTER TABLE `liquidacion`
  ADD PRIMARY KEY (`idliquidacion`),
  ADD KEY `fk_liquidacion_chofer1_idx` (`chofer_idchofer`);

--
-- Indexes for table `liquidacion_has_folio`
--
ALTER TABLE `liquidacion_has_folio`
  ADD KEY `fk_liquidacion_has_folio_liquidacion1_idx` (`liquidacion_idliquidacion`),
  ADD KEY `fk_liquidacion_has_folio_folio1_idx` (`folio_idfolio`);

--
-- Indexes for table `mecanico`
--
ALTER TABLE `mecanico`
  ADD PRIMARY KEY (`idmecanico`),
  ADD KEY `fk_mecanico_persona1_idx` (`persona_idpersona`),
  ADD KEY `fk_mecanico_taller2_idx` (`taller_idtaller`);

--
-- Indexes for table `modulo`
--
ALTER TABLE `modulo`
  ADD PRIMARY KEY (`idmodulo`);

--
-- Indexes for table `orden`
--
ALTER TABLE `orden`
  ADD PRIMARY KEY (`idorden`),
  ADD KEY `fk_orden_vehiculoreparando1_idx` (`vehiculoreparando_idvehiculoreparando`);

--
-- Indexes for table `orden_has_refaccion`
--
ALTER TABLE `orden_has_refaccion`
  ADD KEY `fk_ordenrefaccion_orden1_idx` (`orden_idorden`),
  ADD KEY `fk_ordenrefaccion_refaccion1_idx` (`refaccion_idrefaccion`);

--
-- Indexes for table `permiso`
--
ALTER TABLE `permiso`
  ADD PRIMARY KEY (`idpermiso`),
  ADD KEY `fk_Permiso_Rol1_idx` (`rol_idrol`),
  ADD KEY `fk_Permiso_Modulo1_idx` (`modulo_idmodulo`);

--
-- Indexes for table `permisotaxi`
--
ALTER TABLE `permisotaxi`
  ADD PRIMARY KEY (`idpermisotaxi`),
  ADD KEY `fk_permisotaxi_persona1_idx` (`propietario`);

--
-- Indexes for table `permisotaxiasignado`
--
ALTER TABLE `permisotaxiasignado`
  ADD PRIMARY KEY (`idpermisotaxiasignado`),
  ADD KEY `fk_permisotaxiasignado_chofer1_idx` (`chofer_idchofer`),
  ADD KEY `fk_permisotaxiasignado_vehiculo1_idx` (`vehiculo_idvehiculo`),
  ADD KEY `fk_permisotaxiasignado_permisotaxi1_idx` (`permisotaxi_idpermisotaxi`);

--
-- Indexes for table `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`idpersona`),
  ADD KEY `fk_persona_coordenada1_idx` (`coordenada_idcoordenada`);

--
-- Indexes for table `refaccion`
--
ALTER TABLE `refaccion`
  ADD PRIMARY KEY (`idrefaccion`),
  ADD KEY `fk_refaccion_taller1_idx` (`taller_idtaller`);

--
-- Indexes for table `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`idrol`);

--
-- Indexes for table `taller`
--
ALTER TABLE `taller`
  ADD PRIMARY KEY (`idtaller`),
  ADD KEY `fk_taller_coordenada1_idx` (`coordenada_idcoordenada`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`iduser`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `fk_User_Rol_idx` (`rol_idrol`);

--
-- Indexes for table `vehiculo`
--
ALTER TABLE `vehiculo`
  ADD PRIMARY KEY (`idvehiculo`),
  ADD KEY `fk_vehiculo_persona_idx` (`propietario`);

--
-- Indexes for table `vehiculoreparando`
--
ALTER TABLE `vehiculoreparando`
  ADD PRIMARY KEY (`idvehiculoreparando`),
  ADD KEY `fk_vehiculoreparando_enviotaller1_idx` (`enviotaller_idenviotaller`),
  ADD KEY `fk_vehiculoreparando_taller1_idx` (`taller_idtaller`),
  ADD KEY `fk_vehiculoreparando_mecanico1_idx` (`mecanico_idmecanico`),
  ADD KEY `fk_vehiculoreparando_permisotaxiasignado1_idx` (`permisotaxiasignado_idpermisotaxiasignado`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bonificacion`
--
ALTER TABLE `bonificacion`
  MODIFY `idbonificacion` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `chofer`
--
ALTER TABLE `chofer`
  MODIFY `idchofer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `concepto`
--
ALTER TABLE `concepto`
  MODIFY `idconcepto` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `coordenada`
--
ALTER TABLE `coordenada`
  MODIFY `idcoordenada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `corralon`
--
ALTER TABLE `corralon`
  MODIFY `idcorralon` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `egresoconcepto`
--
ALTER TABLE `egresoconcepto`
  MODIFY `idegresoconcepto` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `enviotaller`
--
ALTER TABLE `enviotaller`
  MODIFY `idenviotaller` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `fianza`
--
ALTER TABLE `fianza`
  MODIFY `idfianza` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `folio`
--
ALTER TABLE `folio`
  MODIFY `idfolio` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `liquidacion`
--
ALTER TABLE `liquidacion`
  MODIFY `idliquidacion` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mecanico`
--
ALTER TABLE `mecanico`
  MODIFY `idmecanico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `modulo`
--
ALTER TABLE `modulo`
  MODIFY `idmodulo` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `orden`
--
ALTER TABLE `orden`
  MODIFY `idorden` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `permiso`
--
ALTER TABLE `permiso`
  MODIFY `idpermiso` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `permisotaxi`
--
ALTER TABLE `permisotaxi`
  MODIFY `idpermisotaxi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `permisotaxiasignado`
--
ALTER TABLE `permisotaxiasignado`
  MODIFY `idpermisotaxiasignado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `persona`
--
ALTER TABLE `persona`
  MODIFY `idpersona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;
--
-- AUTO_INCREMENT for table `refaccion`
--
ALTER TABLE `refaccion`
  MODIFY `idrefaccion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `rol`
--
ALTER TABLE `rol`
  MODIFY `idrol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `taller`
--
ALTER TABLE `taller`
  MODIFY `idtaller` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `vehiculo`
--
ALTER TABLE `vehiculo`
  MODIFY `idvehiculo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `vehiculoreparando`
--
ALTER TABLE `vehiculoreparando`
  MODIFY `idvehiculoreparando` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `bonificacion`
--
ALTER TABLE `bonificacion`
  ADD CONSTRAINT `fk_bonificacion_chofer1` FOREIGN KEY (`chofer_idchofer`) REFERENCES `chofer` (`idchofer`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `bonificacion_has_liquidacion`
--
ALTER TABLE `bonificacion_has_liquidacion`
  ADD CONSTRAINT `fk_bonificacion_has_liquidacion_bonificacion1` FOREIGN KEY (`bonificacion_idbonificacion`) REFERENCES `bonificacion` (`idbonificacion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_bonificacion_has_liquidacion_liquidacion1` FOREIGN KEY (`liquidacion_idliquidacion`) REFERENCES `liquidacion` (`idliquidacion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `chofer`
--
ALTER TABLE `chofer`
  ADD CONSTRAINT `fk_chofer_persona1` FOREIGN KEY (`chofer`) REFERENCES `persona` (`idpersona`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_chofer_persona2` FOREIGN KEY (`aval1`) REFERENCES `persona` (`idpersona`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_chofer_persona3` FOREIGN KEY (`aval2`) REFERENCES `persona` (`idpersona`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_chofer_persona4` FOREIGN KEY (`aval3`) REFERENCES `persona` (`idpersona`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_chofer_persona5` FOREIGN KEY (`aval4`) REFERENCES `persona` (`idpersona`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `corralon`
--
ALTER TABLE `corralon`
  ADD CONSTRAINT `fk_corralon_permisotaxiasignado1` FOREIGN KEY (`permisotaxiasignado_idpermisotaxiasignado`) REFERENCES `permisotaxiasignado` (`idpermisotaxiasignado`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `egresoconcepto`
--
ALTER TABLE `egresoconcepto`
  ADD CONSTRAINT `fk_egresoconcepto_concepto1` FOREIGN KEY (`concepto_idconcepto`) REFERENCES `concepto` (`idconcepto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_egresoconcepto_taller1` FOREIGN KEY (`taller_idtaller`) REFERENCES `taller` (`idtaller`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `enviotaller`
--
ALTER TABLE `enviotaller`
  ADD CONSTRAINT `fk_enviotaller_permisotaxiasignado1` FOREIGN KEY (`permisotaxiasignado_idpermisotaxiasignado`) REFERENCES `permisotaxiasignado` (`idpermisotaxiasignado`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_enviotaller_taller1` FOREIGN KEY (`taller_idtaller`) REFERENCES `taller` (`idtaller`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `fianza`
--
ALTER TABLE `fianza`
  ADD CONSTRAINT `fk_fianza_chofer1` FOREIGN KEY (`chofer_idchofer`) REFERENCES `chofer` (`idchofer`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `fianza_has_folio`
--
ALTER TABLE `fianza_has_folio`
  ADD CONSTRAINT `fk_fianza_has_folio_fianza1` FOREIGN KEY (`fianza_idfianza`) REFERENCES `fianza` (`idfianza`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_fianza_has_folio_folio1` FOREIGN KEY (`folio_idfolio`) REFERENCES `folio` (`idfolio`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `liquidacion`
--
ALTER TABLE `liquidacion`
  ADD CONSTRAINT `fk_liquidacion_chofer1` FOREIGN KEY (`chofer_idchofer`) REFERENCES `chofer` (`idchofer`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `liquidacion_has_folio`
--
ALTER TABLE `liquidacion_has_folio`
  ADD CONSTRAINT `fk_liquidacion_has_folio_folio1` FOREIGN KEY (`folio_idfolio`) REFERENCES `folio` (`idfolio`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_liquidacion_has_folio_liquidacion1` FOREIGN KEY (`liquidacion_idliquidacion`) REFERENCES `liquidacion` (`idliquidacion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `mecanico`
--
ALTER TABLE `mecanico`
  ADD CONSTRAINT `fk_mecanico_persona1` FOREIGN KEY (`persona_idpersona`) REFERENCES `persona` (`idpersona`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_mecanico_taller2` FOREIGN KEY (`taller_idtaller`) REFERENCES `taller` (`idtaller`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `orden`
--
ALTER TABLE `orden`
  ADD CONSTRAINT `fk_orden_vehiculoreparando1` FOREIGN KEY (`vehiculoreparando_idvehiculoreparando`) REFERENCES `vehiculoreparando` (`idvehiculoreparando`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `orden_has_refaccion`
--
ALTER TABLE `orden_has_refaccion`
  ADD CONSTRAINT `fk_ordenrefaccion_orden1` FOREIGN KEY (`orden_idorden`) REFERENCES `orden` (`idorden`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_ordenrefaccion_refaccion1` FOREIGN KEY (`refaccion_idrefaccion`) REFERENCES `refaccion` (`idrefaccion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `permiso`
--
ALTER TABLE `permiso`
  ADD CONSTRAINT `fk_Permiso_Modulo1` FOREIGN KEY (`modulo_idmodulo`) REFERENCES `modulo` (`idmodulo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Permiso_Rol1` FOREIGN KEY (`rol_idrol`) REFERENCES `rol` (`idrol`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `permisotaxi`
--
ALTER TABLE `permisotaxi`
  ADD CONSTRAINT `fk_permisotaxi_persona1` FOREIGN KEY (`propietario`) REFERENCES `persona` (`idpersona`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `permisotaxiasignado`
--
ALTER TABLE `permisotaxiasignado`
  ADD CONSTRAINT `fk_permisotaxiasignado_chofer1` FOREIGN KEY (`chofer_idchofer`) REFERENCES `chofer` (`idchofer`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_permisotaxiasignado_permisotaxi1` FOREIGN KEY (`permisotaxi_idpermisotaxi`) REFERENCES `permisotaxi` (`idpermisotaxi`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_permisotaxiasignado_vehiculo1` FOREIGN KEY (`vehiculo_idvehiculo`) REFERENCES `vehiculo` (`idvehiculo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `persona`
--
ALTER TABLE `persona`
  ADD CONSTRAINT `fk_persona_coordenada1` FOREIGN KEY (`coordenada_idcoordenada`) REFERENCES `coordenada` (`idcoordenada`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `refaccion`
--
ALTER TABLE `refaccion`
  ADD CONSTRAINT `fk_refaccion_taller1` FOREIGN KEY (`taller_idtaller`) REFERENCES `taller` (`idtaller`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `taller`
--
ALTER TABLE `taller`
  ADD CONSTRAINT `fk_taller_coordenada1` FOREIGN KEY (`coordenada_idcoordenada`) REFERENCES `coordenada` (`idcoordenada`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_User_Rol` FOREIGN KEY (`rol_idrol`) REFERENCES `rol` (`idrol`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `vehiculo`
--
ALTER TABLE `vehiculo`
  ADD CONSTRAINT `fk_vehiculo_persona` FOREIGN KEY (`propietario`) REFERENCES `persona` (`idpersona`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `vehiculoreparando`
--
ALTER TABLE `vehiculoreparando`
  ADD CONSTRAINT `fk_vehiculoreparando_enviotaller1` FOREIGN KEY (`enviotaller_idenviotaller`) REFERENCES `enviotaller` (`idenviotaller`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_vehiculoreparando_mecanico1` FOREIGN KEY (`mecanico_idmecanico`) REFERENCES `mecanico` (`idmecanico`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_vehiculoreparando_permisotaxiasignado1` FOREIGN KEY (`permisotaxiasignado_idpermisotaxiasignado`) REFERENCES `permisotaxiasignado` (`idpermisotaxiasignado`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_vehiculoreparando_taller1` FOREIGN KEY (`taller_idtaller`) REFERENCES `taller` (`idtaller`) ON DELETE NO ACTION ON UPDATE NO ACTION;
