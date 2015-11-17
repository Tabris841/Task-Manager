"use strict";

var React = require('react');
var TaskFrame = require('./taskFrame');
var Modal = require('./modal');

var ListFrame = React.createClass({
    getInitialState: function () {
        return {
            value: "",
            showModal: false
        };
    },

    close() {
        this.setState({showModal: false});
    },

    open(list) {
        this.setState({
            showModal: true,
            value: list
        });
    },

    editList: function (list, e) {
        e.preventDefault();
        var listName = list;
        if (!listName) {
            return;
        }
        this.props.onTaskSubmit({name: listName});
    },

    createTask: function (e) {
        e.preventDefault();
        var form = e.target;
        var text = form.querySelector('[name="text"]').value.trim();
        var listId = form.name;
        if (!text) {
            return;
        }
        this.props.onTaskSubmit({name: text, ListId: listId});
        form.querySelector('[name="text"]').value = '';
    },

    deleteList: function (list, e) {
        e.preventDefault();
        this.props.onDeleteList({id: list});
    },

    render: function () {
        var createList = function (list) {
            return (
                <div id="taskTable" key={list.id}>
                    <div id="taskHeader">
                        <span className="glyphicon glyphicon-calendar"></span>
                        <h4>{list.name}</h4>
                        <button className="pull-right" onClick={this.deleteList.bind(this,list.id)}>
                            <span className="glyphicon glyphicon-trash"></span>
                        </button>
                        &nbsp;&nbsp;
                        <button className="pull-right" onClick={this.open.bind(this, list.name)}>
                            <span className="glyphicon glyphicon-pencil"></span>
                        </button>
                    </div>
                    <form id="taskNav" onSubmit={this.createTask} name={list.id}>
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
                        <TaskFrame task={this.props.task} list={list.id} onDeleteTask={this.props.onDeleteTask}/>
                    </div>
                </div>
            )
        };
        return (
            <div>
                {this.props.list.map(createList, this)}
                <Modal showModal={this.state.showModal} close={this.close} value={this.state.value}
                       handleSubmit={this.editList}/>
            </div>
        )
    }
});

module.exports = ListFrame;
