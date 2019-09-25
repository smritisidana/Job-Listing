import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Modal} from 'react-bootstrap';
// import useModal from './useModal';
import Modals from './Modal';
import { Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

var res = require('./byjus-data.json');

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    // constructor(props) {
    //     super(props);
    
    //     this.state = { isOpen: false };
    //   }
    
    //   toggleModal = () => {
    //     this.setState({
    //       isOpen: !this.state.isOpen
    //     });
    //   }
    // constructor() {
    //     super();
    //     this.state = {
    //         isShowing: false
    //     }
    // }
    // openModalHandler = () => {
    //     this.setState({
    //         isShowing: true
    //     });
    // }
    // closeModalHandler = () => {
    //     this.setState({
    //         isShowing: false
    //     });
    // }

       render() {  
        return(
            
        //     <main>
        //         <Modal show={this.state.show} handleClose={this.hideModal} >
        //   <p>Modal</p>
        //   <p>Data</p>
        // </Modal>
            <React.Fragment>
                <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
            {/* //     <Modal modalProps={this.modalProps} />
            //     <useModal triggerText={this.props.modalProps.triggerText} />
        /* <ModalContent /> */
                /* <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
                <Modal
                
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                        Maybe aircrafts fly very high because they don't want to be seen in plane sight?
                </Modal>
                
            </div> */
            /* <div className="App">
        <button onClick={this.toggleModal}>
          Open the modal
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>
      </div> */
      
                /* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal> */ }
        
                <div >
                    <table class="table table-hover table-xsm">
                        <thead>
                            <tr className="text-center">
                                <th>Title</th>
                                <th>Company Name</th>
                                <th>Location</th>
                                <th></th>
                        {/* <th>Experience</th>
                        <th>Salary</th>
                        <th>Type</th>
                        <th>Skills</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Created</th>
                        <th>Source</th>
                        <th>Time Stamp</th>
                        <th>Description</th>
                        <th>Link</th> */}
                            </tr>
                        </thead>
                        <tbody>
                        {
                            res.data.map((data,i) => (
                                //<div key={res.data[i].id} align="start">
                                <tr className="text-center">
                                    <td>{res.data[i].title}</td>
                                    <td>{res.data[i].companyname}</td>
                                    <td>{res.data[i].location}</td>
                                    <td><button name="details" type="button" className="btn btn-info" onClick={this.openModalHandler}>Details</button></td>
                                        {/* <td>{res.data[i].experience}</td>
                                        <td>{res.data[i].salary}</td>
                                        <td>{res.data[i].type}</td>
                                        <td>{res.data[i].skills}</td>
                                        <td>{res.data[i].startdate}</td>
                                        <td>{res.data[i].enddate}</td>
                                        <td>{res.data[i].created}</td>
                                        <td>{res.data[i].source}</td>
                                        <td>{res.data[i].timestamp}</td> 
                                        <td>{res.data[i].jd}</td>
                                        <td><button name="apply" type="button" className="btn btn-success" >Apply</button></td> */}
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
            // </main>

          )
       }
}

// const Modal = ({ handleClose, show, children }) => {
//     const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
//     return (
//       <div className={showHideClassName}>
//         <section className='modal-main'>
//           {children}
//           <button
//             onClick={handleClose}
//           >
//             Close
//           </button>
//         </section>
//       </div>
//     );
//   };
//   document.body.appendChild(container);
//   ReactDOM.render(<App />, container);