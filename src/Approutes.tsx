import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Homepage from "./pages/Homepage";
import AuthCallbackPage from "./pages/AuthCallbackPage";

// type ApproutesProps = {};

const Approutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layouts>
            <Homepage />
          </Layouts>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route path="/users-profile" element={<div>users</div>} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
export default Approutes;
