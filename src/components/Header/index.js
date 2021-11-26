import React from "react";
import { ButtonGroup, Button, Modal, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
const Header = (props) => {
    const { handleAddItem } = props;
    const [modalShow, setModalShow] = React.useState(false);
    const initialItem = {
        id: null,
        name: "",
        description: "",
        price: null,
        brand: "",
        amount: null,
        imgUrl: "",
    };
    const [item, setItem] = useState(initialItem);
    const handleAddButton = () => {
        handleAddItem(item);
        setItem(initialItem);
        setModalShow(false);
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setItem({ ...item, [name]: value });
    };
    return (
        <div>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Add
            </Button>{" "}
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                handleAddButton={handleAddButton}
                handleInputChange={handleInputChange}
                item={item}
            />
        </div>
    );
};

function MyVerticallyCenteredModal(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Add Item</Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type=""
                                placeholder=""
                                name="name"
                                value={props.item.name}
                                onChange={props.handleInputChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Description
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type=""
                                placeholder=""
                                onChange={props.handleInputChange}
                                name="description"
                                value={props.item.description}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Price
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type=""
                                placeholder=""
                                name="price"
                                value={props.item.price}
                                onChange={props.handleInputChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Brand
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type=""
                                placeholder=""
                                name="brand"
                                value={props.item.brand}
                                onChange={props.handleInputChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Amount
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type=""
                                placeholder=""
                                name="amount"
                                value={props.item.amount}
                                onChange={props.handleInputChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Image Url
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type=""
                                placeholder=""
                                name="imgUrl"
                                value={props.item.imgUrl}
                                onChange={props.handleInputChange}
                            />
                        </Col>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={props.handleAddButton}>Add</Button>

                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default Header;
