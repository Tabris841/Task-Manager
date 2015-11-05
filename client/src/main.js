"use strict";

var React = require('react');

var TaskFrame = React.createClass({
    render: function () {
        return (
            <div id="taskTable">
                <div id="taskHeader">
                    <span className="glyphicon glyphicon-calendar"></span>
                    <h4>Test Header</h4>
                    <span className="glyphicon glyphicon-trash pull-right"></span>
                    &nbsp;&nbsp;
                    <span className="glyphicon glyphicon-pencil pull-right"></span>
                </div>
                <div id="taskNav">
                    <span className="glyphicon glyphicon-plus"></span>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Start typing here to create a task..."/>
                    <span className="input-group-btn">
                        <button className="btn btn-success">Add Task</button>
                    </span>
                    </div>
                </div>
                <div>
                    <table className="table table-hover">
                        <tr>
                            <td className="col-md-1">
                                <input type="checkbox" className="checkbox" />
                            </td>
                            <td className="col-md-9">Test Dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</td>
                            <td className="col-md-2">
                                <span className="glyphicon glyphicon-pencil"></span>
                                <span className="glyphicon glyphicon-trash"></span>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-md-1">
                                <input type="checkbox" className="checkbox" />
                            </td>
                            <td className="col-md-9">Test Data</td>
                            <td className="col-md-2">
                                <span className="glyphicon glyphicon-pencil"></span>
                                <span className="glyphicon glyphicon-trash"></span>
                            </td>
                        </tr>
                    </table>
                </div>
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