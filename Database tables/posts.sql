-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2021 at 04:55 PM
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
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `postId` int(100) NOT NULL,
  `userUid` varchar(30) NOT NULL,
  `postTitle` varchar(100) NOT NULL,
  `postDesc` varchar(1000) NOT NULL,
  `postImage` varchar(200) NOT NULL,
  `postSentTime` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`postId`, `userUid`, `postTitle`, `postDesc`, `postImage`, `postSentTime`) VALUES
(2, '5U9wbAfe66RrFRibw07u9qBkDQJ2', 'Post 1', 'New post desc', 'https://firebasestorage.googleapis.com/v0/b/discussion-manager.appspot.com/o/annie-spratt-QckxruozjRg-unsplash.jpg?alt=media&token=922ba71c-45dd-4f46-85ba-6030eb80cea9', '7:50'),
(3, '5U9wbAfe66RrFRibw07u9qBkDQJ2', 'Post 1', 'New post desc', 'https://firebasestorage.googleapis.com/v0/b/discussion-manager.appspot.com/o/annie-spratt-QckxruozjRg-unsplash.jpg?alt=media&token=922ba71c-45dd-4f46-85ba-6030eb80cea9', '7:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`postId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `postId` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
