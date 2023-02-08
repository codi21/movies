CREATE DATABASE IF NOT EXISTS moviesdb;
USE moviesdb;
CREATE tables movies (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  casting JSON NOT NULL,
  punctuation INT(11) NOT NULL,
  path_image_location VARCHAR(255) NOT NULL 

);
