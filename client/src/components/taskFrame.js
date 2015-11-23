"use strict";

var React = require('react');
var Modal = require('./modal');
var TaskRow = require('./taskRow');
var TaskActions =require('../actions/taskActions');
import mui from 'material-ui';

var {Table, TableBody, TableHeader, TableRow, TableHeaderColumn} = mui;

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
        TaskActions.editTask({name: taskName, id: taskId});
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
                <Table>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    {this.props.task.filter(function (obj) {
                        return obj.ListId === listId
                    }).map(function (task) {
                        return <TaskRow task={task} key={task.id} setTask={that.setTask}/>;
                    }, this)}
                    </TableBody>
                </Table>
                <Modal showModal={this.state.showModal} close={this.close} value={this.state.value} id={this.state.id}
                       handleSubmit={this.editTask}/>
            </div>
        )
    }
});

module.exports = TaskFrame;