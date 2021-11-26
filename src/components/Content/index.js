import React from "react";
import { Table, Button, CloseButton, Modal, Col, Row, Form, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./Content.css";
const Content = (props) => {
    const { items, deleteItem, editRow, currentItem, updateItem, currentPage, pageSize } = props;
    // const [item, setItem] = React.useState();
    const [deleteId, setDeleteId] = useState();
    const [deleteModalShow, setdeleteModalShow] = React.useState(false);
    const [editModalShow, setEditModalShow] = React.useState(false);
    const handleDeleteItem = () => {
        setdeleteModalShow(false);
        deleteItem(deleteId);
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // setItem({ ...item, [name]: value });
    };
    let itemsArray = [];
    for (let i = (currentPage - 1) * pageSize; i < (currentPage - 1) * pageSize + pageSize; i++) {
        if (items[i] == null) {
            break;
        }
        itemsArray.push(items[i]);
    }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>brand</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {itemsArray.map((item, i) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>{item.brand}</td>
                        <td>{item.amount}</td>
                        <td>
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    setEditModalShow(true);
                                    editRow(item);
                                }}
                            >
                                Edit
                            </Button>{" "}
                            <EditModal
                                show={editModalShow}
                                onHide={() => setEditModalShow(false)}
                                item={item}
                                // handleInputChange={handleInputChange}
                                // setItem={setItem}
                                currentItem={currentItem}
                                updateItem={updateItem}
                            />
                        </td>
                        <td>
                            <CloseButton
                                onClick={() => {
                                    setdeleteModalShow(true);
                                    setDeleteId(item.id);
                                }}
                            />
                            <DeleteConfirmModal
                                show={deleteModalShow}
                                onHide={() => setdeleteModalShow(false)}
                                handleDeleteItem={handleDeleteItem}
                            />
                        </td>
                    </tr>
                ))}
                {/* <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr> */}
            </tbody>
        </Table>
    );
};

function DeleteConfirmModal(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Are you sure to delete this item?
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={props.handleDeleteItem}>Yes</Button>
                <Button onClick={props.onHide}>No</Button>
            </Modal.Footer>
        </Modal>
    );
}

function EditModal(props) {
    const [item, setItem] = useState(props.currentItem);

    useEffect(() => {
        setItem(props.currentItem);
    }, [props]);
    // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]
    const handleUpdate = () => {
        props.onHide();
        props.updateItem(item.id, item);
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setItem({ ...item, [name]: value });
    };
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
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
                                value={item.name}
                                onChange={handleInputChange}
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
                                name="description"
                                value={item.description}
                                onChange={handleInputChange}
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
                                value={item.price}
                                name="price"
                                onChange={handleInputChange}
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
                                value={item.brand}
                                onChange={handleInputChange}
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
                                value={item.amount}
                                onChange={handleInputChange}
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
                                value={item.imgUrl}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleUpdate}>Update</Button>

                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default Content;
