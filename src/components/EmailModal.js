// import React, { useState } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const EmailModal = (props) => {
//     const {
//         buttonLabel,
//         className
//     } = props;

//     const [modal, setModal] = useState(false);
//     const [nestedModal, setNestedModal] = useState(false);
//     const [closeAll, setCloseAll] = useState(false);

//     const toggle = () => setModal(!modal);
//     const toggleNested = () => {
//         setNestedModal(!nestedModal);
//         setCloseAll(false);
//     }
//     const toggleAll = () => {
//         setNestedModal(!nestedModal);
//         setCloseAll(true);
//     }

//     return (
//         <div style={{ position: "absolute", zIndex: "100000" }}>
//             <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
//             <Modal isOpen={modal} toggle={toggle} className={className}>
//                 <ModalHeader toggle={toggle}>Modal title</ModalHeader>
//                 <ModalBody>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//           <br />
//                     <Button color="success" onClick={toggleNested}>Show Nested Modal</Button>
//                     <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
//                         <ModalHeader>Nested Modal title</ModalHeader>
//                         <ModalBody>Stuff and things</ModalBody>
//                         <ModalFooter>
//                             <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
//                             <Button color="secondary" onClick={toggleAll}>All Done</Button>
//                         </ModalFooter>
//                     </Modal>
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
//                     <Button color="secondary" onClick={toggle}>Cancel</Button>
//                 </ModalFooter>
//             </Modal>
//         </div>
//     );
// }

// export default EmailModal;





// ...........................................

import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
// Get Validation from PropTypes
import PropTypes from 'prop-types';


class EmailModal extends Component {
    state = {
        modal: false,
        email: '',
        message: '',
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal })
    }

    onChange = (e) => {
        // this is basically saying the prop name will be placed in state with the tag's value
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        const newItem = {
            name: this.state.name,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            description: this.state.description,
            priority: this.state.priority
        }

        // Close the Modal by invoking toggle
        this.toggle();
    }
    render() {
        return (
            <div style={{ zIndex: "100000" }}>
                <Button
                    color="success"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >
                    {/* Send an Email */}
                    {this.props.children}
                </Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader style={{ backgroundColor: "#33B8FF" }} toggle={this.toggle}>Email Paul</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item"><u>Email</u></Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="item"
                                    placeholder="YourEmail@here.com"
                                    onChange={this.onChange}
                                    style={{ marginBottom: "1.5rem" }} />
                                <Label for="description"><u>Message</u></Label>
                                <Input
                                    type="textarea"
                                    name="message"
                                    id="description"
                                    placeholder="Add your message"
                                    onChange={this.onChange}
                                    style={{ marginBottom: "1.5rem" }} />

                                <br />

                                <Button
                                    color="primary"
                                    style={{ marginTop: '2rem' }}
                                    block>
                                    Submit Message to Paul
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div >
        )
    }
}



export default EmailModal;