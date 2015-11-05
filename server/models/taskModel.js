var sqlite = require('sqlite3').verbose(),
    Sequelize = require('sequelize'),
    List = require('../models/listModel'),
    db = new Sequelize('ToDoList', null, null, {
        host: 'localhost',
        dialect: 'sqlite',
        storage: './database/ToDoList.sqlite3'
    });

//Model for Task Table
var Task = db.define('Task', {
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
    },
    deadline: {
        type: Sequelize.DATE
    },
    done: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    ListId: {
        type: Sequelize.INTEGER,
        references: {
            model: List,
            key: 'id'
        }
    }
});

Task.belongsTo(List);

//Create the tables
Task.sync();

module.exports = Task;