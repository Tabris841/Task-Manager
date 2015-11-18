"use strict";

var React = require('react');
var DateComponent = require('./dateComponent');

var TaskRow = React.createClass({
    propTypes: {
        task: React.PropTypes.object.isRequired,
        setTask: React.PropTypes.func.isRequired
    },

    editTrigger: function (event) {
        console.log(this.props.task);
        event.preventDefault();
        this.props.setTask(this.props.task);
    },

    deleteTask: function (task, e) {
        e.preventDefault();
        var taskId = task;
        this.props.onDeleteTask({id: taskId});
    },

    render: function () {
        return (
            <tr>
                <td>
                    <input type="checkbox" className="checkbox"/>
                </td>
                <td><DateComponent date={this.props.task.createdAt}/></td>
                <td>{this.props.task.name}</td>
                <td>
                    <button onClick={this.editTrigger}><span className="glyphicon glyphicon-pencil"></span>
                    </button>
                    <button onClick={this.deleteTask.bind(this, this.props.task.id)}><span
                        className="glyphicon glyphicon-trash"></span></button>
                </td>
            </tr>
        )
    }
});

module.exports = TaskRow;