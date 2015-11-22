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
        setTask: React.PropTypes.func.isRequired
    },

    editTrigger: function (event) {
        event.preventDefault();
        this.props.setTask(this.props.task);
    },

    deleteTask: function (task, e) {
        e.preventDefault();
        TaskActions.deleteTask({id: task});
    },

    render: function () {
        return (
            <TableRow>
                <TableRowColumn id="firstColumn">
                    <div><Checkbox/></div>
                </TableRowColumn>
                <TableRowColumn><DateComponent date={this.props.task.createdAt}/></TableRowColumn>
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

