"use strict";

var React = require('react');
var LisFrame = require('./listFrame');
var Modal = require('./modal');
var ListActions = require('../actions/listActions');
var ListStore = require('../stores/listStore');
var TaskStore = require('../stores/taskStore');
var ListApi = require('../api/listApi');
var TaskApi = require('../api/taskApi');

import mui from 'material-ui';
var {RaisedButton} = mui;

var MainPage = React.createClass({
    getInitialState: function () {
        return {
            list: ListStore.getAllLists(),
            task: TaskStore.getAllTasks(),
            showModal: false,
            value: ''
        };
    },

    componentDidMount: function () {
        ListStore.addChangeListener(this._onChange);
        TaskStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        ListStore.removeChangeListener(this._onChange);
        TaskStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({list: ListStore.getAllLists(), task: TaskStore.getAllTasks()});
    },

    close() {
        this.setState({showModal: false});
    },

    open() {
        this.setState({showModal: true});
    },

    createList: function (list, e) {
        e.preventDefault();
        var listName = list.value;
        if (!listName) {
            return;
        }
        this.handleCreateList({name: listName});
        this.setState({showModal: false});
    },

    handleCreateList: function (list) {
        var that = this;
        ListApi.postList(list).then(function (data) {
            that.setState({list: data})
        });
    },

    handleCreateTask: function (task) {
        var that = this;
        TaskApi.postTask(task).then(function (data) {
            that.setState({task: data})
        });
    },

    handleEditList: function (list) {
        var that = this;
        ListApi.editList(list).then(function (data) {
            that.setState({list: data})
        });
    },

    handleEditTask: function (task) {
        var that = this;
        TaskApi.editTask(task).then(function (data) {
            that.setState({task: data})
        });
    },

    handleDeleteList: function (id) {
        var that = this;
        ListApi.deleteList(id).then(function (data) {
            that.setState({list: data})
        });
    },

    handleDeleteTask: function (id) {
        var that = this;
        TaskApi.deleteTask(id).then(function (data) {
            that.setState({task: data})
        });
    },

    render: function () {
        return (
            <div>
                <LisFrame list={this.state.list} task={this.state.task}
                          onTaskSubmit={this.handleCreateTask}
                          onDeleteList={this.handleDeleteList}
                          onEditList={this.handleEditList}
                          onEditTask={this.handleEditTask}
                          onDeleteTask={this.handleDeleteTask}/>
                <div id="toDoBtn">
                    <RaisedButton id="toDoBtn" secondary={true} onClick={this.open} label="Add TODO List">
                    </RaisedButton>
                </div>
                <Modal showModal={this.state.showModal} close={this.close} value={this.state.value}
                       handleSubmit={this.createList}/>
            </div>
        )
    }
});

module.exports = MainPage;
