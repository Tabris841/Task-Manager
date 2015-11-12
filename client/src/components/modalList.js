"use strict";

var React = require('react');
var ListApi = require('../api/listApi');

var ModalList = React.createClass({
    getInitialState: function() {
        return {
            name: ''
        };
    },
    setListState: function(event) {
        return this.setState({name: event.target.value})
    },

    clearField: function(input, val) {
        if(input.value == val)
            input.value="";
    },

    render: function () {
        var saveList = function (list) {
            ListApi.saveList(list);
        };

        return (
            <div className="modal fade" id="addListModal" data-tabindex="-1" role="dialog"
                 aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">List title</h4>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control" value={this.state.name} onChange={this.setListState}
                                   placeholder="Enter List name..." />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onclick={saveList(this.state.name)}>Save
                            </button>
                            <button type="button" className="btn btn-default" data-dismiss="modal" onclick={this.getInitialState()}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = ModalList;