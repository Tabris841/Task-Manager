"use strict";

var React = require('react');
var LisFrame = require('./listFrame');
var ListApi = require('../api/listApi');
var TaskApi = require('../api/taskApi');
var Modal = require('./modal');

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

    handleEditList: function (list) {
        $.ajax({
            url: "http://localhost:9002/lists",
            dataType: 'json',
            type: 'PUT',
            data: list,
            success: function (data) {
                this.setState({list: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error("http://localhost:9002/lists", status, err.toString());
            }.bind(this)
        });
    },

    handleEditTask: function (task) {
        $.ajax({
            url: "http://localhost:9002/tasks",
            dataType: 'json',
            type: 'PUT',
            data: task,
            success: function (data) {
                this.setState({task: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error("http://localhost:9002/tasks", status, err.toString());
            }.bind(this)
        });
    },

    handleCreateList: function (list) {
        $.ajax({
            url: "http://localhost:9002/lists",
            dataType: 'json',
            type: 'POST',
            data: list,
            success: function (data) {
                this.setState({list: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error("http://localhost:9002/lists", status, err.toString());
            }.bind(this)
        });
    },

    handleDeleteList: function (id) {
        $.ajax({
            url: "http://localhost:9002/lists",
            dataType: 'json',
            type: 'DELETE',
            data: id,
            success: function (data) {
                this.setState({list: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error("http://localhost:9002/lists", status, err.toString());
            }.bind(this)
        });
    },

    handleDeleteTask: function (id) {
        $.ajax({
            url: "http://localhost:9002/tasks",
            dataType: 'json',
            type: 'DELETE',
            data: id,
            success: function (data) {
                this.setState({task: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error("http://localhost:9002/tasks", status, err.toString());
            }.bind(this)
        });
    },

    handleCreateTask: function (task) {
        $.ajax({
            url: "http://localhost:9002/tasks",
            dataType: 'json',
            type: 'POST',
            data: task,
            success: function (data) {
                this.setState({task: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error("http://localhost:9002/tasks", status, err.toString());
            }.bind(this)
        });
    },

    componentDidMount: function () {
        if (this.isMounted()) {
            $.ajax({
                url: "http://localhost:9002/lists",
                dataType: 'json',
                cache: false,
                success: function (data) {
                    this.setState({list: data});
                }.bind(this),
                error: function (xhr, status, err) {
                    console.error("http://localhost:9002/lists", status, err.toString());
                }.bind(this)
            });

            $.ajax({
                url: "http://localhost:9002/tasks",
                dataType: 'json',
                cache: false,
                success: function (data) {
                    this.setState({task: data});
                }.bind(this),
                error: function (xhr, status, err) {
                    console.error("http://localhost:9002/tasks", status, err.toString());
                }.bind(this)
            });
        }
    },

    setListState: function (event) {
        return this.setState({name: event.target.value})
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
                <button type="button" className="btn btn-primary" id="toDoBtn" onClick={this.open}>
                    <span className="glyphicon glyphicon-plus"></span>
                    &nbsp;&nbsp;
                    Add TODO List
                </button>
                <Modal showModal={this.state.showModal} close={this.close} value={this.state.value}
                       handleSubmit={this.createList}/>
            </div>
        )
    }
});

module.exports = MainPage;
