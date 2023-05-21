import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import  './App.css';
import {MainLayout} from "./layouts";
import { MoviesPage} from "./pages";
import {MovieInfo} from "./components";


const App = () => {

return (


  <Routes>
    <Route path={'/'} element={<MainLayout/>}>
      <Route index element={<Navigate to={'movies'}/>}/>
      <Route path={'movies'} element={<MoviesPage/>}/>
      <Route path={'movie/:id'} element={<MovieInfo/>}/>

    </Route>
  </Routes>


  );
};

export default App;
