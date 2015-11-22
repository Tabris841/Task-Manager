"use strict";

var React = require('react');
var TaskFrame = require('./taskFrame');
var ListActions = require('../actions/listActions');
var Modal = require('./modal');
var TaskActions =require('../actions/taskActions');
import mui from 'material-ui';

var {AppBar, IconButton, RaisedButton, FontIcon} = mui;

var ListFrame = React.createClass({
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

    open(name, id) {
        this.setState({
            showModal: true,
            value: name,
            id: id
        });
    },

    editList: function (list, e) {
        e.preventDefault();
        var listName = list.value;
        var listId = list.id;
        if (!listName) {
            return;
        }
        ListActions.editList({name: listName, id: listId});
        this.setState({showModal: false});
    },

    deleteList: function (list, e) {
        e.preventDefault();
        ListActions.deleteList({id: list});
    },

    createTask: function (e) {
        e.preventDefault();
        var form = e.target;
        var text = form.querySelector('[name="text"]').value.trim();
        var listId = form.name;
        if (!text) {
            return;
        }
        TaskActions.createTask({name: text, ListId: listId});
        form.querySelector('[name="text"]').value = '';
    },

    render: function () {
        var createList = function (list) {
            return (
                <div id="taskTable" key={list.id}>
                    <AppBar title={list.name}
                            iconElementLeft={
                                <IconButton iconClassName="material-icons" tooltipPosition="bottom-center"
                                                tooltip="List"><span className="white">date_range</span></IconButton>}
                            iconElementRight={
                                <div>
                                    <IconButton iconClassName="material-icons" tooltipPosition="bottom-center"
                                                onClick={this.open.bind(this, list.name, list.id)}
                                                tooltip="Edit"><span className="white">edit</span></IconButton>
                                    <IconButton iconClassName="material-icons" tooltipPosition="bottom-center"
                                                onClick={this.deleteList.bind(this, [list.name, list.id])}
                                                tooltip="Delete"><span className="white">delete</span></IconButton>
                                </div>}/>
                    <form id="taskNav" onSubmit={this.createTask} name={list.id}>
                        <FontIcon className="material-icons"><span className="plusIcon">loupe</span></FontIcon>
                        <input className="inputForm form-control"type="text" name="text" placeholder="Start typing here to create a task..."/>
                        <RaisedButton id="addTaskBtn" type="submit" label="Add task" secondary={true}/>
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
                <Modal showModal={this.state.showModal} close={this.close} value={this.state.value} id={this.state.id}
                       handleSubmit={this.editList}/>
            </div>
        )
    }
});

module.exports = ListFrame;


