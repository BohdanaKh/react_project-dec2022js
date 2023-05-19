import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import  './App.css';
import {MainLayout} from "./layouts";
import { MoviesPage} from "./pages";
import {useAppSelector} from "./hooks";
import {MovieInfo, MoviesList} from "./components";

const App = () => {
const {darkMode} = useAppSelector(state => state.themeReducer);


return (

      <div className={darkMode?'App-light':'App-dark'}>

  <Routes>
    <Route path={'/'} element={<MainLayout/>}>

      <Route index element={<Navigate to={'movies'}/>}/>
      <Route path={'movies'} element={<MoviesPage/>}/>
      <Route path={'movie/:id'} element={<MovieInfo/>}/>

    </Route>
  </Routes>
      </div>
  );
};

export default App;
