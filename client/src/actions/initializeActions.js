"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var TaskApi = require('../api/taskApi');
var ListApi = require('../api/listApi');

var InitializeActions = {
    initData: function () {
        ListApi.getAllLists().then(function (list) {
            TaskApi.getAllTasks().then(function (task) {
                Dispatcher.dispatch({
                    actionType: ActionTypes.INITIALIZE,
                    initialData: {
                        list: list,
                        task: task
                    }
                });
            })
        });
    }
};

module.exports = InitializeActions;
