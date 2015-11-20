"use strict";

var React = require('react');
var DateComponent = require('./dateComponent');
import mui from 'material-ui';

var {TableRow, TableRowColumn, Checkbox, IconButton} = mui;

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
            <TableRow>
                <TableRowColumn>
                    <Checkbox/>
                </TableRowColumn>
                <TableRowColumn><DateComponent date={this.props.task.createdAt}/></TableRowColumn>
                <TableRowColumn>{this.props.task.name}</TableRowColumn>
                <TableRowColumn>
                    <IconButton iconClassName="material-icons" onClick={this.editTrigger}><span
                        className="grey">edit</span></IconButton>
                    <IconButton iconClassName="material-icons" onClick={this.deleteTask.bind(this, this.props.task.id)} ><span
                        className="grey">delete</span></IconButton>
                </TableRowColumn>
            </TableRow>
        )
    }
});

module.exports = TaskRow;

