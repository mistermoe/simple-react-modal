import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../src/Modal.js';

var App = React.createClass({
  getInitialState: function() {
    return {
      modalIsOpen: false
    }
  },
  toggleModal: function() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    })
  },
  render: function() {
    return (
      <div>
        <button onClick={this.toggleModal}>open modal</button>

        <Modal isOpen={this.state.modalIsOpen} onClose={this.toggleModal}>
          <h1>A Modal</h1>
          <p>This is cool</p>
        </Modal>
      </div>
    )
  }
});


ReactDOM.render(<App />, document.getElementById("root"));