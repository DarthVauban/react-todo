import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './CreateTask.css'

function CreateTask(props) {
	const { titleValue, descriptionValue, setTitleValue, setDescriptionValue, onSubmit } = props

	const handleTitleChange = (event) => {
		setTitleValue(event.target.value)
	}

	const handleDescriptionChange = (event) => {
		setDescriptionValue(event.target.value)
	}

	const addTaskValues = (event) => {
		event.preventDefault()
		onSubmit()
	}

	return (
		<div className="container">
			<InputGroup className="mb-3">
				<InputGroup.Text>Enter task title and description</InputGroup.Text>
				<Form.Control
					value={titleValue}
					aria-label="title"
					placeholder="Title"
					onChange={handleTitleChange}
				/>
				<Form.Control
					value={descriptionValue}
					aria-label="description"
					placeholder="Description"
					onChange={handleDescriptionChange}
				/>
				<Button variant="primary" onClick={addTaskValues}>Add task</Button>
			</InputGroup>
		</div>
	)
}


export default CreateTask;