import React from "react";
import { Route, useLocation, Routes } from "react-router-dom";
import Game from "./features/Game";

const App: React.FunctionComponent = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Game />} />
    </Routes>
  );
};

export default App;
