// import React from 'react'

import { Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import Single from "./pages/Single";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/project/:id"
          element={
            <Main>
              <Single />
            </Main>
          }
        />
      </Routes>
      {/* <Main /> */}
    </div>
  );
};

export default App;
