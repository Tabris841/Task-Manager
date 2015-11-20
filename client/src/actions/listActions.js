"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ListApi = require('../api/listApi');
var ActionTypes = require('../constants/actionTypes');

var ListActions = {
    createList: function (list) {
        var that = this;
        var newList = ListApi.editList(list).then(function (data) {
            that.setState({list: data})
        });

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_LIST,
            author: newList
        });
    }
};
module.exports = ListActions;