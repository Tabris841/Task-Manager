"use strict";

var React = require('react');
var TaskFrame = require('./taskFrame');

var ListFrame = React.createClass({
    getInitialState: function () {
        return {
            value: ''
        };
    },

    handleSubmit: function (e) {
        e.preventDefault();
        var form = e.target;
        var text = form.querySelector('[name="text"]').value.trim();
        var listId = form.name;
        if (!text) {
            return;
        }
        this.props.onTaskSubmit({name: text, ListId: listId});
        form.querySelector('[name="text"]').value = '';
        return;
    },

    render: function () {
        var createList = function (list) {
            return (
                <div id="taskTable" key={list.id}>
                    <div id="taskHeader">
                        <span className="glyphicon glyphicon-calendar"></span>
                        <h4>{list.name}</h4>
                        <span className="glyphicon glyphicon-trash pull-right"></span>
                        &nbsp;&nbsp;
                        <span className="glyphicon glyphicon-pencil pull-right"></span>
                    </div>
                    <form id="taskNav" onSubmit={this.handleSubmit} name={list.id}>
                        <span className="glyphicon glyphicon-plus"></span>

                        <div className="input-group">
                            <input type="text" className="form-control" name="text"
                                   placeholder="Start typing here to create a task..."/>
                            <span className="input-group-btn">
                                <input type="submit" className="btn btn-success" value="Add task"/>
                            </span>
                        </div>
                    </form>
                    <div>
                        <TaskFrame task={this.props.task} list={list.id}/>
                    </div>
                </div>
            )
        };
        return (
            <div>
                {this.props.list.map(createList, this)}
            </div>
        )
    }
});

module.exports = ListFrame;
