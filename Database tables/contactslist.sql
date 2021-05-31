-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2021 at 02:42 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `discussion_manager`
--

-- --------------------------------------------------------

--
-- Table structure for table `contactslist`
--

CREATE TABLE `contactslist` (
  `userUid` varchar(30) NOT NULL,
  `contactUserUid` varchar(30) NOT NULL,
  `contactUserName` varchar(30) NOT NULL,
  `contactUserProfile` text NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contactslist`
--

INSERT INTO `contactslist` (`userUid`, `contactUserUid`, `contactUserName`, `contactUserProfile`, `status`) VALUES
('uLl4pRezO1VIGfmWRXSV2wWwoH13', '5U9wbAfe66RrFRibw07u9qBkDQJ2', 'tuba', 'https://firebasestorage.googleapis.com/v0/b/discussion-manager.appspot.com/o/1620937610218-WhatsApp%20Image%202021-04-07%20at%203.00.32%20AM.jpeg?alt=media&token=49ee247d-98bd-4719-8220-3ddd561b3ada', 'Approved');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contactslist`
--
ALTER TABLE `contactslist`
  ADD PRIMARY KEY (`contactUserUid`(20),`userUid`(20)) USING BTREE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
