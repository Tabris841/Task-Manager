"use strict";

var React = require('react');
var LisFrame = require('./listFrame');
var ListApi = require('../api/listApi');
var TaskApi = require('../api/taskApi');
var ModalList = require('./modalList');

var MainPage = React.createClass({
    getInitialState: function () {
        return {
            list: [],
            task: []

        };
    },

    handleTaskSubmit: function(task) {
        $.ajax({
            url: "http://localhost:9002/tasks",
            dataType: 'json',
            type: 'POST',
            data: task,
            success: function(data) {
                this.setState({task: data});
            }.bind(this),
            error: function(xhr, status, err) {
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
                success: function(data) {
                    this.setState({list: data});
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error("http://localhost:9002/lists", status, err.toString());
                }.bind(this)
            });

            $.ajax({
                url: "http://localhost:9002/tasks",
                dataType: 'json',
                cache: false,
                success: function(data) {
                    this.setState({task: data});
                }.bind(this),
                error: function(xhr, status, err) {
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
                < LisFrame list={this.state.list} task={this.state.task} onTaskSubmit={this.handleTaskSubmit}/>
                <button type="button" className="btn btn-primary" id="toDoBtn" data-toggle="modal"
                        data-target="#addListModal">
                    <span className="glyphicon glyphicon-plus"></span>
                    &nbsp;&nbsp;
                    Add TODO List
                </button>

            </div>
        )
    }
});

module.exports = MainPage;
