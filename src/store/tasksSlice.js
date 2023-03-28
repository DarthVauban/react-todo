import { createSlice } from "@reduxjs/toolkit";
import { current } from 'immer';

export const tasksReducerSlice = createSlice({
	name: 'tasks',
	initialState: {
		tasks: [],
		taskItem: {}
	},
	reducers: {
		add(state, action) {
			const { title, description } = action.payload

			if (!title.length || !description.length) {
				alert('error')
				return
			}

			let taskItem = {
				id: Date.now(),
				title,
				description,
			}

			state.tasks.push(taskItem)
			localStorage.setItem('tasks', JSON.stringify(state.tasks));
		},

		deleteTask(state, action) {
			state.tasks = state.tasks.filter(item => item.id !== action.payload)
			localStorage.setItem('tasks', JSON.stringify(state.tasks));
		},

		edit(state, action) {
			const { id, newTitle, newDescription } = action.payload

			state.tasks = state.tasks.map((item) => {
				console.log(id, newTitle, newDescription)
				if (item.id === id) {
					let oldTitle = newTitle.length ? newTitle : item.title;
					let oldDescription = newDescription.length
						? newDescription
						: item.description;
					return { ...item, title: oldTitle, description: oldDescription };
				}
				return item;
			});
			
			localStorage.setItem('tasks', JSON.stringify(state.tasks));
		},
		
		initial(state, action) {
			state.tasks = action.payload
		}
	}
})

export const { deleteTask, add, edit, initial } = tasksReducerSlice.actions

export const tasks = state => state.tasksReducerSlice.tasks
export const taskItem = state => state.tasksReducerSlice.taskItem

export default tasksReducerSlice.reducer