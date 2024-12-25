import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    personalInfo: {},
    education: [],
    workExperience: [],
    skills: []
};

const cvSlice = createSlice({
    name: 'cv',
    initialState,
    reducers: {
        updatePersonalInfo: (state, action) => {
            state.personalInfo = action.payload
        },
        addEducation: (state, action) => {
            state.education = action.payload

        },
        addWorkExperience: (state, action) => {
            // state.workExperience = action.payload
            state.workExperience.push(action.payload)
        },
        addSkill: (state, action) => {
            state.skills = action.payload; // Replace the skills array with new values
        },
    }
})

export const {updatePersonalInfo, addEducation, addWorkExperience, addSkill} = cvSlice.actions;
export default cvSlice.reducer