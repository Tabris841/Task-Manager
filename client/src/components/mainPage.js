"use strict";

var React = require('react');
var LisFrame = require('./listFrame');
var ModalList = require('./modalList');

var MainPage = React.createClass({
    render: function () {
        return (
            <div>
                < LisFrame />
                <button type="button" className="btn btn-primary" id="toDoBtn" data-toggle="modal"
                        data-target="#addListModal">
                    <span className="glyphicon glyphicon-plus"></span>
                    &nbsp;&nbsp;
                    Add TODO List
                </button>

                <ModalList />
            </div>
        )
    }
});

module.exports = MainPage;
