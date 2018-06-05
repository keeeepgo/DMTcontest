/*
Navicat MySQL Data Transfer

Source Server         : 本地连接
Source Server Version : 50151
Source Host           : localhost:3306
Source Database       : irecommender

Target Server Type    : MYSQL
Target Server Version : 50151
File Encoding         : 65001

Date: 2018-06-05 10:47:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for label
-- ----------------------------
DROP TABLE IF EXISTS `label`;
CREATE TABLE `label` (
  `labelId` int(20) NOT NULL,
  `labelContent` varchar(20) NOT NULL,
  PRIMARY KEY (`labelId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of label
-- ----------------------------

-- ----------------------------
-- Table structure for liveness
-- ----------------------------
DROP TABLE IF EXISTS `liveness`;
CREATE TABLE `liveness` (
  `userId` int(20) NOT NULL,
  `date` datetime NOT NULL,
  `newsNumber` int(3) DEFAULT NULL,
  PRIMARY KEY (`userId`,`date`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of liveness
-- ----------------------------

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `newsId` int(20) NOT NULL,
  `newsUrl` varchar(20) DEFAULT NULL,
  `newsTitle` text,
  `newsContent` text,
  PRIMARY KEY (`newsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news
-- ----------------------------

-- ----------------------------
-- Table structure for news_label
-- ----------------------------
DROP TABLE IF EXISTS `news_label`;
CREATE TABLE `news_label` (
  `newsId` int(20) NOT NULL,
  `labelId` int(20) NOT NULL,
  PRIMARY KEY (`newsId`,`labelId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news_label
-- ----------------------------

-- ----------------------------
-- Table structure for note
-- ----------------------------
DROP TABLE IF EXISTS `note`;
CREATE TABLE `note` (
  `noteId` int(20) NOT NULL,
  `userId` int(20) NOT NULL,
  `noteDate` datetime DEFAULT NULL,
  `noteContent` text,
  PRIMARY KEY (`noteId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of note
-- ----------------------------

-- ----------------------------
-- Table structure for read
-- ----------------------------
DROP TABLE IF EXISTS `read`;
CREATE TABLE `read` (
  `userId` int(20) NOT NULL,
  `newsId` int(20) NOT NULL,
  `grade` int(2) DEFAULT NULL,
  `readStatus` int(2) NOT NULL,
  PRIMARY KEY (`userId`,`newsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of read
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` int(20) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `userPass` varchar(20) NOT NULL,
  `registerDate` datetime DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------

-- ----------------------------
-- Table structure for user_label
-- ----------------------------
DROP TABLE IF EXISTS `user_label`;
CREATE TABLE `user_label` (
  `userId` int(20) NOT NULL,
  `labelId` int(20) NOT NULL,
  `weight` double(20,10) DEFAULT NULL,
  PRIMARY KEY (`userId`,`labelId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_label
-- ----------------------------
