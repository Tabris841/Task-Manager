var React = require('react');
var DatePicker = require('material-ui/lib/date-picker/date-picker');
var DatePickerDialog = require('material-ui/lib/date-picker/date-picker-dialog');

var DateComponent = React.createClass({
    getInitialState: function () {
        return {
            controlledDate: new Date(this.props.date)
        }
    },

    _handleChange: function (unused, date) {
        this.setState({
            controlledDate: date
        });
    },

    render: function () {
        return <DatePicker
            id="datePicker"
            value={this.state.controlledDate}
            onChange={this._handleChange}
            textFieldStyle={{width: '80px'}}
        />;
    }
});

module.exports = DateComponent;