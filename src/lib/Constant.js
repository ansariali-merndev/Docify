import Swal from "sweetalert2";

export const NavItem = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Contact", url: "/contact" },
];

export const handleError = (error) => {
  console.log(error);
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
  });
};
