var sqlite = require('sqlite3').verbose(),
	Sequelize = require('sequelize'),
	Task = require('../models/taskModel'),
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
		type: Sequelize.INTEGER,
	},
	name: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	deadline: {
		type: Sequelize.DATE
	},
	TaskId: {
		type: Sequelize.INTEGER,
		references: {
			model: List,
			key: 'id'
		}
	}
});

List.belongsTo(Task);

//Create the tables
List.sync();

module.exports = List;