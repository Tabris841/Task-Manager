"use strict";

var React = require('react');
var Modal = require('./modal');
var TaskRow = require('./taskRow');

var TaskFrame = React.createClass({
    getInitialState: function () {
        return {
            value: "",
            id: "",
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

    editTask: function (task, e) {
        e.preventDefault();
        var taskName = task.value;
        var taskId = task.id;
        if (!taskName) {
            return;
        }
        this.props.onEditTask({name: taskName, id: taskId});
        this.setState({showModal: false});
    },

    setTask: function (task) {
        this.setState({
            value: task.name,
            id: task.id,
            showModal: true
        });
    },
    render: function () {
        var listId = this.props.list,
            that = this;

        return (
            <div>
                <table className="table table-hover">
                    <tbody>
                    {this.props.task.filter(function (obj) {
                        return obj.ListId === listId
                    }).map(function (task) {
                        return <TaskRow task={task} key={task.id} setTask={that.setTask}
                                        onDeleteTask={this.props.onDeleteTask}/>;
                    }, this)}
                    </tbody>
                </table>
                <Modal showModal={this.state.showModal} close={this.close} value={this.state.value} id={this.state.id}
                       handleSubmit={this.editTask}/>
            </div>
        )
    }
});

module.exports = TaskFrame;