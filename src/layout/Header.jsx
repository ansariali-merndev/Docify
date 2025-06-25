import { Link, NavLink } from "react-router-dom";
import { NavItem } from "../lib/Constant";
import { MobileNav } from "../components/MobileNav";
import { useEffect, useState } from "react";
import { handleAuthLogout, handleAuthVerify } from "../lib/axios";
import Swal from "sweetalert2";
import { useUser } from "../lib/context";

export const Header = () => {
  const { isAuthorized, setIsAuthorized } = useUser();

  useEffect(() => {
    async function checkAuth() {
      const res = await handleAuthVerify();
      setIsAuthorized(res.success);
    }
    checkAuth();
  }, []);

  const handleLogout = async () => {
    const res = await handleAuthLogout();
    if (res.success) {
      Swal.fire({
        title: "Logout Successfully",
        timer: 2000,
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        showConfirmButton: true,
      });
    }
    setIsAuthorized(false);
  };

  return (
    <header className="flex justify-between items-center px-4 shadow-lg h-[12vh]">
      <Link to="/" className="text-2xl font-extrabold text-blue-600">
        Docify
      </Link>
      <nav className="hidden md:flex gap-4">
        {NavItem.map(({ label, url }, index) => (
          <NavLink to={url} key={index} className="px-2 py-1">
            {label}
          </NavLink>
        ))}

        {isAuthorized ? (
          <button onClick={handleLogout} className="px-2 py-1 cursor-pointer">
            logout
          </button>
        ) : (
          <NavLink to={"/sign-in"} className="px-2 py-1">
            Sign in
          </NavLink>
        )}
      </nav>
      <MobileNav />
    </header>
  );
};
