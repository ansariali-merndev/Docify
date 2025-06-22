export const About = () => {
  return (
    <section className="px-6 py-10  mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
        About Docify
      </h1>

      <p className="text-lg text-gray-700 mb-6 text-center">
        Welcome to <span className="font-semibold text-blue-600">Docify</span> -
        your intelligent companion for managing and understanding documents with
        ease.
      </p>

      <div className="space-y-10">
        {/* Feature 1: AI Summarizer */}
        <div className="bg-gray-100 rounded-xl p-6 shadow flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            🧠 AI-Powered Document Summarization
          </h2>
          <p className="text-gray-700">
            No more wasting time reading long PDFs. With our AI-based
            summarizer, you can:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Upload any PDF file</li>
            <li>Receive a clean, readable summary instantly</li>
            <li>Understand key points of documents in seconds</li>
          </ul>
        </div>

        {/* Feature 2: PDF/Image Storage */}
        <div className="bg-gray-100 rounded-xl p-6 shadow flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            🗂️ Secure PDF & Image Storage
          </h2>
          <p className="text-gray-700">
            Keep all your important documents in one place:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Upload and store PDFs, images (JPG, PNG, etc.)</li>
            <li>Preview files inside the app</li>
            <li>Access your documents from any device</li>
          </ul>
        </div>

        {/* Privacy */}
        <div className="bg-gray-100 rounded-xl p-6 shadow flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            🔒 Privacy First
          </h2>
          <p className="text-gray-700">
            Your documents are private and securely stored. Only you have access
            to them, and we use best practices for authentication and file
            handling.
          </p>
        </div>

        {/* Future Features */}
        <div className="bg-gray-100 rounded-xl p-6 shadow flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            🚀 What&apos;s Coming Next?
          </h2>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Multi-user document collaboration</li>
            <li>Document tagging and smart search</li>
            <li>Real-time editing and annotations</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
