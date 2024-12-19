import {configureStore} from '@reduxjs/toolkit';
import cvReducer from './cvSlice';

const store = configureStore({
    reducer: cvReducer
})