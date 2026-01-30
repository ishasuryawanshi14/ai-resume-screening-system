export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex items-center justify-center p-10">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-5xl">

        <h1 className="text-4xl font-bold text-center mb-3">
          AI Resume Compatibility Checker
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Upload your resume and job description to get instant compatibility insights
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Resume Upload */}
          <div>
            <h2 className="font-semibold mb-3">Resume Upload</h2>
            <div className="border-2 border-dashed rounded-xl p-10 text-center">
              <input type="file" className="w-full" />
              <p className="mt-3 text-sm text-gray-400">
                PDF, DOC, DOCX
              </p>
            </div>
          </div>

          {/* Job Description */}
          <div>
            <h2 className="font-semibold mb-3">Job Description</h2>
            <textarea
              placeholder="Paste the job description here..."
              className="w-full border rounded-xl p-5 h-40"
            />
          </div>

        </div>

        <div className="text-center mt-10">
          <button className="bg-gray-700 text-white px-10 py-3 rounded-xl shadow-md hover:bg-gray-800">
            Check Compatibility
          </button>
        </div>

      </div>
    </main>
  );
}
