var React = require('react');
var DatePicker = require('material-ui/lib/date-picker/date-picker');

var DateComponent = React.createClass({
    propTypes: {
        date: React.PropTypes.string.isRequired,
        dateChanged: React.PropTypes.func.isRequired
    },

    getInitialState: function () {
        return {
            controlledDate: new Date(this.props.date),
            minDate: new Date()
        }
    },

    _handleChange: function (unused, date) {
        this.setState({
            controlledDate: date
        });
        this.props.dateChanged(date);
    },

    render: function () {
        return <DatePicker
            id="datePicker"
            minDate={this.state.minDate}
            value={this.state.controlledDate}
            onChange={this._handleChange}
            textFieldStyle={{width: '80px'}}
        />;
    }
});

module.exports = DateComponent;