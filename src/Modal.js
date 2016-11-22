import React from 'react';
require("../style/Modal.css");

var Modal = React.createClass({
  render: function() {
    if (this.props.isOpen == false)
      return null;

    return (
      <div className="modal-overlay">
        <div className="modal-content-wrapper">
          <span className="modal-close-btn"><span onClick={this.props.onClose} className="fa fa-times">X</span></span>
          <div className="modal-content">
            { this.props.children }
          </div>
        </div>
      </div>
    )
  } 
});

export default Modal;