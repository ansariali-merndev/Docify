import { useGoogleLogin } from "@react-oauth/google";
import { handleGoogleLoginAxios } from "../lib/axios";

export const Google = () => {
  const responseGoogle = async (authResponse) => {
    try {
      if (authResponse.code) {
        const res = await handleGoogleLoginAxios(authResponse.code);
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });
  return (
    <button
      onClick={handleGoogleLogin}
      className="bg-indigo-600 px-3 py-2 cursor-pointer text-white"
    >
      Login with google
    </button>
  );
};
