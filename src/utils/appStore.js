import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';
import gptReducer from './gptSlice';
import configReducer from './configSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configReducer
    }
})