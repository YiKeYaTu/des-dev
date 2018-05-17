/*
Navicat MySQL Data Transfer

Source Server         : test
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : des_dev

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-05-17 09:00:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for template
-- ----------------------------
DROP TABLE IF EXISTS `template`;
CREATE TABLE `template` (
  `template_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `template_json` longtext NOT NULL,
  `template_user_id` int(255) NOT NULL,
  `template_name` varchar(255) NOT NULL,
  PRIMARY KEY (`template_id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of template
-- ----------------------------
INSERT INTO `template` VALUES ('7', '[{\"props\":null,\"componentDescription\":{},\"name\":{\"path\":\"./Dropdown.ui.index.js\",\"componentName\":\"default\"},\"pos\":{\"x\":251,\"y\":160},\"parent\":null,\"children\":null},{\"props\":null,\"componentDescription\":{\"description\":\"\",\"displayName\":\"Btn\",\"methods\":[],\"props\":{\"htmlType\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'submit\'\",\"computed\":false},{\"value\":\"\'reset\'\",\"computed\":false},{\"value\":\"\'button\'\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"ghost\":{\"type\":{\"name\":\"bool\"},\"required\":false,\"description\":\"\"},\"href\":{\"type\":{\"name\":\"string\"},\"required\":false,\"description\":\"\"},\"loading\":{\"type\":{\"name\":\"bool\"},\"required\":false,\"description\":\"\"},\"shape\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'circle\'\",\"computed\":false},{\"value\":\"null\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"size\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'small\'\",\"computed\":false},{\"value\":\"\'large\'\",\"computed\":false},{\"value\":\"null\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"type\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'primary\'\",\"computed\":false},{\"value\":\"\'dashed\'\",\"computed\":false},{\"value\":\"\'danger\'\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"children\":{\"defaultValue\":{\"value\":\"\'默认按钮\'\",\"computed\":false},\"required\":false}}},\"name\":{\"path\":\"./Button.ui.index.js\",\"componentName\":\"default\"},\"pos\":{\"x\":328,\"y\":94.3333},\"parent\":null,\"children\":null},{\"props\":null,\"name\":{\"path\":\"./Input.ui.index.js\",\"componentName\":\"Input\"},\"pos\":{\"x\":324,\"y\":398.333},\"parent\":null,\"children\":null},{\"props\":null,\"name\":{\"path\":\"./Input.ui.index.js\",\"componentName\":\"TextArea\"},\"pos\":{\"x\":393.5,\"y\":597.667},\"parent\":null,\"children\":null},{\"props\":null,\"name\":{\"path\":\"./Input.ui.index.js\",\"componentName\":\"TextArea\"},\"pos\":{\"x\":682.5,\"y\":289.667},\"parent\":null,\"children\":null},{\"props\":null,\"name\":{\"path\":\"./Input.ui.index.js\",\"componentName\":\"TextArea\"},\"pos\":{\"x\":115.5,\"y\":262.667},\"parent\":null,\"children\":null}]', '2', 'test0.16373493556858687');
INSERT INTO `template` VALUES ('3', '[{\"props\":null,\"componentDescription\":{\"description\":\"\",\"displayName\":\"Btn\",\"methods\":[],\"props\":{\"htmlType\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'submit\'\",\"computed\":false},{\"value\":\"\'reset\'\",\"computed\":false},{\"value\":\"\'button\'\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"ghost\":{\"type\":{\"name\":\"bool\"},\"required\":false,\"description\":\"\"},\"href\":{\"type\":{\"name\":\"string\"},\"required\":false,\"description\":\"\"},\"loading\":{\"type\":{\"name\":\"bool\"},\"required\":false,\"description\":\"\"},\"shape\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'circle\'\",\"computed\":false},{\"value\":\"null\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"size\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'small\'\",\"computed\":false},{\"value\":\"\'large\'\",\"computed\":false},{\"value\":\"null\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"type\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'primary\'\",\"computed\":false},{\"value\":\"\'dashed\'\",\"computed\":false},{\"value\":\"\'danger\'\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"children\":{\"defaultValue\":{\"value\":\"\'默认按钮\'\",\"computed\":false},\"required\":false}}},\"name\":{\"path\":\"./Button.ui.index.js\",\"componentName\":\"default\"},\"pos\":{\"x\":391,\"y\":224.333},\"parent\":null,\"children\":null},{\"props\":null,\"componentDescription\":{\"description\":\"\",\"displayName\":\"Btn\",\"methods\":[],\"props\":{\"htmlType\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'submit\'\",\"computed\":false},{\"value\":\"\'reset\'\",\"computed\":false},{\"value\":\"\'button\'\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"ghost\":{\"type\":{\"name\":\"bool\"},\"required\":false,\"description\":\"\"},\"href\":{\"type\":{\"name\":\"string\"},\"required\":false,\"description\":\"\"},\"loading\":{\"type\":{\"name\":\"bool\"},\"required\":false,\"description\":\"\"},\"shape\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'circle\'\",\"computed\":false},{\"value\":\"null\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"size\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'small\'\",\"computed\":false},{\"value\":\"\'large\'\",\"computed\":false},{\"value\":\"null\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"type\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'primary\'\",\"computed\":false},{\"value\":\"\'dashed\'\",\"computed\":false},{\"value\":\"\'danger\'\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"children\":{\"defaultValue\":{\"value\":\"\'默认按钮\'\",\"computed\":false},\"required\":false}}},\"name\":{\"path\":\"./Button.ui.index.js\",\"componentName\":\"default\"},\"pos\":{\"x\":85,\"y\":11.3333},\"parent\":null,\"children\":null}]', '2', 'test0.1649562229612227');
INSERT INTO `template` VALUES ('4', '[{\"props\":null,\"componentDescription\":{\"description\":\"\",\"displayName\":\"Btn\",\"methods\":[],\"props\":{\"htmlType\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'submit\'\",\"computed\":false},{\"value\":\"\'reset\'\",\"computed\":false},{\"value\":\"\'button\'\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"ghost\":{\"type\":{\"name\":\"bool\"},\"required\":false,\"description\":\"\"},\"href\":{\"type\":{\"name\":\"string\"},\"required\":false,\"description\":\"\"},\"loading\":{\"type\":{\"name\":\"bool\"},\"required\":false,\"description\":\"\"},\"shape\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'circle\'\",\"computed\":false},{\"value\":\"null\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"size\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'small\'\",\"computed\":false},{\"value\":\"\'large\'\",\"computed\":false},{\"value\":\"null\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"type\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'primary\'\",\"computed\":false},{\"value\":\"\'dashed\'\",\"computed\":false},{\"value\":\"\'danger\'\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"children\":{\"defaultValue\":{\"value\":\"\'默认按钮\'\",\"computed\":false},\"required\":false}}},\"name\":{\"path\":\"./Button.ui.index.js\",\"componentName\":\"default\"},\"pos\":{\"x\":85,\"y\":11.3333},\"parent\":null,\"children\":null}]', '2', 'test0.13056401174333532');
INSERT INTO `template` VALUES ('5', '[{\"props\":null,\"componentDescription\":{},\"name\":{\"path\":\"./Dropdown.ui.index.js\",\"componentName\":\"default\"},\"pos\":{\"x\":251,\"y\":160},\"parent\":null,\"children\":null},{\"props\":null,\"componentDescription\":{\"description\":\"\",\"displayName\":\"Btn\",\"methods\":[],\"props\":{\"htmlType\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'submit\'\",\"computed\":false},{\"value\":\"\'reset\'\",\"computed\":false},{\"value\":\"\'button\'\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"ghost\":{\"type\":{\"name\":\"bool\"},\"required\":false,\"description\":\"\"},\"href\":{\"type\":{\"name\":\"string\"},\"required\":false,\"description\":\"\"},\"loading\":{\"type\":{\"name\":\"bool\"},\"required\":false,\"description\":\"\"},\"shape\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'circle\'\",\"computed\":false},{\"value\":\"null\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"size\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'small\'\",\"computed\":false},{\"value\":\"\'large\'\",\"computed\":false},{\"value\":\"null\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"type\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'primary\'\",\"computed\":false},{\"value\":\"\'dashed\'\",\"computed\":false},{\"value\":\"\'danger\'\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"children\":{\"defaultValue\":{\"value\":\"\'默认按钮\'\",\"computed\":false},\"required\":false}}},\"name\":{\"path\":\"./Button.ui.index.js\",\"componentName\":\"default\"},\"pos\":{\"x\":328,\"y\":94.3333},\"parent\":null,\"children\":null}]', '2', 'test0.12741244787928618');
INSERT INTO `template` VALUES ('6', '[{\"props\":null,\"componentDescription\":{},\"name\":{\"path\":\"./Dropdown.ui.index.js\",\"componentName\":\"default\"},\"pos\":{\"x\":251,\"y\":160},\"parent\":null,\"children\":null},{\"props\":null,\"componentDescription\":{\"description\":\"\",\"displayName\":\"Btn\",\"methods\":[],\"props\":{\"htmlType\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'submit\'\",\"computed\":false},{\"value\":\"\'reset\'\",\"computed\":false},{\"value\":\"\'button\'\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"ghost\":{\"type\":{\"name\":\"bool\"},\"required\":false,\"description\":\"\"},\"href\":{\"type\":{\"name\":\"string\"},\"required\":false,\"description\":\"\"},\"loading\":{\"type\":{\"name\":\"bool\"},\"required\":false,\"description\":\"\"},\"shape\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'circle\'\",\"computed\":false},{\"value\":\"null\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"size\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'small\'\",\"computed\":false},{\"value\":\"\'large\'\",\"computed\":false},{\"value\":\"null\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"type\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'primary\'\",\"computed\":false},{\"value\":\"\'dashed\'\",\"computed\":false},{\"value\":\"\'danger\'\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"children\":{\"defaultValue\":{\"value\":\"\'默认按钮\'\",\"computed\":false},\"required\":false}}},\"name\":{\"path\":\"./Button.ui.index.js\",\"componentName\":\"default\"},\"pos\":{\"x\":328,\"y\":94.3333},\"parent\":null,\"children\":null},{\"props\":null,\"name\":{\"path\":\"./Input.ui.index.js\",\"componentName\":\"Input\"},\"pos\":{\"x\":324,\"y\":398.333},\"parent\":null,\"children\":null},{\"props\":null,\"name\":{\"path\":\"./Input.ui.index.js\",\"componentName\":\"TextArea\"},\"pos\":{\"x\":393.5,\"y\":597.667},\"parent\":null,\"children\":null},{\"props\":null,\"name\":{\"path\":\"./Input.ui.index.js\",\"componentName\":\"TextArea\"},\"pos\":{\"x\":682.5,\"y\":289.667},\"parent\":null,\"children\":null},{\"props\":null,\"name\":{\"path\":\"./Input.ui.index.js\",\"componentName\":\"TextArea\"},\"pos\":{\"x\":115.5,\"y\":262.667},\"parent\":null,\"children\":null}]', '2', 'test0.8153943027135389');
INSERT INTO `template` VALUES ('8', '[{\"props\":null,\"componentDescription\":{},\"name\":{\"path\":\"./Dropdown.ui.index.js\",\"componentName\":\"default\"},\"pos\":{\"x\":251,\"y\":160},\"parent\":null,\"children\":null},{\"props\":{\"size\":\"large\"},\"componentDescription\":{\"description\":\"\",\"displayName\":\"Btn\",\"methods\":[],\"props\":{\"htmlType\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'submit\'\",\"computed\":false},{\"value\":\"\'reset\'\",\"computed\":false},{\"value\":\"\'button\'\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"ghost\":{\"type\":{\"name\":\"bool\"},\"required\":false,\"description\":\"\"},\"href\":{\"type\":{\"name\":\"string\"},\"required\":false,\"description\":\"\"},\"loading\":{\"type\":{\"name\":\"bool\"},\"required\":false,\"description\":\"\"},\"shape\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'circle\'\",\"computed\":false},{\"value\":\"null\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"size\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'small\'\",\"computed\":false},{\"value\":\"\'large\'\",\"computed\":false},{\"value\":\"null\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"type\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'primary\'\",\"computed\":false},{\"value\":\"\'dashed\'\",\"computed\":false},{\"value\":\"\'danger\'\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"children\":{\"defaultValue\":{\"value\":\"\'默认按钮\'\",\"computed\":false},\"required\":false}}},\"name\":{\"path\":\"./Button.ui.index.js\",\"componentName\":\"default\"},\"pos\":{\"x\":328,\"y\":94.3333},\"parent\":null,\"children\":null},{\"props\":null,\"name\":{\"path\":\"./Input.ui.index.js\",\"componentName\":\"Input\"},\"pos\":{\"x\":324,\"y\":398.333},\"parent\":null,\"children\":null},{\"props\":null,\"name\":{\"path\":\"./Input.ui.index.js\",\"componentName\":\"TextArea\"},\"pos\":{\"x\":393.5,\"y\":597.667},\"parent\":null,\"children\":null},{\"props\":null,\"name\":{\"path\":\"./Input.ui.index.js\",\"componentName\":\"TextArea\"},\"pos\":{\"x\":682.5,\"y\":289.667},\"parent\":null,\"children\":null},{\"props\":null,\"name\":{\"path\":\"./Input.ui.index.js\",\"componentName\":\"TextArea\"},\"pos\":{\"x\":115.5,\"y\":262.667},\"parent\":null,\"children\":null}]', '2', 'test0.27543314033799526');
INSERT INTO `template` VALUES ('9', '[{\"props\":{\"size\":\"large\"},\"componentDescription\":{\"description\":\"\",\"displayName\":\"Btn\",\"methods\":[],\"props\":{\"htmlType\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'submit\'\",\"computed\":false},{\"value\":\"\'reset\'\",\"computed\":false},{\"value\":\"\'button\'\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"ghost\":{\"type\":{\"name\":\"bool\"},\"required\":false,\"description\":\"\"},\"href\":{\"type\":{\"name\":\"string\"},\"required\":false,\"description\":\"\"},\"loading\":{\"type\":{\"name\":\"bool\"},\"required\":false,\"description\":\"\"},\"shape\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'circle\'\",\"computed\":false},{\"value\":\"null\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"size\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'small\'\",\"computed\":false},{\"value\":\"\'large\'\",\"computed\":false},{\"value\":\"null\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"type\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'primary\'\",\"computed\":false},{\"value\":\"\'dashed\'\",\"computed\":false},{\"value\":\"\'danger\'\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"children\":{\"defaultValue\":{\"value\":\"\'默认按钮\'\",\"computed\":false},\"required\":false}}},\"name\":{\"path\":\"./Button.ui.index.js\",\"componentName\":\"default\"},\"pos\":{\"x\":256,\"y\":209.333},\"parent\":null,\"children\":null},{\"props\":null,\"componentDescription\":{},\"name\":{\"path\":\"./Dropdown.ui.index.js\",\"componentName\":\"default\"},\"pos\":{\"x\":479,\"y\":357},\"parent\":null,\"children\":null},{\"props\":null,\"name\":{\"path\":\"./Icon.ui.index.js\",\"componentName\":\"default\"},\"pos\":{\"x\":523,\"y\":502.333},\"parent\":null,\"children\":null},{\"props\":null,\"name\":{\"path\":\"./Input.ui.index.js\",\"componentName\":\"Input\"},\"pos\":{\"x\":276,\"y\":533.333},\"parent\":null,\"children\":null},{\"props\":null,\"name\":{\"path\":\"./Input.ui.index.js\",\"componentName\":\"TextArea\"},\"pos\":{\"x\":250.5,\"y\":412.667},\"parent\":null,\"children\":null},{\"props\":null,\"name\":{\"path\":\"./Input.ui.index.js\",\"componentName\":\"Search\"},\"pos\":{\"x\":640.5,\"y\":521.333},\"parent\":null,\"children\":null},{\"props\":null,\"componentDescription\":{\"description\":\"\",\"displayName\":\"Btn\",\"methods\":[],\"props\":{\"htmlType\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'submit\'\",\"computed\":false},{\"value\":\"\'reset\'\",\"computed\":false},{\"value\":\"\'button\'\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"ghost\":{\"type\":{\"name\":\"bool\"},\"required\":false,\"description\":\"\"},\"href\":{\"type\":{\"name\":\"string\"},\"required\":false,\"description\":\"\"},\"loading\":{\"type\":{\"name\":\"bool\"},\"required\":false,\"description\":\"\"},\"shape\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'circle\'\",\"computed\":false},{\"value\":\"null\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"size\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'small\'\",\"computed\":false},{\"value\":\"\'large\'\",\"computed\":false},{\"value\":\"null\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"type\":{\"type\":{\"name\":\"enum\",\"value\":[{\"value\":\"\'primary\'\",\"computed\":false},{\"value\":\"\'dashed\'\",\"computed\":false},{\"value\":\"\'danger\'\",\"computed\":false}]},\"required\":false,\"description\":\"\"},\"children\":{\"defaultValue\":{\"value\":\"\'默认按钮\'\",\"computed\":false},\"required\":false}}},\"name\":{\"path\":\"./Button.ui.index.js\",\"componentName\":\"default\"},\"pos\":{\"x\":648,\"y\":127.333},\"parent\":null,\"children\":null}]', '2', 'test0.32992434559046213');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('0000000001', 'YiKeYaTu', '111003');
INSERT INTO `user` VALUES ('0000000002', 'a13165733725', '111003');
