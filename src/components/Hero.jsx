export const Hero = () => {
  return (
    <main>
      <div className="my-12">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-center">
          Transform PDFs into concise summaries
        </h2>
        <p className="text-center text-sm md:text-2xl font-medium my-2">
          Get a beautiful summary reel of the document in seconds.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 my-12">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-[5px] cursor-pointer hover:bg-purple-800">
          Try Docify Summary
        </button>
      </div>
    </main>
  );
};
