import { configureStore } from "@reduxjs/toolkit";
import practiceSetCartReducer from '../redux-slice/PracticeSetCartSlice'
import practiceSetReducer from '../redux-slice/PracticeSetSlice';

export const store = configureStore({
    reducer:{
        practiceSetCart:practiceSetCartReducer,
        practiceSet: practiceSetReducer
    }
})