-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 29, 2023 at 09:44 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pathbuddy`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `userId` int(11) NOT NULL,
  `firstName` varchar(60) NOT NULL,
  `lastName` varchar(60) NOT NULL,
  `pronoun` varchar(10) NOT NULL,
  `dob` date NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  `bio` varchar(60) DEFAULT NULL,
  `uni` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `firstName`, `lastName`, `pronoun`, `dob`, `email`, `password`, `bio`, `uni`) VALUES
(1, 'John', 'Doe', 'he/him', '1990-05-15', 'john.doe@example.com', 'password123', 'Hello, I am John Doe.', 'UCL'),
(2, 'Jane', 'Smith', 'she/her', '1985-09-21', 'jane.smith@example.com', 'securepass', 'Nice to meet you!', 'Imperial Collage London'),
(3, 'James', 'Brown', 'they/them', '1998-12-03', 'james.brown@example.com', 'brownie123', 'Hello, this is James.', 'University of QRS'),
(4, 'Emily', 'Jones', 'she/her', '1992-07-10', 'emily.jones@example.com', 'p@ssw0rd', 'Nice to meet you!', 'University of Bristol'),
(5, 'Alex', 'Wilson', 'he/him', '1988-11-28', 'alex.wilson@example.com', 'mysecretpwd', 'Hello, I am Alex Wilson.', 'University of Glasgow');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`,`email`) USING BTREE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
