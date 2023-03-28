import {configureStore} from "@reduxjs/toolkit";
import tasksReducerSlice from './tasksSlice'
import modalsReducerSlice from './modalsSlice'


export default configureStore({
    reducer: {
        tasks: tasksReducerSlice,
        modals: modalsReducerSlice
    }
})