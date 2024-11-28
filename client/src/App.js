import React from "react";
import LoginPage from "./pages/login";
import Register from "./pages/Register";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
