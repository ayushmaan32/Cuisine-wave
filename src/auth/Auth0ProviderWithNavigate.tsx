import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

type Auth0ProviderWithNavigateProps = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({
  children,
}: Auth0ProviderWithNavigateProps) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirecturi = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirecturi) {
    throw new Error("unable to initalize the auth");
  }
  const navigate = useNavigate();
  const onRedirectCallback = () => {
    // console.log(appState, user);
    navigate("/auth-callback");
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirecturi,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
export default Auth0ProviderWithNavigate;
