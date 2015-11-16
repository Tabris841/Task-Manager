"use strict";

var React = require('react');

var ModalList = React.createClass({
    render: function () {
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
                            <input type="text" className="form-control" placeholder="Enter List name..." />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onclick={this.props.postList(this.props.name)}>Save
                            </button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = ModalList;