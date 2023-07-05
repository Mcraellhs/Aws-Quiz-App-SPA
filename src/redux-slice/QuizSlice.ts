import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quizService } from "../services/QuizService";
import { QuizSubmitData } from "../models/QuizSubmitData";

const defaultValue:{
    data:QuizSubmitData[]
}={
    data:[]
}

export const submitQuiz=createAsyncThunk(
    'quiz/submit',
    async(data:QuizSubmitData[])=>{
        const response = await quizService.submitQuiz(data)
        return response.data;
    }
)

const quizSlice=createSlice({
    name:'quiz-slice',
    initialState:defaultValue,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(submitQuiz.fulfilled,(state,action)=>{
            state.data=[...action.payload]
        })
    },
})


export default quizSlice.reducer