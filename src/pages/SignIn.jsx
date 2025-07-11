import { Link, useNavigate } from "react-router-dom";
import { Password } from "../components/Password";
import { useState } from "react";
import { handleAuthLogin } from "../lib/axios";
import { useUser } from "../lib/context";
import Swal from "sweetalert2";

export const SignIn = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const { setIsAuthorized } = useUser();

  const navigate = useNavigate();

  const handleUsername = (e) => {
    setLoginForm((prev) => {
      return {
        ...prev,
        username: e.target.value,
      };
    });
  };

  const handlePassword = (e) => {
    setLoginForm((prev) => {
      return {
        ...prev,
        password: e.target.value,
      };
    });
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    // console.log(loginForm);

    const res = await handleAuthLogin(loginForm);
    console.log(res);

    if (res.success) {
      setLoginForm({ username: "", password: "" });
      navigate("/");
      setIsAuthorized(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Username or password is wrong!",
      });
    }
  };

  const passValue = {
    confirmPass: false,
    name: "signInPass",
    setPassword: handlePassword,
    Password: loginForm.password,
  };

  return (
    <section className="flex flex-col justify-center items-center py-12">
      <div className="py-8 px-14 rounded-2xl border border-gray-300 backdrop-blur-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-2">Sign In</h2>
        <p className="text-center text-gray-600 mb-6">
          Welcome back! Please enter your credentials to continue.
        </p>

        <form onSubmit={handleLoginFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              autoComplete="off"
              required
              value={loginForm.username}
              onChange={handleUsername}
              className="w-full px-3 py-2 bg-gray-100 rounded outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <Password value={passValue} />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-semibold transition"
          >
            Sign In
          </button>
        </form>
      </div>
      <p>
        Don&apos;t have an account?{" "}
        <Link to={"/sign-up"} className="text-indigo-600">
          Register
        </Link>
      </p>
    </section>
  );
};
