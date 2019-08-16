SET NAMES UTF-8;
DROP DATABASE IF EXISTS ln;
CREATE DATABASE ln;
USE ln;

/*****用户信息*****/
CREATE TABLE ln_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),		#昵称	
	phone VARCHAR(16),		#手机号登录
	gender INT						#性别 0-女 1-男
);
