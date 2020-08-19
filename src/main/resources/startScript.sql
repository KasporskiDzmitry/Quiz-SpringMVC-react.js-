DROP DATABASE IF EXISTS quiz;

CREATE DATABASE IF NOT EXISTS quiz;

USE quiz;

create table players
(
	id_player int auto_increment
		primary key,
	name varchar(45) not null,
	score int not null,
	datetime varchar(20) not null,
	constraint id_player_UNIQUE
		unique (id_player)
)
;

create table questions
(
	id_question int auto_increment
		primary key,
	id_topic int not null,
	question varchar(2000) not null,
	answer varchar(45) not null,
	value int not null,
	constraint id_question_UNIQUE
		unique (id_question)
)
;

create index fk_id_topic_idx
	on questions (id_topic)
;

create table topics
(
	id_topic int auto_increment
		primary key,
	topic varchar(45) not null,
	constraint id_topic_UNIQUE
		unique (id_topic)
)
;

alter table questions
	add constraint id_topic
		foreign key (id_topic) references quiz.topics (id_topic)
			on update cascade on delete cascade
;


