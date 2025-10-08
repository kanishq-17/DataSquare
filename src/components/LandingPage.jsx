const LandingPage = () => {
  return (
    <div className="landing-page bg-black flex flex-col justify-start">
      {/* 🌟 SECTION 1: INTRO TEXT / HERO AREA */}
      <div className="pt-10">
        <div className="intro-text text-white text-center">
          {/* ✅ Improved text for broader audience (not just developers) */}
          <h4 className="text-sm text-zinc-400">
            🔅 Rated 5.0 ⭐ by 143 learners, creators & innovators 🔅
          </h4>

          {/* ✅ More dynamic and inspiring headline */}
          <h1 className="font-extrabold text-6xl w-2/3 m-auto my-5 leading-tight">
            Learn. Create. Collaborate — with the next generation of thinkers.
          </h1>

          {/* ✅ Updated subtext for inclusivity across domains */}
          <p className="text-neutral-400 mb-8 text-lg max-w-2xl mx-auto">
            From AI to Design, Frontend to Product — DataSquare brings together
            passionate minds to upskill, collaborate, and grow together.
          </p>

          {/* ✅ Improved CTA (dual-action style like the reference image) */}
          <div className="flex justify-center items-center gap-4">
            <button className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-md px-8 py-3 font-semibold text-white cursor-pointer shadow-md hover:scale-105 transition-all duration-300">
              Join the Community
            </button>
            <button className="bg-zinc-800 text-white border border-zinc-600 rounded-md px-8 py-3 font-semibold hover:bg-zinc-700 transition-all duration-300">
              Explore Spaces
            </button>
          </div>
        </div>

        {/* 🚀 SECTION 2: COMMUNITY PREVIEW / USER CARDS */}
        <div className="animate-user-area flex justify-around items-center gap-8 mt-10 mb-10">
          {/* 🧩 CARD 1: Progress or Activity Feed */}
          <div className="card1 w-2/7 flex flex-col justify-between gap-5">
            {/* ✅ Color Palette for creative vibe */}
            <div className="color-combinators w-2/4 rounded-2xl outline-3 outline-white bg-zinc-200 flex justify-around items-center gap-2 px-3 py-4 ml-[49.5%]">
              <div className="pink w-7 h-7 bg-pink-500 rounded-md"></div>
              <div className="blue w-7 h-7 bg-blue-500 rounded-md"></div>
              <div className="green w-7 h-7 bg-green-500 rounded-md"></div>
              <div className="yellow w-7 h-7 bg-yellow-400 rounded-md"></div>
              <div className="red w-7 h-7 bg-red-500 rounded-md"></div>
            </div>

            {/* ✅ Renamed and re-purposed */}
            <div className="task-progress bg-zinc-200 outline-3 outline-white rounded-3xl w-full h-full px-5 py-3">
              {/* Tabs for type of activity */}
              <div className="flex gap-3 items-center">
                <h3 className="bg-black text-white rounded-xl px-3 py-2">
                  Learning
                </h3>
                <h3>Collabs</h3>
                <h3>Challenges</h3>
              </div>

              {/* 🧑‍💻 Dynamic activity feed cards */}
              <div className="Learning-status mt-5 flex flex-col gap-3">
                {/* User Activity 1 */}
                <div className="relative bg-white rounded-3xl py-3 px-5 flex items-center gap-3">
                  <p className="bg-green-500 text-white text-[.6rem] rounded-full p-1 absolute -top-2 left-24">
                    CERTIFIED
                  </p>
                  <img
                    src="/kanishq_sodhani.jpg"
                    alt=""
                    className="w-10 h-10 bg-yellow-400 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">Kanishq Sodhani</h4>
                    <p className="text-sm text-zinc-600">
                      Completed “UI Systems 101”
                    </p>
                  </div>
                  <p className="ml-auto text-sm text-zinc-500">3m</p>
                </div>

                {/* User Activity 2 */}
                <div className="relative bg-white rounded-3xl py-3 px-5 flex items-center gap-3 ml-10">
                  <p className="bg-blue-500 text-white text-[.6rem] rounded-full p-1 absolute -top-2 left-24">
                    UPCOMING
                  </p>
                  <img
                    src="/andrew.jpg"
                    alt=""
                    className="w-10 h-10 bg-yellow-400 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">Andrew</h4>
                    <p className="text-sm text-zinc-600">
                      Preparing for “Next.js Masterclass”
                    </p>
                  </div>
                  <p className="ml-auto text-sm text-zinc-500">now</p>
                </div>

                {/* User Activity 3 */}
                <div className="relative bg-white rounded-3xl py-3 px-5 flex items-center gap-3">
                  <p className="bg-purple-500 text-white text-[.6rem] rounded-full p-1 absolute -top-2 left-24">
                    LIVE
                  </p>
                  <img
                    src="/sara_malik.jpg"
                    alt=""
                    className="w-10 h-10 bg-yellow-400 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">Sara Malik</h4>
                    <p className="text-sm text-zinc-600">
                      Hosting “AI Prompt Sprint”
                    </p>
                  </div>
                  <p className="ml-auto text-sm text-zinc-500">1h</p>
                </div>
              </div>
            </div>
          </div>

          {/* 🧠 CARD 2: Featured Profile / Learner Spotlight */}
          <div className="card2 user-card w-1/4 mt-25">
            <div className="relative w-full bg-zinc-200 rounded-3xl outline-white p-4 flex flex-col justify-center gap-3 shadow-lg">
              {/* Profile Section */}
              <div className="user-details bg-white w-full text-center h-1/2 rounded-2xl">
                <div className="user-img w-22 h-22 absolute -top-5 left-37">
                  <img
                    src="/anupam_mishra.jpg"
                    alt=""
                    className="w-full h-full rounded-full object-cover outline-4 outline-neutral-400"
                  />
                  <h5 className="bg-blue-500 text-white text-[.7rem] font-semibold rounded-full absolute -bottom-1 left-3 px-2">
                    ANALYST
                  </h5>
                </div>

                <h2 className="font-extrabold text-2xl mt-15 mb-1">
                  Anupam Mishra
                </h2>
                <h5 className="font-medium text-zinc-500">@mishraji_design</h5>

                <div className="user-highlight-area flex justify-around items-center w-full my-5">
                  <div>
                    <h2 className="font-bold">32</h2>
                    <h5 className="text-zinc-500">Skills</h5>
                  </div>
                  <div>
                    <h2 className="font-bold">15</h2>
                    <h5 className="text-zinc-500">Projects</h5>
                  </div>
                  <div>
                    <h2 className="font-bold">1.2k</h2>
                    <h5 className="text-zinc-500">Followers</h5>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="user-skills w-full text-left h-36 flex flex-col justify-between font-semibold">
                <div className="rounded-xl bg-white py-2 px-4">
                  <h3>
                    Python <span className="text-neutral-600">Expert</span>
                  </h3>
                </div>
                <div className="rounded-xl bg-white py-2 px-4">
                  <h3>
                    DataBricks{" "}
                    <span className="text-neutral-600">Advanced</span>
                  </h3>
                </div>
                <div className="rounded-xl bg-neutral-300 py-2 px-4">
                  <h3>Add Skill</h3>
                </div>
              </div>
            </div>
          </div>

          {/* 🏆 CARD 3: Quick Filter + Leaderboard */}
          <div className="card3 w-1/3 flex flex-col gap-8">
            {/* Quick Filter */}
            <div className="quick-filter w-2/4 rounded-2xl bg-zinc-200 py-4 px-2">
              <div className="icons flex justify-center items-center gap-5">
                <div className="text-center">
                  <div className="w-10 h-8 bg-black rounded-lg"></div>
                  <h4 className="mt-3 font-semibold">AI</h4>
                </div>
                <div className="text-center">
                  <div className="w-10 h-8 bg-black rounded-lg"></div>
                  <h4 className="mt-3 font-semibold">SDE</h4>
                </div>
                <div className="text-center">
                  <div className="w-10 h-8 bg-black rounded-lg"></div>
                  <h4 className="mt-3 font-semibold">Design</h4>
                </div>
                <div className="text-center">
                  <div className="w-10 h-8 bg-black rounded-lg"></div>
                  <h4 className="mt-3 font-semibold">Product</h4>
                </div>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="Leaderboard w-3/4 rounded-2xl bg-zinc-200">
              {[
                { name: "Karan", points: "3.2K", color: "bg-yellow-400" },
                { name: "Sara", points: "2.4K", color: "bg-pink-400" },
                { name: "Aditya", points: "1.8K", color: "bg-blue-400" },
              ].map((user, i) => (
                <div
                  key={i}
                  className="flex justify-start items-center gap-3 p-4 hover:bg-white/40 transition-all duration-300 cursor-pointer rounded-xl"
                >
                  <div className={`w-10 h-10 rounded-full ${user.color}`}></div>
                  <div>
                    <h4 className="font-semibold">{user.name}</h4>
                    <p className="text-zinc-500">{user.points} Points</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🌈 SECTION 3: FOOTER TAGLINE */}
        <p className="italic text-zinc-400 text-center font-semibold mt-5">
          Because learning is better when we build together.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
