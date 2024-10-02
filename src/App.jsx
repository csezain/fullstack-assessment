import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/Index";
import ListingPage from "./Pages/ListingPage/Index";
import UserCrud from "./Pages/UserCrud/Index";
import MultiStepForm from "./Pages/MultiStepForm/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/listing-component" element={<ListingPage />} />
      <Route path="/user-crud" element={<UserCrud />} />
      <Route path="/multi-step-form" element={<MultiStepForm />} />
    </Routes>
  );
}

export default App;
