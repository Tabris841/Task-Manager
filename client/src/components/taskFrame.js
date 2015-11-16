"use strict";

var React = require('react');
var Modal = require('./modal');

var TaskFrame = React.createClass({
    getInitialState: function () {
        return {
            value: "",
            showModal: false
        };
    },

    close() {
        this.setState({showModal: false});
    },

    open(task) {
        this.setState({
            showModal: true,
            value: task
        });
    },

    deleteTask: function (task, e) {
        e.preventDefault();
        var listId = task;
        console.log(task);
        this.props.onDeleteTask({id: listId});
    },

    editTask: function(task, e) {
        e.preventDefault();
        var taskName = task;
        if (!listName) {
            return;
        }
        this.props.onTaskSubmit({name: taskName});
    },

    render: function () {
        var listId = this.props.list;
        var createTask = function (task) {
            return (
                <tbody key={task.id}>
                <tr>
                    <td className="col-md-1">
                        <input type="checkbox" className="checkbox"/>
                    </td>
                    <td className="col-md-9">{task.name}</td>
                    <td className="col-md-2">
                        <button onClick={this.open.bind(this, task.name)}><span className="glyphicon glyphicon-pencil"></span>
                        </button>
                        <button onClick={this.deleteTask.bind(this, task.id)}><span
                            className="glyphicon glyphicon-trash"></span></button>
                    </td>
                </tr>
                </tbody>
            )
        };
        return (
            <div>
                <table className="table table-hover">
                    {this.props.task.filter(function (obj) {
                        return obj.ListId === listId
                    }).map(createTask, this)}
                </table>
                <Modal showModal={this.state.showModal} close={this.close} value={this.state.value} handleSubmit={this.editTask}/>
            </div>
        )
    }
});

module.exports = TaskFrame;