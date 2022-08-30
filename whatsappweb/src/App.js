import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Chat from "./Pages/Chat";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
