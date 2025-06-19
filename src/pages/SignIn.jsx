import { Link } from "react-router-dom";
import bgImage from "../assets/bgAuth.jpg";

export const SignIn = () => {
  return (
    <section className="flex flex-col justify-center items-center py-12">
      <div className="py-8 px-14 rounded-2xl border border-gray-300 backdrop-blur-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-2">Sign In</h2>
        <p className="text-center text-gray-600 mb-6">
          Welcome back! Please enter your credentials to continue.
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              className="w-full px-3 py-2 bg-gray-100 rounded outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 bg-gray-100 rounded outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-semibold transition"
          >
            Sign In
          </button>
        </form>
      </div>
      <h2>
        Don&apos;t have a account{" "}
        <Link to={"/sign-up"} className="text-indigo-600">
          Register
        </Link>
      </h2>
    </section>
  );
};
