"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var TaskApi = require('../api/taskApi');
var ActionTypes = require('../constants/actionTypes');

var TaskActions = {
    createTask: function (task) {
        TaskApi.postTask(task).then(function (data) {
            Dispatcher.dispatch({
                actionType: ActionTypes.CREATE_TASK,
                task: data
            });
        });
    },
    editTask: function(task) {
        TaskApi.editTask(task).then(function (data) {
            Dispatcher.dispatch({
                actionType: ActionTypes.UPDATE_TASK,
                task: data
            });
        })
    },
    deleteTask: function(id) {
        TaskApi.deleteTask(id).then(function (data) {
            Dispatcher.dispatch({
                actionType: ActionTypes.DELETE_TASK,
                task: data
            });
        });
    }
};

module.exports = TaskActions;