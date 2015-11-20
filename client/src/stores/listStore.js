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
        console.log(_lists);
        return _lists;
    },

    getListById: function (id) {
        return _.find(_lists, {id: id});
    }
});

Dispatcher.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            action.initialData.list.then(function (data) {
                _lists = data
            });
            ListStore.emitChange();
            break;
        case ActionTypes.CREATE_LIST:
            _lists.push(action.list);
            ListStore.emitChange();
            break;
        case ActionTypes.UPDATE_LIST:
            var existingList = _.find(_lists, {id: action.list.id});
            var existingListIndex = _.indexOf(_lists, existingList);
            _lists.splice(existingListIndex, 1, action.list);
            ListStore.emitChange();
            break;
        case ActionTypes.DELETE_LIST:
            _.remove(_lists, function(list) {
                return action.id === list.id;
            });
            ListStore.emitChange();
            break;
    }
});

module.exports = ListStore;