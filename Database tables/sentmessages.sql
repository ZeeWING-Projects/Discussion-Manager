-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2021 at 09:09 AM
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
-- Table structure for table `sentmessages`
--

CREATE TABLE `sentmessages` (
  `userUid` varchar(30) NOT NULL,
  `recieverUid` varchar(30) NOT NULL,
  `messageType` varchar(10) NOT NULL,
  `messageContent` varchar(30) NOT NULL,
  `messageStatus` varchar(20) NOT NULL,
  `messageSendTime` varchar(10) NOT NULL,
  `serialNumber` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sentmessages`
--

INSERT INTO `sentmessages` (`userUid`, `recieverUid`, `messageType`, `messageContent`, `messageStatus`, `messageSendTime`, `serialNumber`) VALUES
('0TFdiLUfj8Vq0Qtoz14jAhNuGu03', '4KksC4PFIBe8JKDSDgwu0Q1R3Jv2', 'Text', 'heloo', 'New', '23:51:19.6', 1),
('4KksC4PFIBe8JKDSDgwu0Q1R3Jv2', '0TFdiLUfj8Vq0Qtoz14jAhNuGu03', 'Text', 'hi', 'New', ' 23:49:51.', 2),
('0TFdiLUfj8Vq0Qtoz14jAhNuGu03', '4KksC4PFIBe8JKDSDgwu0Q1R3Jv2', 'Text', 'who ree you', 'Seen', '23:51:19.6', 3),
('0TFdiLUfj8Vq0Qtoz14jAhNuGu03', '4KksC4PFIBe8JKDSDgwu0Q1R3Jv2', 'Text', 'who ree you', 'Seen', '23:51:19.6', 4),
('0TFdiLUfj8Vq0Qtoz14jAhNuGu03', '4KksC4PFIBe8JKDSDgwu0Q1R3Jv2', 'Text', 'who ree you', 'Seen', '23:51:19.6', 5),
('4KksC4PFIBe8JKDSDgwu0Q1R3Jv2', '0TFdiLUfj8Vq0Qtoz14jAhNuGu03', 'Text', 'i am zee', 'Seen', ' 23:49:51.', 6),
('4KksC4PFIBe8JKDSDgwu0Q1R3Jv2', 'LFu2IhjTGZb2YjflHY9kVrVzXFh2', 'Text', 'fdsfjkldslkf', 'New', ' 23:49:51.', 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sentmessages`
--
ALTER TABLE `sentmessages`
  ADD PRIMARY KEY (`serialNumber`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sentmessages`
--
ALTER TABLE `sentmessages`
  MODIFY `serialNumber` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
