import { createSlice} from "@reduxjs/toolkit";

export const modalsReducerSlice = createSlice({
    name: 'modals',
    initialState: {
        editModal: false,
        showTaskModal: false
    },
    reducers: {
        toggleEditModal(state, action) {
            state.editModal = !state.editModal
        },
        toggleShowTaskModal(state, action) {
            state.showTaskModal = !state.showTaskModal
        }
    }
})

export const { toggleEditModal, toggleShowTaskModal } = modalsReducerSlice.actions

export const editModal = state => state.modalsReducerSlice.editModal
export const showTaskModal = state => state.modalsReducerSlice.showTaskModal
export default modalsReducerSlice.reducer