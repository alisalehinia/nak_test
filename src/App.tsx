import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserListPage } from "./pages/userList";
import { CreateUser } from "./pages/createUser";
import { EditUser } from "./pages/editUser";
import Header from "./components/header";
import { Fibonacci } from "./pages/fibonacci";
import { Collatz } from "./pages/collatz";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/list-item" element={<UserListPage />} />
        <Route path="/list-item/create-user" element={<CreateUser />} />
        <Route path="/list-item/edit-user/:id" element={<EditUser />} />
        <Route path="/Fibonacci" element={<Fibonacci />} />
        <Route path="/Collatz_Conjecture" element={<Collatz />} />
      </Routes>
    </>
  );
};

export default App;
