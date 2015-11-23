"use strict";

var React = require('react');
var LisFrame = require('./listFrame');
var Modal = require('./modal');
var ListActions = require('../actions/listActions');
var ListStore = require('../stores/listStore');
var TaskStore = require('../stores/taskStore');
import mui from 'material-ui';
var {RaisedButton} = mui;

var MainPage = React.createClass({
    getInitialState: function () {
        return {
            list: ListStore.getAllLists(),
            task: TaskStore.getAllTasks(),
            showModal: false,
            value: ''
        };
    },

    componentDidMount: function () {
        ListStore.addChangeListener(this._onChange);
        TaskStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        ListStore.removeChangeListener(this._onChange);
        TaskStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({list: ListStore.getAllLists(), task: TaskStore.getAllTasks()});
    },

    close() {
        this.setState({showModal: false});
    },

    open() {
        this.setState({showModal: true});
    },

    createList: function (list, e) {
        e.preventDefault();
        var listName = list.value;
        if (!list) {
            return;
        }
        ListActions.createList({name: listName});
        this.setState({showModal: false});
    },

    render: function () {
        return (
            <div>
                <LisFrame list={this.state.list} task={this.state.task}/>
                <div id="toDoBtn">
                    <RaisedButton id="toDoBtn" label="Add TODO List"
                                  onTouchTap={this.open}/>
                </div>
                <Modal showModal={this.state.showModal} close={this.close} value={this.state.value}
                       handleSubmit={this.createList}/>
            </div>
        )
    }
});

module.exports = MainPage;
