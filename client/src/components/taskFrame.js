"use strict";

var React = require('react');

var TaskFrame = React.createClass({
    propTypes: {
        task: React.PropTypes.array.isRequired,
        list: React.PropTypes.number.isRequired
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
                        <span className="glyphicon glyphicon-pencil"></span>
                        <span className="glyphicon glyphicon-trash"></span>
                    </td>
                </tr>
                </tbody>
            )
        };
        return (
            <table className="table table-hover">
                {this.props.task.filter(function (obj) {
                    return obj.ListId === listId
                }).map(createTask, this)}
            </table>
        )
    }
});

module.exports = TaskFrame;