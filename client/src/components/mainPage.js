"use strict";

var React = require('react');
var LisFrame = require('./listFrame');
var ListApi = require('../api/listApi');
var TaskApi = require('../api/taskApi');
var Modal = require('./modal');
import mui from 'material-ui';

var {RaisedButton} = mui;

var MainPage = React.createClass({
    getInitialState: function () {
        return {
            list: [],
            task: [],
            showModal: false,
            value: ''
        };
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

    componentDidMount: function () {
        var that = this;
        if (this.isMounted()) {
            ListApi.getAllLists().then(function (data) {
                that.setState({list: data})
            });
            TaskApi.getAllTask().then(function (data) {
                that.setState({task: data})
            })
        }
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
