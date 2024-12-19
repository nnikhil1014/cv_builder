import {createSlice} from '@redujs/toolkit'

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
            state.education.push(action.payload)
        },
        addWorkExperience: (state, action) => {
            state.workExperiece.push(action.payload)
        },
        addSkill: (state, action) => {
            state.skills.push(action.payload)
        }
    }
})

export const {updatePersonalInfo, addEducation, addWorkExperience, addSkill} = cvSlice.actions;
export default cvSlice.reducer