-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 16, 2017 at 06:50 PM
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

--
-- Dumping data for table `bonificacion`
--

INSERT INTO `bonificacion` (`idbonificacion`, `cantidad`, `validado`, `status`, `concepto`, `chofer_idchofer`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, 1, 0, 'stats', 'concepto de bonificación', 2, 0, NULL, '2017-11-13 23:32:06', NULL),
(2, 11, 1, 'stats', ' concepto mod', 6, 0, NULL, '2017-11-13 23:42:15', NULL);

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
(2, 'Licencia de chofer', 123, 'activo', 1, 2, 2, 2, 2, 0, NULL, '2017-11-10 00:10:36', NULL),
(3, 'Licen', 123, 'stats', 1, 1, 2, 1, 2, 1, NULL, '2017-11-10 00:50:42', NULL),
(4, 'L', 123, 'stats', 1, 2, 2, 2, 2, 1, NULL, '2017-11-10 00:54:51', NULL),
(5, 'Licencia del chofer', 5432, 'stats', 2, 2, 2, 2, 2, NULL, NULL, '2017-11-10 00:55:26', NULL),
(6, 'Licencia del chofer', 400, 'Activo', 2, 2, 1, 1, 1, 0, NULL, '2017-11-10 20:14:50', NULL),
(7, 'lkj', 789, '89', 1, 2, 2, 1, 1, 1, NULL, '2017-11-10 20:33:21', NULL),
(8, 'lic test tedt', 123123, 'stats test', 1, 2, 1, 2, 1, 1, NULL, '2017-11-10 21:30:19', NULL),
(9, '123456789', 2500, 'NUEVO', 2, 2, 2, 6, 6, 1, NULL, '2017-11-11 01:20:17', NULL);

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

--
-- Dumping data for table `concepto`
--

INSERT INTO `concepto` (`idconcepto`, `nombre`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, 'Concepto 1', 0, NULL, '2017-11-10 22:26:05', NULL),
(2, 'Nombre mod', 1, NULL, '2017-11-10 23:15:10', NULL),
(3, 'test', 1, NULL, '2017-11-10 23:18:46', NULL),
(4, 'Concepto 2', 0, NULL, '2017-11-10 23:18:57', NULL),
(5, 'Concepto 3', 0, NULL, '2017-11-10 23:19:01', NULL),
(6, 'cons', 1, NULL, '2017-11-10 23:19:07', NULL);

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
(1, '234234', '42342', 0, NULL, '2017-11-10 00:07:10', NULL);

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

--
-- Dumping data for table `corralon`
--

INSERT INTO `corralon` (`idcorralon`, `fecha`, `infraccionNumero`, `corralonNombre`, `motivo`, `status`, `permisotaxiasignado_idpermisotaxiasignado`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, '2017-04-14 00:00:00', 123, 'Corralon des', 'Motivo del corralon', 'stats', 4, 0, NULL, '2017-11-14 00:24:42', NULL),
(2, '2017-12-31 00:00:00', 98, 'lkj', 'lkj', 'lkj', 4, 1, NULL, '2017-11-14 00:34:40', NULL);

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

--
-- Dumping data for table `egresoconcepto`
--

INSERT INTO `egresoconcepto` (`idegresoconcepto`, `fecha`, `total`, `taller_idtaller`, `concepto_idconcepto`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, '0000-00-00 00:00:00', 1, 1, 1, 1, NULL, '2017-11-14 18:36:25', NULL),
(2, '2016-12-30 00:00:00', 104, 1, 1, 0, NULL, '2017-11-14 18:44:48', NULL),
(3, '2017-03-05 00:00:00', 655, 1, 4, 0, NULL, '2017-11-14 18:52:06', NULL),
(4, '2017-01-01 00:00:00', 0, 1, 5, 1, NULL, '2017-11-14 18:52:15', NULL);

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
(1, '2017-03-01 00:00:00', 'stats', 5, 1, 0, NULL, '2017-11-14 00:58:58', NULL),
(2, '2017-04-03 00:00:00', 'stats', 5, 1, 1, NULL, '2017-11-14 17:09:44', NULL),
(3, '2017-04-01 00:00:00', 'stats', 4, 1, 0, NULL, '2017-11-14 17:35:24', NULL);

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

--
-- Dumping data for table `fianza`
--

INSERT INTO `fianza` (`idfianza`, `montopagado`, `montoadeudado`, `status`, `chofer_idchofer`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, 100, 299, 'deuda', 2, 0, NULL, '2017-11-13 21:32:16', NULL),
(2, 100, 100, 'debe', 5, 0, NULL, '2017-11-13 21:53:19', NULL);

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
  `chofer_idchofer` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `liquidacion`
--

INSERT INTO `liquidacion` (`idliquidacion`, `cantidadRecibida`, `cambio`, `folio`, `kilometraje`, `fecha`, `nota`, `cantPagada`, `cantDeuda`, `status`, `bonificado`, `chofer_idchofer`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, 100, 20, '098098', 30000, '2014-08-01', 'Nota de liquidacion', 80, 100, 'stats', 10, 2, 0, NULL, '2017-11-14 19:48:09', NULL);

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
(2, 6, 1, 1, NULL, '2017-11-13 22:37:26', NULL),
(3, 2, 1, 0, NULL, '2017-11-13 22:49:29', NULL);

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

--
-- Dumping data for table `modulo`
--

INSERT INTO `modulo` (`idmodulo`, `nombre`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, 'Modulo 1', 0, NULL, '2017-11-13 23:13:38', NULL),
(2, 'Modulo 1', 0, NULL, '2017-11-13 23:15:55', NULL),
(3, 'Modulo 2', 0, NULL, '2017-11-13 23:16:00', NULL);

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
  `vehiculoreparando_idvehiculoreparando` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orden`
--

INSERT INTO `orden` (`idorden`, `fecha`, `manoObra`, `subtotal`, `total`, `anticipo`, `status`, `vehiculoreparando_idvehiculoreparando`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, '2017-11-14 00:00:00', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, '2017-11-14 20:55:52', NULL),
(8, '2017-01-01 00:00:00', 100, 100, 100, 100, 'stats', 1, 0, NULL, '2017-11-15 21:59:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orden_has_refaccion`
--

CREATE TABLE `orden_has_refaccion` (
  `orden_idorden` int(11) NOT NULL,
  `refaccion_idrefaccion` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orden_has_refaccion`
--

INSERT INTO `orden_has_refaccion` (`orden_idorden`, `refaccion_idrefaccion`, `cantidad`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, 1, 1, NULL, NULL, '2017-11-14 20:56:07', NULL),
(1, 2, 2, NULL, NULL, '2017-11-14 20:56:15', NULL),
(8, 1, 2, 0, NULL, '2017-11-15 21:59:00', NULL),
(8, 2, 3, 0, NULL, '2017-11-15 21:59:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orden_has_servicio`
--

CREATE TABLE `orden_has_servicio` (
  `orden_idorden` int(11) NOT NULL,
  `servicio_idservicio` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orden_has_servicio`
--

INSERT INTO `orden_has_servicio` (`orden_idorden`, `servicio_idservicio`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(8, 1, 0, NULL, '2017-11-15 21:59:00', NULL),
(8, 2, 0, NULL, '2017-11-15 21:59:00', NULL);

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

--
-- Dumping data for table `permiso`
--

INSERT INTO `permiso` (`idpermiso`, `acceso`, `rol_idrol`, `modulo_idmodulo`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, 0, 1, 1, 0, NULL, '2017-11-15 20:28:51', NULL),
(2, 1, 1, 3, 0, NULL, '2017-11-15 20:34:39', NULL);

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
(1, '123', 'estatus permiso', '2017-11-10', '2017-11-30', 1, 2, 2, 0, NULL, '2017-11-11 00:04:18', NULL),
(2, '123', 'lkjl', '2017-01-01', '2017-12-01', 567, 8, 2, 1, NULL, '2017-11-11 00:23:19', NULL),
(3, '671', 'jhn', '2017-02-03', '2017-10-18', 678, 789, 2, 1, NULL, '2017-11-11 00:24:35', NULL);

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
(1, 'status de permiso', '2017-05-06', 2, 1, 1, 1, NULL, '2017-11-11 00:52:57', NULL),
(4, 'activo', '2017-01-01', 2, 1, 1, 0, NULL, '2017-11-13 20:52:53', NULL),
(5, 'activo', '2017-01-01', 2, 1, 1, 0, NULL, '2017-11-13 21:02:17', NULL);

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
(1, 'Juan', 35, 'H', 'JAGDH24234', 4123456, 'Pascual Galindo #31', 1, 0, NULL, '2017-11-10 00:08:10', NULL),
(2, 'Pedro', 30, 'H', 'PSJDJ123234', 412244, 'Primero de Mayo #211', 1, 0, NULL, '2017-11-10 00:09:35', NULL),
(3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, '2017-11-10 21:41:42', NULL),
(5, 'Andrés', 29, 'H', NULL, 41242342, 'Ogazon #32', 1, 1, NULL, '2017-11-10 21:44:05', NULL),
(6, 'Karina', 48, 'M', 'KA7234M', 4139887, 'Colón #23', 1, NULL, NULL, '2017-11-10 21:49:11', NULL),
(7, 'lkj', 0, 'lk', NULL, 0, 'l', 1, 1, NULL, '2017-11-10 22:21:19', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `refaccion`
--

CREATE TABLE `refaccion` (
  `idrefaccion` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `precioCompra` int(11) DEFAULT NULL,
  `precioVenta` int(11) DEFAULT NULL,
  `precioVentaIva` int(11) DEFAULT NULL,
  `taller_idtaller` int(11) NOT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `refaccion`
--

INSERT INTO `refaccion` (`idrefaccion`, `nombre`, `precioCompra`, `precioVenta`, `precioVentaIva`, `taller_idtaller`, `baja`, `created_by`, `created_at`, `modified_at`) VALUES
(1, 'nom', 100, 10, 10, 1, 0, NULL, '2017-11-14 20:48:38', NULL),
(2, 'nom2', 199, 100, 10, 1, 0, NULL, '2017-11-14 20:49:06', NULL),
(3, 'Llanta', 200, 299, 19, 1, 0, NULL, '2017-11-14 21:36:43', NULL);

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
(1, 'ROL 1', 0, NULL, '2017-11-09 22:22:20', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `servicio`
--

CREATE TABLE `servicio` (
  `idservicio` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `iva` int(11) DEFAULT NULL,
  `baja` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL,
  `taller_idtaller` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `servicio`
--

INSERT INTO `servicio` (`idservicio`, `nombre`, `precio`, `iva`, `baja`, `created_by`, `created_at`, `modified_at`, `taller_idtaller`) VALUES
(1, 'Cambio de llantas', 300, 30, 0, NULL, '2017-11-14 22:11:41', NULL, 1),
(2, 'Cambio de aceite', 200, 20, 0, NULL, '2017-11-15 21:55:19', NULL, 1);

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
(1, 'Refaccionaria colón', 'Colón #499', 4135669, 'Refaccionaria de autos', 1, 0, NULL, '2017-11-13 22:05:59', NULL),
(2, 'ñlk', 'ñl', 0, 'ñlk', 1, 1, NULL, '2017-11-13 22:08:32', NULL);

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
(1, 'Brandon', 'brandon@gmail.com', 0x243261243130244967487a796f4e6d6b417367306c6134436d4969792e5172504e614a3131344c7132627634556e376e6d35424977316e5364314961, 1, NULL, NULL, '2017-11-09 22:24:42', NULL),
(2, 'Cesar Alonso', 'cesaralonso@gmail.com', 0x24326124313024647376466e596d37433776722f5173576f684c6d537568492e66634c51785450534271782e745a55556b47722f4a305757654a6232, 1, 0, NULL, '2017-11-10 22:58:19', NULL);

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
(1, 'SEAT', 'IBIZA', 2010, '1', 'Serie del motor', 'JK3333', 65000, 'stats vehiculo', 'poliza vehiculo', 'poliza tipo', 'Condición del vehículo actualmente', 'Condición inicialmente', 'Azul', 1, 0, NULL, '2017-11-10 23:28:00', NULL),
(4, 'ñlk', 'ñlk', 0, 'ñl', 'kñl', 'ñlk', 0, 'kñ', 'lkñl', 'kñ', 'lkñlk', 'ñlk', 'ñlk', 2, 1, NULL, '2017-11-10 23:34:09', NULL),
(5, 'lk', 'lk', 0, 'lk', 'lk', 'lk', 0, 'lk', 'lk', 'lk', 'lk', 'lk', 'lk', 3, 1, NULL, '2017-11-10 23:35:15', NULL),
(6, 'lkj', 'lj', 0, 'lkj', 'lk', 'jlk', 0, 'jl', 'kjlk', 'jlkj', 'lkj', 'lkj', 'lkj', 6, 1, NULL, '2017-11-10 23:47:37', NULL);

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
(1, '2017-11-14 00:00:00', '2017-11-16 00:00:00', '2017-11-22 00:00:00', NULL, NULL, NULL, NULL, NULL, 1, 2, NULL, 1, NULL, '2017-11-14 20:55:34', NULL),
(2, '2017-01-31 00:00:00', '2018-02-09 00:00:00', '2018-02-03 00:00:00', 'inv', 'Motivo', 'stats', '1', 3, 1, 3, 5, 0, NULL, '2017-11-14 22:47:37', NULL),
(3, '2017-01-01 00:00:00', '2017-01-01 00:00:00', '2017-01-01 00:00:00', 'lkj', 'lkj', 'lkj', 'lkj', 1, 1, 3, 4, 1, NULL, '2017-11-14 22:47:54', NULL),
(4, '2017-01-01 06:00:00', '2017-02-02 06:00:00', '2017-03-03 06:00:00', 'Inventario', 'Motivo', 'stats', '1', 3, 1, 3, 5, 0, NULL, '2017-11-15 19:15:12', NULL);

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
  ADD PRIMARY KEY (`orden_idorden`,`refaccion_idrefaccion`),
  ADD KEY `fk_orden_has_refaccion_refaccion1` (`refaccion_idrefaccion`);

--
-- Indexes for table `orden_has_servicio`
--
ALTER TABLE `orden_has_servicio`
  ADD PRIMARY KEY (`orden_idorden`,`servicio_idservicio`),
  ADD KEY `fk_orden_has_servicio_servicio1` (`servicio_idservicio`);

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
-- Indexes for table `servicio`
--
ALTER TABLE `servicio`
  ADD PRIMARY KEY (`idservicio`),
  ADD KEY `fk_servicio_taller1_idx` (`taller_idtaller`);

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
  MODIFY `idbonificacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `chofer`
--
ALTER TABLE `chofer`
  MODIFY `idchofer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `concepto`
--
ALTER TABLE `concepto`
  MODIFY `idconcepto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `coordenada`
--
ALTER TABLE `coordenada`
  MODIFY `idcoordenada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `corralon`
--
ALTER TABLE `corralon`
  MODIFY `idcorralon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `egresoconcepto`
--
ALTER TABLE `egresoconcepto`
  MODIFY `idegresoconcepto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `enviotaller`
--
ALTER TABLE `enviotaller`
  MODIFY `idenviotaller` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `fianza`
--
ALTER TABLE `fianza`
  MODIFY `idfianza` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `folio`
--
ALTER TABLE `folio`
  MODIFY `idfolio` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `liquidacion`
--
ALTER TABLE `liquidacion`
  MODIFY `idliquidacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `mecanico`
--
ALTER TABLE `mecanico`
  MODIFY `idmecanico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `modulo`
--
ALTER TABLE `modulo`
  MODIFY `idmodulo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `orden`
--
ALTER TABLE `orden`
  MODIFY `idorden` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `permiso`
--
ALTER TABLE `permiso`
  MODIFY `idpermiso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `permisotaxi`
--
ALTER TABLE `permisotaxi`
  MODIFY `idpermisotaxi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `permisotaxiasignado`
--
ALTER TABLE `permisotaxiasignado`
  MODIFY `idpermisotaxiasignado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `persona`
--
ALTER TABLE `persona`
  MODIFY `idpersona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `refaccion`
--
ALTER TABLE `refaccion`
  MODIFY `idrefaccion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `rol`
--
ALTER TABLE `rol`
  MODIFY `idrol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `servicio`
--
ALTER TABLE `servicio`
  MODIFY `idservicio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `taller`
--
ALTER TABLE `taller`
  MODIFY `idtaller` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `vehiculo`
--
ALTER TABLE `vehiculo`
  MODIFY `idvehiculo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `vehiculoreparando`
--
ALTER TABLE `vehiculoreparando`
  MODIFY `idvehiculoreparando` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
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
  ADD CONSTRAINT `fk_bonificacion_has_liquidacion_liquidacion1` FOREIGN KEY (`liquidacion_idliquidacion`) REFERENCES `liquidacion` (`idliquidacion`);

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
  ADD CONSTRAINT `fk_fianza_has_folio_fianza1` FOREIGN KEY (`fianza_idfianza`) REFERENCES `fianza` (`idfianza`),
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
  ADD CONSTRAINT `fk_liquidacion_has_folio_liquidacion1` FOREIGN KEY (`folio_idfolio`) REFERENCES `liquidacion` (`idliquidacion`);

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
  ADD CONSTRAINT `fk_orden_has_refaccion_refaccion1` FOREIGN KEY (`refaccion_idrefaccion`) REFERENCES `refaccion` (`idrefaccion`),
  ADD CONSTRAINT `fk_orden_has_servicio_orden2` FOREIGN KEY (`orden_idorden`) REFERENCES `orden` (`idorden`);

--
-- Constraints for table `orden_has_servicio`
--
ALTER TABLE `orden_has_servicio`
  ADD CONSTRAINT `fk_orden_has_servicio_orden1` FOREIGN KEY (`orden_idorden`) REFERENCES `orden` (`idorden`),
  ADD CONSTRAINT `fk_orden_has_servicio_servicio1` FOREIGN KEY (`servicio_idservicio`) REFERENCES `servicio` (`idservicio`);

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
-- Constraints for table `servicio`
--
ALTER TABLE `servicio`
  ADD CONSTRAINT `fk_servicio_taller1` FOREIGN KEY (`taller_idtaller`) REFERENCES `taller` (`idtaller`) ON DELETE NO ACTION ON UPDATE NO ACTION;

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
