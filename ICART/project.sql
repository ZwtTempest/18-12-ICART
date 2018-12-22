SET NAMES UTF8;
DROP DATABASE IF EXISTS project;
CREATE DATABASE project CHARSET=UTF8;
USE project;

CREATE TABLE project_index_carousel(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(128),
	title VARCHAR(64),
	href VARCHAR(128)
);

CREATE TABLE project_index_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(64),
	details VARCHAR(128),
	pic VARCHAR(128),
	price DECIMAL(10,2),
	href VARCHAR(128),
	seq_recommended TINYINT,
	seq_new_arrival TINYINT,
	seq_top_sale TINYINT
);

CREATE TABLE project_laptop_family(
	fid INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(32)
);
INSERT INTO project_laptop_family VALUES(1001,"台式电脑");
INSERT INTO project_laptop_family VALUES(1002,"笔记本电脑 & 便携式电脑");
INSERT INTO project_laptop_family VALUES(1003,"电脑组件");
INSERT INTO project_laptop_family VALUES(1004,"软件设备");
INSERT INTO project_laptop_family VALUES(1005,"手机 & 掌上电脑");
INSERT INTO project_laptop_family VALUES(1006,"照相机");

CREATE TABLE project_laptop_family_classify(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	family_id INT,
	classify_name VARCHAR(32),
	FOREIGN KEY(family_id) REFERENCES project_laptop_family(fid)
);
INSERT INTO project_laptop_family_classify VALUES(1,1001,"PC");
INSERT INTO project_laptop_family_classify VALUES(2,1001,"MAC");

CREATE TABLE project_laptop_family_brand(
	bid INT PRIMARY KEY AUTO_INCREMENT,
	classify_id INT,
	brand_name VARCHAR(32),
	FOREIGN KEY(classify_id) REFERENCES project_laptop_family_classify(cid)
);
INSERT INTO project_laptop_family_brand VALUES(1,1,"华硕");
INSERT INTO project_laptop_family_brand VALUES(2,1,"苹果");
INSERT INTO project_laptop_family_brand VALUES(3,2,"三星");


CREATE TABLE project_laptop(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	family_id INT,
	family_classify_id INT,
	family_brand_id INT,
	title VARCHAR(128),
	subtitle VARCHAR(128),
	price DECIMAL(10,2),
	promise VARCHAR(64),
	spec VARCHAR(64),
	name VARCHAR(64),
	os VARCHAR(32),
	memory VARCHAR(32),
	resolution VARCHAR(32),
	video_card VARCHAR(32),
	cpu VARCHAR(32),
	video_memory VARCHAR(32),
	category VARCHAR(32),
	disk VARCHAR(32),
	details VARCHAR(1024),
	shelf_time BIGINT,
	sold_count INT,
	is_onsale BOOL,
	FOREIGN KEY(family_id) REFERENCES project_laptop_family(fid),
	FOREIGN KEY(family_classify_id) REFERENCES project_laptop_family_classify(cid)
);
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100001,1001,1,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100002,1001,1,2,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100003,1001,1,3,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100004,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100005,1001,2,2,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100006,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100007,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100008,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100009,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100010,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100011,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100012,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100013,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100014,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100015,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100016,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100017,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100018,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100019,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100020,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100021,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100022,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100023,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100024,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100025,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100026,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100027,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100028,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100029,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100030,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100031,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100032,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100033,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100034,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100035,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100036,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");
INSERT INTO project_laptop(lid,family_id,family_classify_id,family_brand_id,price,name) VALUES(100037,1001,2,1,10788.00,"APPLE苹果 iMAC 21.5英寸一体机 台式电脑 低配 MMQA2CH/A为基础升级定制版");


CREATE TABLE project_laptop_pic(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	laptop_id INT,
	sm VARCHAR(128),
	md VARCHAR(128),
	lg VARCHAR(128),
	FOREIGN KEY(laptop_id) REFERENCES project_laptop(lid)
);

CREATE TABLE project_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32),
	email VARCHAR(64),
	phone VARCHAR(16) NOT NULL UNIQUE,
	avatar VARCHAR(128),
	user_name VARCHAR(32),
	gender INT
);
INSERT INTO project_user(uid,uname,upwd,phone) VALUES(1,"jerry","123456",17805988197);

CREATE TABLE project_receiver_address(
	aid INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	receiver VARCHAR(16),
	province VARCHAR(16),
	city VARCHAR(16),
	county VARCHAR(16),
	address VARCHAR(128),
	cellphone VARCHAR(16),
	fixedphone VARCHAR(16),
	postcode CHAR(6),
	tag VARCHAR(16),
	is_default BOOL,
	FOREIGN KEY(user_id) REFERENCES project_user(uid)
);

CREATE TABLE project_order(
	aid INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	address_id INT,
	status INT,
	order_time BIGINT,
	pay_time BIGINT,
	deliver_time BIGINT,
	received_time BIGINT,
	FOREIGN KEY(user_id) REFERENCES project_user(uid),
	FOREIGN KEY(address_id) REFERENCES project_receiver_address(aid)
);

CREATE TABLE project_shopping_cart(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	product_id INT,
	count INT,
	FOREIGN KEY(user_id) REFERENCES project_user(uid),
	FOREIGN KEY(product_id) REFERENCES project_laptop(lid)
);

CREATE TABLE project_order_detail(
	did INT PRIMARY KEY AUTO_INCREMENT,
	order_id INT,
	product_id INT,
	count INT,
	FOREIGN KEY(order_id) REFERENCES project_order(aid),
	FOREIGN KEY(product_id) REFERENCES project_laptop(lid)
);
