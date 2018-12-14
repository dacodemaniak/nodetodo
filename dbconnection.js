/**
 * Service de connexion à la base de données mysql
 * @version 0.1.0
 */

 /**
  * Instance du driver de connexion mySQL
  */
var mysql = require('mysql');

/**
 * Instance de connexion à la base de données "todos"
 */
var connexion = mysql.createPool ({
    host: '127.0.0.1',
    user: 'stories_dba',
    password: 'admin',
    database: 'stories_db'
});

module.exports = connexion;