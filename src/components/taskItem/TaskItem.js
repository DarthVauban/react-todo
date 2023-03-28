import './TaskItem.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function TaskItem(props) {
	const { id, title, description, deleteTask, showEditTaskModal, showTaskModal } = props

	const editButtonHandler = (event) => {
		event.stopPropagation()
		showEditTaskModal()
	}
	const deleteButtonHandler = (event) => {
		event.stopPropagation()
		deleteTask()
	}

	return (
		<Card className="card_body" style={{ width: '19rem' }} key={id} onClick={showTaskModal}>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text className="description">
					{description}
				</Card.Text>
				<div className="buttons">
					<Button className="edit" variant="primary" onClick={editButtonHandler}>Edit</Button>
					<Button variant="danger" onClick={deleteButtonHandler}>Delete</Button>
				</div>
			</Card.Body>
		</Card>
	)
}

export default TaskItem;
