CREATE TABLE `USER` (
	`user_id`	int	NOT NULL,
	`user_pw`	VARCHAR(255)	NULL,
	`user_name`	VARCHAR(50)	NULL,
	`profile`	VARCHAR(255)	NULL
);

CREATE TABLE `RUNNING` (
	`running_id`	int	NOT NULL,
	`user_id`	int	NOT NULL,
	`running_distance`	VARCHAR(50)	NULL,
	`running_duration`	VARCHAR(50)	NULL,
	`running_cal`	VARCHAR(50)	NULL,
	`running_avg_pace`	VARCHAR(50)	NULL,
	`running_min_pace`	VARCHAR(50)	NULL,
	`running_path`	VARCHAR(50)	NULL
);

CREATE TABLE `CHATROOM` (
	`room_id`	int	NOT NULL,
	`room_name`	VARCHAR(200)	NULL,
	`type`	int	NULL
);

CREATE TABLE `MESSAGE` (
	`m_id`	int	NOT NULL,
	`room_id`	int	NOT NULL,
	`user_id`	int	NOT NULL,
	`message`	VARCHAR(255)	NULL,
	`message_regtime`	VARCHAR(255)	NULL
);

CREATE TABLE `PARTICIPANTS` (
	`p_id`	int	NOT NULL,
	`user_id`	int	NOT NULL,
	`room_id`	int	NOT NULL
);

CREATE TABLE `FRIENDS` (
	`f_id`	int	NOT NULL,
	`user_id`	int	NOT NULL,
	`freind_id`	int	NULL
);

CREATE TABLE `BOARD` (
	`board_id`	int	NOT NULL,
	`writer_id`	int	NOT NULL,
	`board_title`	VARCHAR(255)	NULL,
	`board_content`	VARCHAR(255)	NULL,
	`board_regdate`	VARCHAR(255)	NULL,
	`board_editdate`	VARCHAR(255)	NULL,
	`board_likes`	VARCHAR(255)	NULL
);

CREATE TABLE `COMMENT` (
	`commnet_id`	int	NOT NULL,
	`comment_writer`	int	NOT NULL,
	`board_id`	int	NOT NULL,
	`writer_id`	int	NOT NULL,
	`comment_title`	VARCHAR(255)	NULL,
	`comment_content`	VARCHAR(255)	NULL,
	`comment_regdate`	VARCHAR(255)	NULL,
	`comment_editdate`	VARCHAR(255)	NULL,
	`comment_order`	VARCHAR(255)	NULL,
	`comment_depth`	VARCHAR(255)	NULL,
	`commnet_parent`	int	NOT NULL
);

CREATE TABLE `BOARD_LIKES` (
	`like_id`	int	NOT NULL,
	`board_id`	int	NOT NULL,
	`user_id`	int	NOT NULL
);

CREATE TABLE `USER_ROLE` (
	`user_id`	int	NOT NULL,
	`user_role`	VARCHAR(50)	NULL
);

CREATE TABLE `AREA_Si` (
	`area_id`	int	NOT NULL,
	`si_name`	VARCHAR(10)	NULL
);

CREATE TABLE `AREA_Gu` (
	`gu_id`	int	NOT NULL,
	`area_id`	int	NOT NULL,
	`gu_name`	VARCHAR(10)	NULL
);

CREATE TABLE `AREA_Dong` (
	`dong_id`	int	NOT NULL,
	`gu_id`	int	NOT NULL,
	`area_id`	int	NOT NULL,
	`dong_name`	VARCHAR(10)	NULL
);

CREATE TABLE `AREA_RUNNING` (
	`id`	int	NOT NULL,
	`running_id`	int	NOT NULL,
	`dong_id`	int	NOT NULL
);

CREATE TABLE `USER_FAV_AREA` (
	`fav_id`	int	NOT NULL,
	`user_id`	int	NOT NULL,
	`dong_id`	int	NOT NULL,
	`gu_id`	int	NOT NULL,
	`area_id`	int	NOT NULL
);

ALTER TABLE `USER` ADD CONSTRAINT `PK_USER` PRIMARY KEY (
	`user_id`
);

ALTER TABLE `RUNNING` ADD CONSTRAINT `PK_RUNNING` PRIMARY KEY (
	`running_id`,
	`user_id`
);

ALTER TABLE `CHATROOM` ADD CONSTRAINT `PK_CHATROOM` PRIMARY KEY (
	`room_id`
);

ALTER TABLE `MESSAGE` ADD CONSTRAINT `PK_MESSAGE` PRIMARY KEY (
	`m_id`,
	`room_id`,
	`user_id`
);

ALTER TABLE `PARTICIPANTS` ADD CONSTRAINT `PK_PARTICIPANTS` PRIMARY KEY (
	`p_id`,
	`user_id`,
	`room_id`
);

ALTER TABLE `FRIENDS` ADD CONSTRAINT `PK_FRIENDS` PRIMARY KEY (
	`f_id`,
	`user_id`
);

ALTER TABLE `BOARD` ADD CONSTRAINT `PK_BOARD` PRIMARY KEY (
	`board_id`,
	`writer_id`
);

ALTER TABLE `COMMENT` ADD CONSTRAINT `PK_COMMENT` PRIMARY KEY (
	`commnet_id`,
	`comment_writer`,
	`board_id`,
	`writer_id`
);

ALTER TABLE `BOARD_LIKES` ADD CONSTRAINT `PK_BOARD_LIKES` PRIMARY KEY (
	`like_id`,
	`board_id`,
	`user_id`
);

ALTER TABLE `USER_ROLE` ADD CONSTRAINT `PK_USER_ROLE` PRIMARY KEY (
	`user_id`
);

ALTER TABLE `AREA_Si` ADD CONSTRAINT `PK_AREA_SI` PRIMARY KEY (
	`area_id`
);

ALTER TABLE `AREA_Gu` ADD CONSTRAINT `PK_AREA_GU` PRIMARY KEY (
	`gu_id`,
	`area_id`
);

ALTER TABLE `AREA_Dong` ADD CONSTRAINT `PK_AREA_DONG` PRIMARY KEY (
	`dong_id`,
	`gu_id`,
	`area_id`
);

ALTER TABLE `AREA_RUNNING` ADD CONSTRAINT `PK_AREA_RUNNING` PRIMARY KEY (
	`id`,
	`running_id`,
	`dong_id`
);

ALTER TABLE `USER_FAV_AREA` ADD CONSTRAINT `PK_USER_FAV_AREA` PRIMARY KEY (
	`fav_id`,
	`user_id`,
	`dong_id`,
	`gu_id`,
	`area_id`
);

ALTER TABLE `RUNNING` ADD CONSTRAINT `FK_USER_TO_RUNNING_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `USER` (
	`user_id`
);

ALTER TABLE `MESSAGE` ADD CONSTRAINT `FK_CHATROOM_TO_MESSAGE_1` FOREIGN KEY (
	`room_id`
)
REFERENCES `CHATROOM` (
	`room_id`
);

ALTER TABLE `MESSAGE` ADD CONSTRAINT `FK_USER_TO_MESSAGE_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `USER` (
	`user_id`
);

ALTER TABLE `PARTICIPANTS` ADD CONSTRAINT `FK_USER_TO_PARTICIPANTS_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `USER` (
	`user_id`
);

ALTER TABLE `PARTICIPANTS` ADD CONSTRAINT `FK_CHATROOM_TO_PARTICIPANTS_1` FOREIGN KEY (
	`room_id`
)
REFERENCES `CHATROOM` (
	`room_id`
);

ALTER TABLE `FRIENDS` ADD CONSTRAINT `FK_USER_TO_FRIENDS_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `USER` (
	`user_id`
);

ALTER TABLE `BOARD` ADD CONSTRAINT `FK_USER_TO_BOARD_1` FOREIGN KEY (
	`writer_id`
)
REFERENCES `USER` (
	`user_id`
);

ALTER TABLE `COMMENT` ADD CONSTRAINT `FK_USER_TO_COMMENT_1` FOREIGN KEY (
	`comment_writer`
)
REFERENCES `USER` (
	`user_id`
);

ALTER TABLE `COMMENT` ADD CONSTRAINT `FK_BOARD_TO_COMMENT_1` FOREIGN KEY (
	`board_id`
)
REFERENCES `BOARD` (
	`board_id`
);

ALTER TABLE `COMMENT` ADD CONSTRAINT `FK_BOARD_TO_COMMENT_2` FOREIGN KEY (
	`writer_id`
)
REFERENCES `BOARD` (
	`writer_id`
);

ALTER TABLE `BOARD_LIKES` ADD CONSTRAINT `FK_BOARD_TO_BOARD_LIKES_1` FOREIGN KEY (
	`board_id`
)
REFERENCES `BOARD` (
	`board_id`
);

ALTER TABLE `BOARD_LIKES` ADD CONSTRAINT `FK_USER_TO_BOARD_LIKES_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `USER` (
	`user_id`
);

ALTER TABLE `USER_ROLE` ADD CONSTRAINT `FK_USER_TO_USER_ROLE_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `USER` (
	`user_id`
);

ALTER TABLE `AREA_Gu` ADD CONSTRAINT `FK_AREA_Si_TO_AREA_Gu_1` FOREIGN KEY (
	`area_id`
)
REFERENCES `AREA_Si` (
	`area_id`
);

ALTER TABLE `AREA_Dong` ADD CONSTRAINT `FK_AREA_Gu_TO_AREA_Dong_1` FOREIGN KEY (
	`gu_id`
)
REFERENCES `AREA_Gu` (
	`gu_id`
);

ALTER TABLE `AREA_Dong` ADD CONSTRAINT `FK_AREA_Gu_TO_AREA_Dong_2` FOREIGN KEY (
	`area_id`
)
REFERENCES `AREA_Gu` (
	`area_id`
);

ALTER TABLE `AREA_RUNNING` ADD CONSTRAINT `FK_RUNNING_TO_AREA_RUNNING_1` FOREIGN KEY (
	`running_id`
)
REFERENCES `RUNNING` (
	`running_id`
);

ALTER TABLE `AREA_RUNNING` ADD CONSTRAINT `FK_AREA_Dong_TO_AREA_RUNNING_1` FOREIGN KEY (
	`dong_id`
)
REFERENCES `AREA_Dong` (
	`dong_id`
);

ALTER TABLE `USER_FAV_AREA` ADD CONSTRAINT `FK_USER_TO_USER_FAV_AREA_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `USER` (
	`user_id`
);

ALTER TABLE `USER_FAV_AREA` ADD CONSTRAINT `FK_AREA_Dong_TO_USER_FAV_AREA_1` FOREIGN KEY (
	`dong_id`
)
REFERENCES `AREA_Dong` (
	`dong_id`
);

ALTER TABLE `USER_FAV_AREA` ADD CONSTRAINT `FK_AREA_Dong_TO_USER_FAV_AREA_2` FOREIGN KEY (
	`gu_id`
)
REFERENCES `AREA_Dong` (
	`gu_id`
);

ALTER TABLE `USER_FAV_AREA` ADD CONSTRAINT `FK_AREA_Dong_TO_USER_FAV_AREA_3` FOREIGN KEY (
	`area_id`
)
REFERENCES `AREA_Dong` (
	`area_id`
);

