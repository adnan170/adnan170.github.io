-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2016 at 08:28 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `se`
--

-- --------------------------------------------------------

--
-- Table structure for table `addslots`
--

CREATE TABLE `addslots` (
  `id` int(10) NOT NULL,
  `time` varchar(15) NOT NULL,
  `Date` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `addslots`
--

INSERT INTO `addslots` (`id`, `time`, `Date`) VALUES
(1, '9:00-9:30', '2016-11-17'),
(3, '9:30-10:00', '2016-11-17'),
(4, '10:00-10:30', '2016-11-17'),
(5, '10:30-11:00', '2016-11-17'),
(6, '11:00-11:30', '2016-11-17'),
(7, '11:30-12:00', '2016-11-17'),
(8, '12:00-12:30', '2016-11-17'),
(9, '12:30-1:00', '2016-11-17'),
(10, '1:00-1:30', '2016-11-17'),
(11, '1:30-2:00', '2016-11-17'),
(12, '2:00-2:30', '2016-11-17'),
(13, '2:30-3:00', '2016-11-17'),
(14, '3:00-3:30', '2016-11-17'),
(15, '3:30-4:00', '2016-11-17'),
(16, '9:00-9:30', '2016-11-22'),
(17, '9:30-10:00', '2016-11-22'),
(19, '10:00-10:30', '2016-11-22'),
(20, '10:30-11:00', '2016-11-22'),
(21, '11:00-11:30', '2016-11-22'),
(22, '11:30-12:00', '2016-11-22'),
(23, '12:00-12:30', '2016-11-22'),
(24, '12:30-1:00', '2016-11-22'),
(25, '1:00-1:30', '2016-11-22'),
(26, '1:30-2:00', '2016-11-22'),
(27, '2:00-2:30', '2016-11-22'),
(28, '2:30-3:00', '2016-11-22'),
(29, '3:00-3:30', '2016-11-22'),
(30, '3:30-4:00', '2016-11-22'),
(31, '9:00-9:30', '2016-11-29'),
(32, '9:30-10:00', '2016-11-29'),
(33, '10:00-10:30', '2016-11-29'),
(34, '10:30-11:00', '2016-11-29'),
(35, '11:00-11:30', '2016-11-29'),
(36, '11:30-12:00', '2016-11-29'),
(37, '12:00-12:30', '2016-11-29'),
(38, '12:30-1:00', '2016-11-29'),
(39, '1:00-1:30', '2016-11-29'),
(40, '1:30-2:00', '2016-11-29'),
(41, '2:00-2:30', '2016-11-29'),
(42, '2:30-3:00', '2016-11-29'),
(43, '3:00-3:30', '2016-11-29'),
(44, '3:30-4:00', '2016-11-29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addslots`
--
ALTER TABLE `addslots`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addslots`
--
ALTER TABLE `addslots`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
