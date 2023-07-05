import { configureStore } from "@reduxjs/toolkit";
import practiceSetCartReducer from '../redux-slice/PracticeSetCartSlice'
import practiceSetReducer from '../redux-slice/PracticeSetSlice';
import quizReducer from '../redux-slice/QuizSlice';

export const store = configureStore({
    reducer:{
        practiceSetCart:practiceSetCartReducer,
        practiceSet: practiceSetReducer,
        quiz:quizReducer
    }
})