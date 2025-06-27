import { useState } from "react";
import Swal from "sweetalert2";
import { handleAuthVerify, handleSummaryFile } from "../lib/axios";
import { BarLoader } from "react-spinners";

export const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCTO = () => {
    // console.log("Button clicked");
    Swal.fire({
      title: "Upload Your pdf",
      html: `<input type="file" id="pdfInput">`,
      confirmButtonText: "Summarize",
      showCancelButton: false,
    }).then(() => {
      const inputValue = document.getElementById("pdfInput");

      handleUpload(inputValue.files[0]);
    });
  };

  const handleUpload = async (file) => {
    const checkAuthorized = await handleAuthVerify();
    if (!checkAuthorized.success) {
      return Swal.fire({
        title: "Please login to continue",
      });
    }
    if (!file) {
      return Swal.fire({
        title: "Invalid file",
        text: "Please select pdf format file",
        showConfirmButton: true,
      });
    }

    const [_, ext] = file.name.split(".");

    if (ext !== "pdf") {
      return Swal.fire({
        title: "Invalid file",
        text: "Please select pdf format file",
        showConfirmButton: true,
      });
    }

    const formData = new FormData();
    formData.append("pdf", file);
    setIsLoading(true);

    const res = await handleSummaryFile(formData);
    if (res.success) {
      const bulletPoints = res.summary.split(/\d+\.\s+/).filter(Boolean);

      const formattedSummary = `<ul style="text-align: left;">${bulletPoints
        .map((point) => `<li>${point}</li>`)
        .join("")}</ul>`;

      Swal.fire({
        title: "Summary of the PDF",
        html: formattedSummary,
        icon: "success",
        width: 600,
      });
    } else {
      Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question",
      });
    }

    setIsLoading(false);
  };

  return (
    <main>
      {isLoading && <BarLoader color="blue" width={"100%"} />}
      <div className="my-12">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-center">
          Transform PDFs into concise summaries
        </h2>
        <p className="text-center text-sm md:text-2xl font-medium my-2">
          Get a beautiful summary reel of the document in seconds.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 my-12">
        <button
          onClick={handleCTO}
          className="bg-indigo-600 text-white px-4 py-2 rounded-[5px] cursor-pointer hover:bg-purple-800"
        >
          Try Docify Summary
        </button>
      </div>
    </main>
  );
};
