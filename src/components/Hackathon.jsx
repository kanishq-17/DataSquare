const Hackathon = () => {
  return (
    <section className="hackathon-section w-full bg-[#1A1A1D] px-5 pt-8">
      {/* //* hackathon heading */}
      <div className="hackathon-heading text-center">
        <h1 className="font-extrabold text-8xl mb-5">
          Innovate. Compete. Dominate.
        </h1>
        <h3 className="text-neutral-400 text-2xl font-extralight">
          The ultimate battlefield of innovation awaits.
        </h3>
      </div>

      {/*  //* hackathon content */}
      <div className="hackathon-content w-full h-134 mt-10 flex justify-end items-center gap-15">
        {/* //* Hackathon Orbit */}
        <div className="hackathon-orbit h-full bg-transparent w-1/3 rounded-2xl p-2 outline outline-neutral-500">
          <div className="bg-[#262726]/80 h-full w-full rounded-xl p-5 text-white">
            <h1 className="font-bold text-2xl mb-2">
              Evolve Through Every Challenge
            </h1>
            <p className="text-sm w-3/4 text-zinc-400">
              A dynamic space for creators to showcase ideas, solve real
              problems, and stand out from the crowd.
            </p>
            {/* //*hackathon orbit area */}
            <div className="hackathon-orbit-area w-full h-92 mt-4 relative ">
              {/* //? inner circle */}
              <div className="w-17 h-17 rounded-full bg-orange-600 z-40 absolute top-41 left-45"></div>

              {/* //? outer circle 1*/}
              <div className="w-40 h-40 rounded-full z-30 absolute top-30 left-34 outline-1 outline-orange-600">
                <div className="w-10 h-10 rounded-full bg-white absolute -top-2 left-7"></div>
                <div className="w-2 h-2 rounded-full absolute top-35 left-31 bg-orange-500"></div>
              </div>

              {/* //? outer circle 2*/}
              <div className="w-68 h-68 rounded-full  z-20 absolute top-16 left-20 outline outline-orange-700">
                <div className="w-10 h-10 rounded-full bg-white absolute top-45 left-0"></div>
                <div className="w-10 h-10 rounded-full bg-white absolute top-45 left-58"></div>
                <div className="w-2 h-2 rounded-full bg-orange-500 absolute top-0 left-40"></div>
              </div>

              {/* //? outer circle 3*/}
              <div className="w-96 h-96 rounded-full z-10 absolute top-2 left-6 box-border outline-1 outline-dashed outline-orange-700">
                <div className="w-10 h-10 rounded-full bg-white absolute top-87 left-25"></div>
                <div className="w-10 h-10 rounded-full bg-white absolute top-7 left-75"></div>
                <div className="w-10 h-10 rounded-full bg-white absolute top-35 -left-4"></div>
                <div className="w-2 h-2 rounded-full bg-orange-800 absolute top-50 left-95"></div>
                <div className="w-2 h-2 rounded-full bg-orange-700 absolute top-16 left-10"></div>
                <div className="w-2 h-2 rounded-full bg-orange-700 absolute top-78 left-10"></div>
              </div>
            </div>
          </div>
        </div>
        {/* //* Hackathon Leaderboard */}
        <div className="hackathon-leaderboard bg-fuchsia-500 w-1/2 rounded-2xl p-2">
          {/* //? leaderboard info */}
          <div className="leaderboard-info flex justify-start items-center gap-2">
            <div className="rounded-xl bg-purple-500 w-1/3 h-40">
              <h2 className="font-bold p-5">
                Where innovation meets impact ⚡
              </h2>
            </div>
            <div className="rounded-xl bg-purple-600 w-full h-40 p-5 box-border">
              <h2 className="font-bold text-4xl mb-3">Upcoming</h2>
              <p className="font-medium text-xl">DevVerse - 2026</p>
            </div>
          </div>

          {/* //? leaderboard */}
          <div className="rounded-2xl bg-gradient-to-b from-[#1a001f] to-[#0a0010] h-88 mt-4 p-5 shadow-[0_0_25px_rgba(120,50,255,0.3)]">
            {/* //* Leaderboard Header */}
            <div className="leaderboard-header grid grid-cols-4 text-left text-sm text-zinc-400 font-semibold border-b border-purple-800 pb-3">
              <h3># Rank</h3>
              <h3>Hackathon</h3>
              <h3>Category</h3>
              <h3>Participants</h3>
            </div>

            {/* //* Leaderboard Rows */}
            <div className="leaderboard-body mt-3 space-y-2 text-white">
              {/* //! Row 1 */}
              <div className="flex justify-between items-center bg-gradient-to-r from-purple-800/40 to-fuchsia-700/30 hover:from-purple-700/60 hover:to-fuchsia-600/40 transition-all duration-300 rounded-xl py-2 px-3 shadow-[0_0_12px_rgba(180,80,255,0.3)]">
                <p className="w-1/4 text-center font-bold text-purple-300">
                  #1
                </p>
                <p className="w-1/4 text-center">Hack the Future</p>
                <p className="w-1/4 text-center text-zinc-300">AI & ML</p>
                <p className="w-1/4 text-center text-zinc-400">1.2k+</p>
              </div>

              {/* //! Row 2 */}
              <div className="flex justify-between items-center bg-gradient-to-r from-purple-800/30 to-pink-700/20 hover:from-purple-700/50 hover:to-pink-600/30 transition-all duration-300 rounded-xl py-2 px-3">
                <p className="w-1/4 text-center font-bold text-purple-300">
                  #2
                </p>
                <p className="w-1/4 text-center">Build For Bharat</p>
                <p className="w-1/4 text-center text-zinc-300">
                  Web3 & Blockchain
                </p>
                <p className="w-1/4 text-center text-zinc-400">900+</p>
              </div>

              {/* //! Row 3 */}
              <div className="flex justify-between items-center bg-gradient-to-r from-purple-800/30 to-pink-700/20 hover:from-purple-700/50 hover:to-pink-600/30 transition-all duration-300 rounded-xl py-2 px-3">
                <p className="w-1/4 text-center font-bold text-purple-300">
                  #3
                </p>
                <p className="w-1/4 text-center">Code For Change</p>
                <p className="w-1/4 text-center text-zinc-300">
                  Sustainability
                </p>
                <p className="w-1/4 text-center text-zinc-400">780+</p>
              </div>

              {/* //! Row 4 */}
              <div className="flex justify-between items-center bg-gradient-to-r from-purple-800/30 to-pink-700/20 hover:from-purple-700/50 hover:to-pink-600/30 transition-all duration-300 rounded-xl py-2 px-3">
                <p className="w-1/4 text-center font-bold text-purple-300">
                  #4
                </p>
                <p className="w-1/4 text-center">Designverse</p>
                <p className="w-1/4 text-center text-zinc-300">
                  UI/UX & Creativity
                </p>
                <p className="w-1/4 text-center text-zinc-400">560+</p>
              </div>

              {/* //! Row 5 */}
              <div className="flex justify-between items-center bg-gradient-to-r from-purple-800/30 to-pink-700/20 hover:from-purple-700/50 hover:to-pink-600/30 transition-all duration-300 rounded-xl py-2 px-3">
                <p className="w-1/4 text-center font-bold text-purple-300">
                  #5
                </p>
                <p className="w-1/4 text-center">AI Arena</p>
                <p className="w-1/4 text-center text-zinc-300">Deep Learning</p>
                <p className="w-1/4 text-center text-zinc-400">1.5k+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathon;
