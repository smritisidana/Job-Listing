import React from 'react';
import ReactDOM from 'react-dom';

export class Modal extends React.Component {
    render() {
        return <useModal/>;
    }
  }

// const Modals = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
//   <React.Fragment>
//     <div className="modal-overlay"/>
//     <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
//       <div className="modal">
//         <div className="modal-header">
//           <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <p>
//           Hello, I'm a modal.
//         </p>
//       </div>
//     </div>
//   </React.Fragment>, document.body
// ) : null;

// export default Modals;


// import React from 'react';
// import PropTypes from 'prop-types';

// class Modal extends React.Component {
//   render() {
//     // Render nothing if the "show" prop is false
//     if(!this.props.show) {
//       return null;
//     }

//     // The gray background
//     const backdropStyle = {
//       position: 'fixed',
//       top: 0,
//       bottom: 0,
//       left: 0,
//       right: 0,
//       backgroundColor: 'rgba(0,0,0,0.3)',
//       padding: 50
//     };

//     // The modal "window"
//     const modalStyle = {
//       backgroundColor: '#fff',
//       borderRadius: 5,
//       maxWidth: 500,
//       minHeight: 300,
//       margin: '0 auto',
//       padding: 30
//     };

//     return (
//       <div className="backdrop" style={backdropStyle}>
//         <div className="modal" style={modalStyle}>
//           {this.props.children}

//           <div className="footer">
//             <button onClick={this.props.onClose}>
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   show: PropTypes.bool,
//   children: PropTypes.node
// };

// export default Modal;

// import React from 'react';

// import './modal.css';

// const modal = (props) => {
//     return (
//         <div>
//             <div className="modal-wrapper"
//                 style={{
//                     transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
//                     opacity: props.show ? '1' : '0'
//                 }}>
//                 <div className="modal-header">
//                     <h3>Modal Header</h3>
//                     <span className="close-modal-btn" onClick={props.close}>×</span>
//                 </div>
//                 <div className="modal-body">
//                     <p>
//                         {props.children}
//                     </p>
//                 </div>
//                 <div className="modal-footer">
//                     <button className="btn-cancel" onClick={props.close}>CLOSE</button>
//                     <button className="btn-continue">CONTINUE</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default modal;
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// // import Modal from 'react-bootstrap/Modal'

// // function Example() {
// //     const [show, setShow] = useState(false);
  
// //     const handleClose = () => setShow(false);
// //     const handleShow = () => setShow(true);
  
// //     return (
// //       <>
// //         <Button variant="primary" onClick={handleShow}>
// //           Launch demo modal
// //         </Button>
  
// //         <Modal show={show} onHide={handleClose}>
// //           <Modal.Header closeButton>
// //             <Modal.Title>Modal heading</Modal.Title>
// //           </Modal.Header>
// //           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
// //           <Modal.Footer>
// //             <Button variant="secondary" onClick={handleClose}>
// //               Close
// //             </Button>
// //             <Button variant="primary" onClick={handleClose}>
// //               Save Changes
// //             </Button>
// //           </Modal.Footer>
// //         </Modal>
// //       </>
// //     );
// //   }
  
// //   render(<Example />);
// //   export default Example;

// var Modal = require('react-bootstrap-modal')
 
// export class ModalExample extends React.Component {
 
//   render(){
//     let closeModal = () => this.setState({ open: false })
 
//     let saveAndClose = () => {
//        this.setState({ open: false })
//     }
 
//     return (
//       <div>
//         <button type='button'>Launch modal</button>
 
//         <Modal
//           show={this.state.open}
//           onHide={closeModal}
//           aria-labelledby="ModalHeader"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <p>Some Content here</p>
//           </Modal.Body>
//           <Modal.Footer>
//             // If you don't have anything fancy to do you can use
//             // the convenient `Dismiss` component, it will
//             // trigger `onHide` when clicked
//             <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
 
//             // Or you can create your own dismiss buttons
//             <button className='btn btn-primary' onClick={saveAndClose}>
//               Save
//             </button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     )
//   }
// }
 
// // ReactDOM.render(<ModalExample />, document.body);
