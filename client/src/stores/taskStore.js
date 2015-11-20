"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmmit = require('events').EventEmitter;
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _tasks = [];

var TaskStore = Object.assign({}, EventEmmit.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getAllTasks: function () {
        return _tasks;
    },

    getTaskById: function (id) {
        return _.find(_tasks, {id: id});
    }
});

Dispatcher.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            action.initialData.task.then(function (data) {
                _tasks = data;
            });
            TaskStore.emitChange();
            break;
        case ActionTypes.CREATE_TASK:
            _tasks.push(action.task);
            TaskStore.emitChange();
            break;
        case ActionTypes.UPDATE_TASK:
            var existingTask = _.find(_task, {id: action.task.id});
            var existingTaskIndex = _.indexOf(_tasks, existingTask);
            _list.splice(existingTaskIndex, 1, action.task);
            TaskStore.emitChange();
            break;
        case ActionTypes.DELETE_TASK:
            _.remove(_tasks, function(task) {
                return task.id === task.id;
            });
            TaskStore.emitChange();
            break;
    }
});

module.exports = TaskStore;
