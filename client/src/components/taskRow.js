"use strict";

var React = require('react');
var DateComponent = require('./dateComponent');
var TaskActions = require('../actions/taskActions');
import mui from 'material-ui';

var {TableRow, TableRowColumn, Checkbox, FontIcon, Styles} = mui;
var {Colors} = Styles;

var TaskRow = React.createClass({
    propTypes: {
        task: React.PropTypes.object.isRequired,
        setTask: React.PropTypes.func.isRequired,
        editTask: React.PropTypes.func.isRequired
    },

    getInitialState: function () {
        return {
            date: '',
            done: this.props.task.done
        }
    },

    taskChanged: function (date, done) {
        if(done == undefined) {
            done = this.state.done
        }

        var data = {
            value: this.props.task.name,
            id: this.props.task.id,
            deadline: date,
            done: done
        };
        this.props.editTask(data);
    },

    setDone: function () {
        var done = (this.state.done) ? false:true;
        this.taskChanged(this.props.task.deadline, done)
    },

    editTrigger: function (event) {
        event.preventDefault();
        this.props.setTask(this.props.task);
    },

    deleteTask: function (task) {
        TaskActions.deleteTask({id: task});
    },

    render: function () {
        return (
            <TableRow>
                <TableRowColumn id="firstColumn">
                    <div><Checkbox defaultChecked={this.state.done} onClick={this.setDone} labelStyle={{'backgroundColor': '#4F628E'}}/></div>
                </TableRowColumn>
                <TableRowColumn>
                    <DateComponent date={this.props.task.deadline} dateChanged={this.taskChanged}/>
                </TableRowColumn>
                <TableRowColumn>{this.props.task.name}</TableRowColumn>
                <TableRowColumn id="forthColumn">
                    <div>
                        <FontIcon className="material-icons editIcon" onClick={this.editTrigger} color={Colors.grey500}
                                  hoverColor={Colors.greenA200}>edit</FontIcon>
                        <FontIcon className="material-icons"
                                  onClick={this.deleteTask.bind(this, this.props.task.id)} color={Colors.grey500}
                                  hoverColor={Colors.greenA200}>delete</FontIcon>
                    </div>
                </TableRowColumn>
            </TableRow>
        )
    }
});

module.exports = TaskRow;

