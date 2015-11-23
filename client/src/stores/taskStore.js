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
    }
});

Dispatcher.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            _tasks = action.initialData.task;
            TaskStore.emitChange();
            break;
        case ActionTypes.CREATE_TASK:
            _tasks = action.task
            TaskStore.emitChange();
            break;
        case ActionTypes.UPDATE_TASK:
            _tasks = action.task
            TaskStore.emitChange();
            break;
        case ActionTypes.DELETE_TASK:
            _tasks = action.task
            TaskStore.emitChange();
            break;
    }
});

module.exports = TaskStore;
