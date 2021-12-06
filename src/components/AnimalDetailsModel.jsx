import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap"
import { useContext } from "react";
import { Context } from "../store";

const AnimalDetailsModel = ({ show, onClose }) => {
    const [state, dispatch] = useContext(Context);

    return (

        <Modal show={show} onHide={() => onClose()}>
            <Modal.Header closeButton>
                <Modal.Title>Animal Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {state.selectedItem ? <div>
                    <img width="100px" src={state.selectedItem.imageURL} /><br />
                    <label><b>Common Name: </b>{state.selectedItem.commonName}</label><br />
                    <label><b>Scientific Name: </b>{state.selectedItem.scientificName}</label><br />
                    <label><b>Family: </b>{state.selectedItem.family}</label><br />
                </div> : <label>loading...</label>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => onClose()}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AnimalDetailsModel;