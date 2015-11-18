"use strict";

var React = require('react');
var Modal = require("react-bootstrap/lib/Modal");
var Button = require("react-bootstrap/lib/Button");
var Input = require("react-bootstrap/lib/Input");

var Modals = React.createClass ({
    getInitialState: function () {
        return {
            value: ''
        }
    },

    componentWillReceiveProps: function (newProps) {
        this.setState({value: newProps.value})
    },

    setValueState: function (e) {
        this.setState({value: e.target.value})
    },

    render: function () {
        var data = {
            value: this.state.value,
            id: this.props.id
        };
        return (
            <Modal show={this.props.showModal} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input type="text" placeholder="Enter text" value={this.state.value} onChange={this.setValueState}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary"
                            onClick={this.props.handleSubmit.bind(null, data)}>Save</Button>
                    <Button onClick={this.props.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
});

module.exports = Modals;

