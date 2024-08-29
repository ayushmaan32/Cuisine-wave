import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// type AuthCallbackPageProps = {};

const AuthCallbackPage: React.FC = () => {
  const { user } = useAuth0();
  const { CreateUser } = useCreateMyUser();
  const navigate = useNavigate();

  const hasCreatedRef = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedRef.current) {
      CreateUser({
        auth0Id: user.sub,
        email: user.email,
      });
      hasCreatedRef.current = true;
    }
    navigate("/");
  }, [CreateUser, user, navigate]);
  return <>Loading...</>;
};
export default AuthCallbackPage;
