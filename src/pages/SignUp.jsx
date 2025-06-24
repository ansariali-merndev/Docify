import { Link, useNavigate } from "react-router-dom";
import { Password } from "../components/Password";
import { useState } from "react";
import { handleRegister } from "../lib/axios";
import Swal from "sweetalert2";

export const SignUp = () => {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleUsername = (e) => {
    setRegisterForm((prev) => {
      return {
        ...prev,
        username: e.target.value,
      };
    });
  };

  const handlePassword = (e) => {
    setRegisterForm((prev) => {
      return {
        ...prev,
        password: e.target.value,
      };
    });
  };

  const handleConfirmPassword = (e) => {
    setRegisterForm((prev) => {
      return {
        ...prev,
        confirmPassword: e.target.value,
      };
    });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (registerForm.password.length < 8) {
      return Swal.fire({
        title: "Check Credential",
        text: "Password minimum 8 character",
        icon: "question",
      });
    }

    const checkPass = registerForm.confirmPassword === registerForm.password;

    if (!checkPass) {
      return Swal.fire({
        title: "Check Credential",
        text: "Password does not match",
        icon: "question",
      });
    }

    const res = await handleRegister(registerForm);

    if (!res.success) {
      return Swal.fire({
        title: "Check Credential",
        text: res.message,
        icon: "question",
      });
    } else {
      navigate("/");
    }

    setRegisterForm({
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  const passValue = {
    confirmPass: false,
    name: "signUpPass",
    setPassword: handlePassword,
    Password: registerForm.password,
  };

  const confirmPassValue = {
    confirmPass: true,
    name: "signUpConfirmPass",
    setPassword: handleConfirmPassword,
    Password: registerForm.confirmPassword,
  };

  return (
    <section className="flex flex-col justify-center items-center py-12">
      <div className="py-8 px-14 rounded-2xl border border-gray-300 backdrop-blur-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
        <p className="text-center text-gray-600 mb-6">
          Welcome back! Fill in Your Details to Register.
        </p>

        <form onSubmit={handleRegisterSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              value={registerForm.username}
              required
              onChange={handleUsername}
              placeholder="Enter username"
              className="w-full px-3 py-2 bg-gray-100 rounded outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <Password value={passValue} />
          <Password value={confirmPassValue} />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-semibold transition"
          >
            Sign up
          </button>
        </form>
      </div>
      <p>
        Already have a account?{" "}
        <Link to={"/sign-in"} className="text-indigo-600">
          Login
        </Link>
      </p>
    </section>
  );
};
