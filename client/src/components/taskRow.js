"use strict";

var React = require('react');

var TaskRow = React.createClass({
    propTypes: {
        task: React.PropTypes.object.isRequired,
        setTask: React.PropTypes.func.isRequired
    },
    editTrigger: function (event) {
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
                <td className="col-md-1">
                    <input type="checkbox" className="checkbox"/>
                </td>
                <td className="col-md-9">{this.props.task.name}</td>
                <td className="col-md-2">
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