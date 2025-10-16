const PreFooter = () => {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center px-8 py-20">
      {/* Outer Container */}
      <div className="w-full max-w-8xl bg-gradient-to-br from-gray-100 to-gray-200 text-black rounded-3xl flex flex-col md:flex-row justify-between items-center p-10 shadow-2xl relative overflow-hidden">
        {/* Left Section */}
        <div className="md:w-1/2 z-10">
          <p className="uppercase tracking-wider text-gray-500 font-medium mb-4">
            Beta Access
          </p>
          <h1 className="font-semibold text-4xl md:text-5xl leading-snug mb-6">
            “Join the Beta Wave and help us shape the future before the full
            release.”
          </h1>
          <p className="text-gray-700 mb-8">
            Be one of the first to explore our platform, share your feedback,
            and experience the evolution firsthand.
          </p>

          {/* Input and Button */}
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 outline-none text-gray-800 placeholder-gray-500"
            />
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-all">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0 relative">
          <div className="bg-black rounded-3xl p-10 flex justify-center items-center relative overflow-hidden">
            <img
              src="/thank-you-img.png"
              alt="Beta Illustration"
              className="w-72 h-72 object-contain mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
