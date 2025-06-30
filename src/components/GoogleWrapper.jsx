import { GoogleOAuthProvider } from "@react-oauth/google";
import { Google } from "./Google";

export const GoogleWrapper = () => {
  const id = import.meta.env.VITE_CLIENT_ID;
  return (
    <GoogleOAuthProvider clientId={id}>
      <Google />
    </GoogleOAuthProvider>
  );
};
