var sqlite = require('sqlite3').verbose(),
	Sequelize = require('sequelize'),
	db = new Sequelize('ToDoList', null, null, {
		host: 'localhost',
		dialect: 'sqlite',
		storage: './database/ToDoList.sqlite3'
	});

//Model for List Table 
var List = db.define('List', {
	id: {
		primaryKey: true,
		allowNull: false,
		unique: true,
		autoIncrement: true,
		type: Sequelize.INTEGER
	},
	name: {
		type: Sequelize.TEXT,
		allowNull: false
	}
});

//Create the tables
List.sync();

module.exports = List;