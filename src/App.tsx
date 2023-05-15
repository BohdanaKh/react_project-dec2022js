import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import  './App.css';
import {MainLayout} from "./layouts";
import {MovieDetailsPage, MoviesPage} from "./pages";
import {GenresPage} from "./pages";
import {useAppSelector} from "./hooks";

const App = () => {
const {darkMode} = useAppSelector(state => state.themeReducer);


return (

      <div className={darkMode?'App-light':'App-dark'}>

  <Routes>
    <Route path={'/'} element={<MainLayout/>}>
      <Route index element={<Navigate to={'movies'}/>}/>
      <Route path={'movies'} element={<MoviesPage/>}>
      <Route path={':id'} element={<MovieDetailsPage/>}/>
        </Route>
      <Route path={'genres'} element={<GenresPage/>}/>
    </Route>
  </Routes>
      </div>
  );
};

export default App;
