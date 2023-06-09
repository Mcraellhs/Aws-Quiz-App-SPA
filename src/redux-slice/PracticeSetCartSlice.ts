import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {QuestionForQuiz} from '../models/QuestionForQuizDTO'
import { practiceService } from "../services/PracticeSetService";
import { PracticeSetToCreateDTO } from "../models/PracticeSetToCreateDTO";

type PracticeSetCart={
    title:string,
    question:QuestionForQuiz[],
    difficulty:string
}

const defaultCartState:PracticeSetCart={
    title:"",
    question:[],
    difficulty:""
};

export const createPracticeSet=createAsyncThunk(
    '/dashboard/practice-set/create',
    async(data:PracticeSetToCreateDTO)=>{
        const response= await practiceService.createPractice(data)
        console.log(response);
        return response;
    }
)

const practiceSetCartSlice=createSlice({
    name:'practice-set-cart',
    initialState:defaultCartState,
    reducers:{
        addToPracticeSetCart:(state,action)=>{
            const questionExists=state.question.find(x=>x.id===action.payload.id)
            if(!questionExists){
                state.question.push(action.payload);
            }
        },
        closePracticeSetCart: () => defaultCartState,
    },
    extraReducers(builder) {
        builder.addCase(createPracticeSet.fulfilled,(state,action)=>{
            
        })
    },
})



export const {addToPracticeSetCart,closePracticeSetCart} = practiceSetCartSlice.actions

export default practiceSetCartSlice.reducer;