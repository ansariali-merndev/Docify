import { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { NavItem } from "../lib/Constant";
import { handleAuthLogout, handleAuthVerify } from "../lib/axios";
import Swal from "sweetalert2";
import { useUser } from "../lib/context";
export const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);

  const { isAuthorized, setIsAuthorized } = useUser();

  useEffect(() => {
    async function checkAuth() {
      const res = await handleAuthVerify();
      setIsAuthorized(res.success);
    }
    checkAuth();
  }, []);

  const handleLogout = async () => {
    setOpenNav(false);
    const res = await handleAuthLogout();
    if (res.success) {
      setIsAuthorized(false);
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
  };

  return (
    <nav className="flex md:hidden">
      <button
        onClick={() => setOpenNav(true)}
        className="text-2xl cursor-pointer"
      >
        <RiMenu3Line />
      </button>
      <div
        className={`bg-gray-200 z-40 absolute inset-0 w-64 flex flex-col gap-4 justify-center items-center transform transition-transform duration-300 ease-in-out  ${
          openNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {NavItem.map((item, index) => (
          <NavLink key={index} onClick={() => setOpenNav(false)} to={item.url}>
            {item.label}
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
        <p
          onClick={() => setOpenNav(false)}
          className="text-2xl absolute left-56 z-50 top-0 cursor-pointer"
        >
          &times;
        </p>
      </div>
    </nav>
  );
};
