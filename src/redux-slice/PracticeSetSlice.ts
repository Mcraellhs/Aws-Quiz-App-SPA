import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PracticeSetDTO } from "../models/PracticeSetDTO";
import { practiceService } from "../services/PracticeSetService";


export const getPracticeSets = createAsyncThunk(
  '/dashboard/practice-set',
  async()=>{
    const response = await practiceService.getPracticeSets();
    return response.data;
  }
)

export const getPracticeSetById = createAsyncThunk(
  '/dashboard/practice-set/edit',
  async(id:string)=>{
    const response = await practiceService.getPracticeSetById(id);
    return response.data;
  }
)

export const updatePracticeSet=createAsyncThunk(
  '/dashboard/practice-set/edit/save',
  async(data:{practiceSet:PracticeSetDTO,id:string})=>{
    const response = await practiceService.updatePracticeSet(data.practiceSet,data.id);
    return response.data;
  }
)

type PracticeSetSliceDefault={
  practiceSets:PracticeSetDTO[],
  singleSet:PracticeSetDTO,
  isEdit:boolean;
}

const defaultPracticeValue: PracticeSetSliceDefault = {
  practiceSets:[],
  singleSet:{
    id:"",
    title:"",
    questions:[],
    difficulty:""
  },
  isEdit:false
  
}

const practiceSetSlice = createSlice({
  name: 'practice-set',
  initialState: defaultPracticeValue,
  reducers: {
    addQuestionToSingleSet:((state,action)=>{
      const newQuestion = action.payload;
      const checkIfExists=state.singleSet.questions.find(x=>x.id===newQuestion.id);
      if(!checkIfExists){
        state.singleSet.questions.push(action.payload); 
      }
    }),
    removeQuestionFromSingleSet:((state,action)=>{
      const setId=action.payload;
       state.singleSet.questions=state.singleSet.questions.filter(x=>x.id!==setId);
    }),
    changeSingleSet:((state,action)=>{
         state.singleSet={...action.payload}
    })
  },
  extraReducers(builder) {
    builder.addCase(getPracticeSets.fulfilled,(state,action)=>{
      state.practiceSets=[...action.payload];
      state.isEdit=false;
    })
    builder.addCase(getPracticeSetById.fulfilled,(state,action)=>{
      state.singleSet={...action.payload};
      state.isEdit=true;
    })
    builder.addCase(updatePracticeSet.fulfilled,(state,action)=>{
      state.singleSet={...defaultPracticeValue.singleSet};
      state.isEdit=false;
    })
  },


});
export const {addQuestionToSingleSet,removeQuestionFromSingleSet,changeSingleSet} = practiceSetSlice.actions;
export default practiceSetSlice.reducer;