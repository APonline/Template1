const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
var fs = require('fs');

module.exports = function(app){
    const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        options: false,
        logging: false,
        pool: {
          max: dbConfig.pool.max,
          min: dbConfig.pool.min,
          acquire: dbConfig.pool.acquire,
          idle: dbConfig.pool.idle
        }
    }); 

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    fs.readdirSync(__dirname).forEach(function(file) {
        if (file == "index.js") return;
        var name = file.substr(0, file.indexOf('.'));
        require('./' + name)(sequelize, Sequelize);
    });

    return db;
}