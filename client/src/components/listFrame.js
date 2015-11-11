"use strict";

var React = require('react');
var ListApi = require('../api/listApi');
var TaskApi = require('../api/taskApi');
var TaskFrame = require('./taskFrame');

var ListFrame = React.createClass({
    getInitialState: function () {
        return {
            list: [],
            task: []
        };
    },
    componentDidMount: function () {
        var self = this;
        if (self.isMounted()) {
            ListApi.getAllLists().then(function (data) {
                self.setState({list: data});
            });
            TaskApi.getAllTask().then(function (data) {
                self.setState({task: data})
            });
        }
    },
    render: function () {
        var createList = function (list) {
            return (
                <div id="taskTable" key={list.id}>
                    <div id="taskHeader">
                        <span className="glyphicon glyphicon-calendar"></span>
                        <h4>{list.name}</h4>
                        <span className="glyphicon glyphicon-trash pull-right"></span>
                        &nbsp;&nbsp;
                        <span className="glyphicon glyphicon-pencil pull-right"></span>
                    </div>
                    <div id="taskNav">
                        <span className="glyphicon glyphicon-plus"></span>

                        <div className="input-group">
                            <input type="text" className="form-control"
                                   placeholder="Start typing here to create a task..."/>
                    <span className="input-group-btn">
                        <button className="btn btn-success">Add Task</button>
                    </span>
                        </div>
                    </div>
                    <div>
                        <TaskFrame task={this.state.task} list={list.id}/>
                    </div>
                </div>
            )
        };

        return (
            <div>
                {this.state.list.map(createList, this)}
            </div>
        )
    }
});

module.exports = ListFrame;
