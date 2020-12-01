CREATE TABLE `board` (
  `board_id` int(11) NOT NULL AUTO_INCREMENT,
  `board_content` varchar(255) NOT NULL,
  `board_editdate` datetime NOT NULL,
  `board_regdate` datetime NOT NULL,
  `board_title` varchar(255) NOT NULL,
  `read_count` int(11) NOT NULL,
  `writer_id` int(11) NOT NULL,
  `board_image` varchar(500) DEFAULT NULL,
  `reply_count` int(11) DEFAULT NULL,
  `writer_name` varchar(255) NOT NULL,
  `writer_profile` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`board_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

CREATE TABLE `challenge` (
  `challenge_id` int(11) NOT NULL AUTO_INCREMENT,
  `challenge_image` varchar(500) DEFAULT NULL,
  `content` longtext,
  `distance_current` double DEFAULT NULL,
  `distance_goal` double DEFAULT NULL,
  `donate_current` bigint(20) DEFAULT NULL,
  `donate_goal` bigint(20) DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `participant` int(11) DEFAULT '0',
  `personal_distance_goal` double DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `title` varchar(500) NOT NULL,
  PRIMARY KEY (`challenge_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

CREATE TABLE `challenge_user` (
  `challenge_user_id` int(11) NOT NULL AUTO_INCREMENT,
  `accumulated_distance` double DEFAULT NULL,
  `donation` int(11) DEFAULT NULL,
  `success` bit(1) DEFAULT NULL,
  `challenge_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`challenge_user_id`),
  KEY `FKmq23oqyd3s02abqo1pspisxg8` (`challenge_id`),
  KEY `FK6jxbecg44d3jiy8blxrgbo6wg` (`user_id`),
  CONSTRAINT `FK6jxbecg44d3jiy8blxrgbo6wg` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKmq23oqyd3s02abqo1pspisxg8` FOREIGN KEY (`challenge_id`) REFERENCES `challenge` (`challenge_id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;

CREATE TABLE `friend` (
  `f_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `user_user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`f_id`),
  KEY `FKlbsgou1shyj6q8nmbrogm9f85` (`user_user_id`),
  CONSTRAINT `FKlbsgou1shyj6q8nmbrogm9f85` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8;

CREATE TABLE `gugun` (
  `gugun_id` int(11) NOT NULL,
  `gugun_name` varchar(255) DEFAULT NULL,
  `sido_id` int(11) NOT NULL,
  PRIMARY KEY (`gugun_id`),
  KEY `FKr1fdujmqfj2lnb20von5rxcam` (`sido_id`),
  CONSTRAINT `FKr1fdujmqfj2lnb20von5rxcam` FOREIGN KEY (`sido_id`) REFERENCES `sido` (`sido_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `matching` (
  `match_id` int(11) NOT NULL AUTO_INCREMENT,
  `guest_id` int(11) NOT NULL,
  `master_id` int(11) NOT NULL,
  `room_id` varchar(255) NOT NULL,
  PRIMARY KEY (`match_id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8;

CREATE TABLE `message` (
  `m_id` int(11) NOT NULL AUTO_INCREMENT,
  `message` varchar(255) NOT NULL,
  `message_regtime` datetime NOT NULL,
  `room_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`m_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `payment` (
  `pay_id` int(11) NOT NULL AUTO_INCREMENT,
  `charge` int(11) DEFAULT NULL,
  `pay` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`pay_id`),
  KEY `FK4spfnm9si9dowsatcqs5or42i` (`user_id`),
  CONSTRAINT `FK4spfnm9si9dowsatcqs5or42i` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

CREATE TABLE `ranks` (
  `rank_id` int(11) NOT NULL AUTO_INCREMENT,
  `donate_exp` double NOT NULL,
  `race_exp` double NOT NULL,
  `tier` int(11) DEFAULT '0',
  `total_exp` double NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`rank_id`),
  KEY `FK9baj7lwqe9acxbeplowb01mn9` (`user_id`),
  CONSTRAINT `FK9baj7lwqe9acxbeplowb01mn9` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;

CREATE TABLE `record` (
  `record_id` int(11) NOT NULL AUTO_INCREMENT,
  `accumulated_distance` double NOT NULL,
  `accumulated_time` double NOT NULL,
  `speed` double DEFAULT NULL,
  `running_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`record_id`),
  KEY `FKpgn6jntg6cjbtk228sc44lrqq` (`running_id`),
  KEY `FKeny3549xar8rnrcmdw3hl0la1` (`user_id`),
  CONSTRAINT `FKeny3549xar8rnrcmdw3hl0la1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKpgn6jntg6cjbtk228sc44lrqq` FOREIGN KEY (`running_id`) REFERENCES `running` (`running_id`)
) ENGINE=InnoDB AUTO_INCREMENT=525 DEFAULT CHARSET=utf8;

CREATE TABLE `reply` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `board_id` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `editdate` datetime NOT NULL,
  `parent_id` int(11) NOT NULL,
  `regdate` datetime NOT NULL,
  `reply_depth` int(11) NOT NULL,
  `reply_order` int(11) NOT NULL,
  `user_user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`reply_id`),
  KEY `FKdegfm6syq4wn4syd0koe1oghe` (`user_user_id`),
  CONSTRAINT `FKdegfm6syq4wn4syd0koe1oghe` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

CREATE TABLE `running` (
  `running_id` int(11) NOT NULL AUTO_INCREMENT,
  `accumulated_distance` double NOT NULL,
  `accumulated_time` bigint(20) NOT NULL,
  `end_time` datetime DEFAULT NULL,
  `polyline` longtext,
  `start_time` datetime DEFAULT NULL,
  `thumbnail` longtext,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`running_id`),
  KEY `FKf62myi3cec1wmjrcr1xuffnm8` (`user_id`),
  CONSTRAINT `FKf62myi3cec1wmjrcr1xuffnm8` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=366 DEFAULT CHARSET=utf8;

CREATE TABLE `running_area` (
  `running_area_id` int(11) NOT NULL AUTO_INCREMENT,
  `gugun_id` int(11) DEFAULT NULL,
  `running_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`running_area_id`),
  KEY `FKndou84oh53xlpshbh5ck2xb7t` (`gugun_id`),
  KEY `FK3d1gdlso67048d2dqcp2iecpw` (`running_id`),
  CONSTRAINT `FK3d1gdlso67048d2dqcp2iecpw` FOREIGN KEY (`running_id`) REFERENCES `running` (`running_id`),
  CONSTRAINT `FKndou84oh53xlpshbh5ck2xb7t` FOREIGN KEY (`gugun_id`) REFERENCES `gugun` (`gugun_id`)
) ENGINE=InnoDB AUTO_INCREMENT=526 DEFAULT CHARSET=utf8;

CREATE TABLE `running_user` (
  `running_user_id` int(11) NOT NULL AUTO_INCREMENT,
  `total_count` int(11) DEFAULT NULL,
  `total_distance` double NOT NULL,
  `total_time` bigint(20) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`running_user_id`),
  KEY `FKq3s0rd0g64ftk275ki87fs8fb` (`user_id`),
  CONSTRAINT `FKq3s0rd0g64ftk275ki87fs8fb` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;

CREATE TABLE `sido` (
  `sido_id` int(11) NOT NULL,
  `sido_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sido_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `change_pw` varchar(255) DEFAULT NULL,
  `auth` tinyint(1) DEFAULT '0',
  `gender` int(11) DEFAULT NULL,
  `mileage` int(11) DEFAULT '0',
  `profile` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_pw` varchar(255) NOT NULL,
  `gugun_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  KEY `FKtrhntqap8ebbsdi1h3vxfkyji` (`gugun_id`),
  CONSTRAINT `FKtrhntqap8ebbsdi1h3vxfkyji` FOREIGN KEY (`gugun_id`) REFERENCES `gugun` (`gugun_id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;

CREATE TABLE `user_roles` (
  `user_user_id` int(11) NOT NULL,
  `roles` varchar(255) DEFAULT NULL,
  KEY `FKkv46dn3qakjvsk7ra33nd5sns` (`user_user_id`),
  CONSTRAINT `FKkv46dn3qakjvsk7ra33nd5sns` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
