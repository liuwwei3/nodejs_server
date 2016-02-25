var settings = require('../settings');

var Db = require('mongodb').Db;

var Server = require('mongodb').Server;

module.exports = new Db( settings.mongodb, new Server(settings.mongohost, settings.mongoport, {}));
