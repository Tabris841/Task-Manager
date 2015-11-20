"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var TaskApi = require('../api/taskApi');
var ListApi = require('../api/listApi');

var InitializeActions = {
    initApp: function () {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                list: ListApi.getAllLists(),
                task: TaskApi.getAllTask()
            }
        });
    }
};

module.exports = InitializeActions;
