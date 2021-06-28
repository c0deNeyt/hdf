-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2021 at 11:25 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `telford_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `hdf_tbl`
--

CREATE TABLE `hdf_tbl` (
  `Id` int(11) NOT NULL,
  `btemp` varchar(6) DEFAULT NULL,
  `empid` int(11) DEFAULT NULL,
  `fname` varchar(100) DEFAULT NULL,
  `department` varchar(100) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  `symptoms` varchar(5) DEFAULT NULL,
  `travelled` varchar(100) DEFAULT NULL,
  `travloc` varchar(100) DEFAULT NULL,
  `willing` varchar(100) DEFAULT NULL,
  `whyNo` varchar(100) DEFAULT NULL,
  `vacRegistered` varchar(50) DEFAULT NULL,
  `registrationLoc` varchar(255) DEFAULT NULL,
  `vaccinated` varchar(50) DEFAULT NULL,
  `vaccinationDate` varchar(100) DEFAULT NULL,
  `dosetype` varchar(50) DEFAULT NULL,
  `bakunatype` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hdf_tbl`
--

INSERT INTO `hdf_tbl` (`Id`, `btemp`, `empid`, `fname`, `department`, `time`, `date`, `symptoms`, `travelled`, `travloc`, `willing`, `whyNo`, `vacRegistered`, `registrationLoc`, `vaccinated`, `vaccinationDate`, `dosetype`, `bakunatype`) VALUES
(1, '36', 1111, 'ARAÑA, CHRISTIAN R.', 'MIS', '5:32:30: AM', 'Saturday, June 5, 2021', 'No', 'Yes', 'SAMPLE LOCATION', 'No', 'I DON\'T KNOW WHY', 'Yes', 'DASMA ', 'Yes', '06/03/2021', '1stDose', 'pfizer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hdf_tbl`
--
ALTER TABLE `hdf_tbl`
  ADD UNIQUE KEY `Id` (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hdf_tbl`
--
ALTER TABLE `hdf_tbl`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19626;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
