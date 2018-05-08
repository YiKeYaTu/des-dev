const Client = require('mysql-pro');

module.exports = new Client({
    mysql: {
        host: '127.0.0.1',
        port: 3306,
        database: 'des_dev',
        user: 'root',
        password: ''
    }
});