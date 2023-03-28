import React, { useState, useEffect } from "react";
import CreateTask from "./components/createTask/CreateTask";
import TaskList from "./components/taskList/TaskList";
import EditTaskModal from "./components/modals/EditTaskModal";
import TaskModal from "./components/modals/TaskModal";
import { useDispatch, useSelector } from "react-redux";
import { add, deleteTask, edit, initial } from "./store/tasksSlice";
import {toggleEditModal, toggleShowTaskModal} from "./store/modalsSlice"
import './App.css'

function App() {

	const dispatch = useDispatch()
	const { tasks } = useSelector(state => state.tasks)
	const { editModal } = useSelector(state => state.modals)

	const [titleValue, setTitleValue] = useState('')
	const [descriptionValue, setDescriptionValue] = useState('')

	const [currentTask, setCurrentTask] = useState(null);

	const handleShowEditModal = (task) => {
		setCurrentTask(task)
		dispatch(toggleEditModal())
	};

	//Show task modal
	const handleTaskModal = (task) => {
		dispatch(toggleShowTaskModal())
		setCurrentTask(task)
	};

	const addTask = (title, description) => {
		dispatch(add({ title, description }))
		setTitleValue('');
		setDescriptionValue('');
	}

	const deleteTaskHandler = (id) => {
		dispatch(deleteTask(id))
	}

	const editTask = (id, newTitle, newDescription) => {
		dispatch(edit({ id, newTitle, newDescription }))
	};

	useEffect(() => {
		const storedTasks = JSON.parse(localStorage.getItem('tasks'));
		if (storedTasks?.length) {
			dispatch(initial(storedTasks))
		}
	}, []);

	return (
		<>
			<CreateTask
				titleValue={titleValue}
				descriptionValue={descriptionValue}
				setTitleValue={setTitleValue}
				setDescriptionValue={setDescriptionValue}
				onSubmit={() => addTask(titleValue, descriptionValue)}
			/>
			<div className="container">

				{tasks.length ? <TaskList
					tasks={tasks}
					onSubmitDelete={deleteTaskHandler}
					onSubmitShowEditModal={handleShowEditModal}
					onSubmitTaskModal={handleTaskModal}
				/> : ''}

				{editModal && <EditTaskModal
					submitEdit={editTask}
					task={currentTask}
				/>}

				<TaskModal
					task={currentTask}
					onSubmitShowEditModal={handleShowEditModal}
				/>
			</div>
		</>
	);
}

export default App;
