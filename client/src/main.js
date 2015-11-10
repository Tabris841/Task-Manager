$ = jQuery = require('jquery');
var React = require('react');
var ListApi = require('./api/listApi');
var TaskApi = require('./api/taskApi');
var _ = require('lodash');

var findTasks = function (listId, task) {
    var tasks = [];
    for(var i = 0, len = task.length; i < len; i += 1 ) {
        if(listId === task[i].ListId) {
            tasks.push(task[i])
        }
    }
    return tasks
};

var TaskFrame = React.createClass({
    getInitialState: function () {
        return {
            list: [],
            task: []
        };
    },
    componentWillMount: function () {
        var self = this;
        ListApi.getAllLists().then(function (data) {
            self.setState({list: data});
        });
        TaskApi.getAllTask().then(function (data) {
            self.setState({task: data})
        });

    },
    render: function () {
        var createList = function (list) {
            return (
                <div id="taskTable">
                    <div id="taskHeader">
                        <span className="glyphicon glyphicon-calendar"></span>
                        <h4 key={list.id}>{list.name}</h4>
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
                        {this.state.task.map(createTask, this)}
                    </div>
                </div>
            )
        };

        var createTask = function (task) {
            return (
                <table className="table table-hover">
                    <tr>
                        <td className="col-md-1">
                            <input type="checkbox" className="checkbox"/>
                        </td>
                        <td key={task.id} className="col-md-9">{task.name}</td>
                        <td className="col-md-2">
                            <span className="glyphicon glyphicon-pencil"></span>
                            <span className="glyphicon glyphicon-trash"></span>
                        </td>
                    </tr>
                </table>
            )
        };

        return (
            <div>
                {this.state.list.map(createList, this)}
            </div>
        )
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div>
                < TaskFrame />
                <a href="#" className="btn btn-primary" id="toDoBtn">
                    <span className="glyphicon glyphicon-plus"></span>
                    &nbsp;&nbsp;
                    Add TODO List
                </a>
            </div>
        )
    }
});


React.render(
    < App />, document.getElementById('app')
);