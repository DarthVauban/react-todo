import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {useDispatch, useSelector} from "react-redux";
import {toggleEditModal} from "../../store/modalsSlice";

function EditTaskModal(props) {
	const {
		submitEdit,
		task,
	} = props;
	const {editModal} = useSelector(state => state.modals)
	const dispatch = useDispatch()
	const [editTitleValue, setEditTitleValue] = useState('')
	const [editDescriptionValue, setEditDescriptionValue] = useState('')

	useEffect(() => {
		if (task?.title && task?.description) {
			setEditTitleValue(task.title)
			setEditDescriptionValue(task.description)
		}
	}, [task])

	const handleClose = () => {
		setEditTitleValue("");
		setEditDescriptionValue("");
		dispatch(toggleEditModal())
	};

	const handleEditTitleChange = (event) => {
		setEditTitleValue(event.target.value);
	};

	const handleEditDescriptionChange = (event) => {
		setEditDescriptionValue(event.target.value);
	};

	const handleEditSubmit = (event) => {
		event.preventDefault();
		submitEdit(task.id, editTitleValue, editDescriptionValue);
		handleClose();
	};
	return (
		<>
			<Modal show={editModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Edit task</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Task title</Form.Label>
							<Form.Control
								type="text"
								placeholder="Task title"
								autoFocus
								value={editTitleValue}
								onChange={handleEditTitleChange}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
							<Form.Label>Task description</Form.Label>
							<Form.Control
								as="textarea"
								value={editDescriptionValue}
								placeholder="Task description"
								onChange={handleEditDescriptionChange}
							/>
						</Form.Group>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
							<Button variant="primary" onClick={handleEditSubmit}>
								Save Changes
							</Button>
						</Modal.Footer>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default EditTaskModal;
