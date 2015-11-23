"use strict";

var React = require('react');
import mui from 'material-ui';
var {Dialog, FlatButton, TextField} = mui;

var Modals = React.createClass ({
    propTypes: {
        showModal: React.PropTypes.bool.isRequired,
        close: React.PropTypes.func.isRequired,
        value: React.PropTypes.string.isRequired,
        handleSubmit: React.PropTypes.func.isRequired
    },

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
        var customActions = [
            <FlatButton
                key={1}
                label="Cancel"
                secondary={true}
                onTouchTap={this.props.close}/>,
            <FlatButton
                key={2}
                label="Submit"
                primary={true}
                onTouchTap={this.props.handleSubmit.bind(null, data)}/>
        ];
        return (
            <Dialog
                title="Dialog"
                actions={customActions}
                actionFocus="submit"
                open={this.props.showModal}
                onRequestClose={this.props.close}>
                <TextField type="textarea" hintText="Enter text" value={this.state.value} onChange={this.setValueState}
                           style={{width: '100%'}} multiLine={true}/>
            </Dialog>

        )
    }
});

module.exports = Modals;

