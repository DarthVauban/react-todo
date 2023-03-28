import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch, useSelector} from "react-redux";
import {toggleEditModal, toggleShowTaskModal} from "../../store/modalsSlice";

function TaskModal(props) {
	const { onSubmitShowEditModal, task } = props
	const {showTaskModal} = useSelector(state => state.modals)
	const dispatch = useDispatch()

	const closeModal = () => {
		dispatch(toggleShowTaskModal())
	}

	const editShow = () => {
		onSubmitShowEditModal(task);
		closeModal()
	};


	return (
		<>
			<Modal show={showTaskModal} onHide={closeModal} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>{task?.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{task?.description}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={closeModal}>
						Close
					</Button>
					<Button variant="primary" onClick={editShow}>
						Edit task
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default TaskModal