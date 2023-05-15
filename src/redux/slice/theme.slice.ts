import {createSlice} from "@reduxjs/toolkit";


interface ITheme {
    darkMode: boolean
}

const initialState = {
    darkMode:false
}


const slice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) =>
        {
            state.darkMode = !state.darkMode;
        }
    }

});

const {actions, reducer:themeReducer} = slice;

const themeActions = {
    ...actions,
}

export {
    themeReducer,
    themeActions,
}

export type {ITheme}