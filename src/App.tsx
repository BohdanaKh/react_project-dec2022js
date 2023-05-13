import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages/MoviesPage";
import {GenresPage} from "./pages/GenresPage";

const App = () => {

  return (
  <Routes>
    <Route path={'/'} element={<MainLayout/>}>
      <Route index element={<Navigate to={'movies'}/>}/>
      <Route path={'movies'} element={<MoviesPage/>}/>
      <Route path={'genres'} element={<GenresPage/>}/>

    </Route>
  </Routes>
  );
};

export default App;
