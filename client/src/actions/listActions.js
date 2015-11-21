"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ListApi = require('../api/listApi');
var ActionTypes = require('../constants/actionTypes');

var ListActions = {
    createList: function (list) {
        ListApi.postList(list).then(function (data) {
            Dispatcher.dispatch({
                actionType: ActionTypes.CREATE_LIST,
                list: data
            });
        });
    },
    editList: function(list) {
        ListApi.editList(list).then(function (data) {
            Dispatcher.dispatch({
                actionType: ActionTypes.UPDATE_LIST,
                list: data
            });
        })
    },
    deleteList: function(id) {
        ListApi.deleteList(id).then(function (data) {
            Dispatcher.dispatch({
                actionType: ActionTypes.DELETE_LIST,
                list: data
            });
        });
    }
};
module.exports = ListActions;