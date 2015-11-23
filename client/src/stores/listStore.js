"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmmit = require('events').EventEmitter;
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _lists = [];

var ListStore = Object.assign({}, EventEmmit.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getAllLists: function () {
        return _lists;
    }
});

Dispatcher.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            _lists = action.initialData.list;
            ListStore.emitChange();
            break;
        case ActionTypes.CREATE_LIST:
            _lists = action.list;
            ListStore.emitChange();
            break;
        case ActionTypes.UPDATE_LIST:
            _lists = action.list;
            ListStore.emitChange();
            break;
        case ActionTypes.DELETE_LIST:
            _lists = action.list;
            ListStore.emitChange();
            break;
    }
});

module.exports = ListStore;