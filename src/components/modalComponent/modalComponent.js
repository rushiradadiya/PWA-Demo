import React from 'react';
import {Image, Modal} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import "./modalComponent.css"

const ModalComponent = (props) => {
    return (
        <Modal open={props.open} closeIcon onClose={props.onClick}>
            <Modal.Header>Personal Information</Modal.Header>
            <Modal.Content image>
                <Image wrapped size='medium' src={props.data.image}/>
                <Modal.Description>
                    <p><span>Name: </span>
                        <label> {props.data.name}</label></p>
                    <p><span>Email: </span>
                        <label>{props.data.email}</label></p>
                    <p><span>Age: </span>
                        <label> {props.data.age}</label></p>
                    <p><span>Phone: </span>
                        <label>{props.data.phone}</label></p>
                    <p><span>Address: </span>
                        <label>{props.data.address}</label></p>
                </Modal.Description>
            </Modal.Content>

        </Modal>

    )
}
export default ModalComponent
