import TaskItem from "../taskItem/TaskItem";

function TaskList(props) {
	const { tasks, onSubmitDelete, onSubmitTaskModal, onSubmitShowEditModal } = props;

	const deleteTaskHandler = (id) => {
		onSubmitDelete(id);
	};

	return (
		<>
			{tasks.map((task) => (
				<TaskItem
					key={task.id}
					title={task.title}
					description={task.description}
					deleteTask={() => deleteTaskHandler(task.id)}
					showEditTaskModal={() => onSubmitShowEditModal(task)}
					showTaskModal={() => onSubmitTaskModal(task)}
				/>
			))}
		</>
	);
}

export default TaskList;
