import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Homepage from "./pages/Homepage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoutes from "./auth/ProtectedRoutes";

// type ApproutesProps = {};

const Approutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layouts landigImage>
            <Homepage />
          </Layouts>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />

      <Route element={<ProtectedRoutes />}>
        <Route
          path="/user-profile"
          element={
            <Layouts>
              <UserProfilePage />
            </Layouts>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
export default Approutes;
