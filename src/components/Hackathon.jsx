import { FaRegCircleUser } from "react-icons/fa6";
import { IoPeopleOutline, IoEarthOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { SlChart } from "react-icons/sl";
import { FaLaptopCode } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";

const Hackathon = () => {
  return (
    <section className="hackathon-section w-full bg-[#191919] px-5 pt-8 pb-10">
      {/* //* Hackathon Heading */}
      <header className="hackathon-heading text-center">
        <h1
          className="font-extrabold text-[5rem] mb-10 bg-clip-text text-transparent [text-shadow:_0px_0px_50px_rgba(187,41,28,1)]"
          style={{
            backgroundImage: "url('/light-trail-text-bg.png",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Innovate. Compete. Dominate.
        </h1>
        {/* <h2 className="text-neutral-400 text-2xl font-extralight">
          The ultimate battlefield of innovation awaits.
        </h2> */}
      </header>

      {/* //* Hackathon Content */}
      <div className="hackathon-content w-full h-134 mt-10 flex justify-end items-center gap-15">
        {/* //* Hackathon Orbit */}
        <article className="hackathon-orbit h-full bg-transparent w-1/3 rounded-2xl p-2 outline outline-neutral-500">
          <div className="bg-[#262726]/80 h-full w-full rounded-xl p-5 text-white">
            <h2 className="font-bold text-2xl mb-2">
              Evolve Through Every Challenge
            </h2>
            <p className="text-sm w-3/4 text-zinc-400">
              A dynamic space for creators to showcase ideas, solve real
              problems, and stand out from the crowd.
            </p>

            {/* //* Hackathon Orbit Area */}
            <div className="hackathon-orbit-area w-full h-92 mt-4 relative">
              {/* //? Inner Circle */}
              <div className="w-17 h-17 rounded-full bg-orange-600 z-40 absolute top-41 left-45 shadow-[-1px_1px_230px_80px_rgba(214,93,25,0.8)] flex justify-center items-center text-black text-4xl">
                <BsLightningCharge />
              </div>

              {/* //? Outer Circle 1 */}
              <div className="w-40 h-40 rounded-full z-30 absolute top-30 left-34 outline-1 outline-orange-600">
                <div className="w-10 h-10 rounded-full bg-white z-10 absolute -top-2 left-7 shadow-[-1px_1px_25px_-1px_rgba(214,93,25,1)] flex justify-center items-center text-black text-xl">
                  <FaRegCircleUser />
                </div>
                <div className="w-2 h-2 rounded-full absolute top-35 left-31 bg-orange-500 blur-xs"></div>
              </div>

              {/* //? Outer Circle 2 */}
              <div className="w-68 h-68 rounded-full z-20 absolute top-16 left-20 outline outline-orange-700">
                <div className="w-10 h-10 rounded-full bg-white z-10 absolute top-45 left-0 shadow-[-1px_1px_25px_-1px_rgba(214,93,25,1)] flex justify-center items-center text-black text-xl">
                  <IoPeopleOutline />
                </div>
                <div className="w-10 h-10 rounded-full bg-white z-10 absolute top-45 left-58 shadow-[-1px_1px_25px_-1px_rgba(214,93,25,1)] flex justify-center items-center text-black text-xl">
                  <IoEarthOutline />
                </div>
                <div className="w-2 h-2 rounded-full bg-orange-500 blur-xs absolute top-0 left-40 shadow-[-1px_1px_25px_-1px_rgba(214,93,25,1)]"></div>
              </div>

              {/* //? Outer Circle 3 */}
              <div className="w-96 h-96 rounded-full z-10 absolute top-2 left-6 box-border outline-1 outline-dashed outline-orange-700">
                <div className="w-10 h-10 rounded-full bg-white z-10 absolute top-87 left-25 shadow-[-1px_1px_25px_-1px_rgba(214,93,25,1)] flex justify-center items-center text-black text-xl">
                  <GoGraph />
                </div>
                <div className="w-10 h-10 rounded-full bg-white z-10 absolute top-7 left-75 shadow-[-1px_1px_25px_-1px_rgba(214,93,25,1)] flex justify-center items-center text-black text-xl">
                  <SlChart />
                </div>
                <div className="w-10 h-10 rounded-full bg-white z-10 absolute top-35 -left-4 shadow-[-1px_1px_25px_-1px_rgba(214,93,25,1)] flex justify-center items-center text-black text-xl">
                  <FaLaptopCode />
                </div>
                <div className="w-2 h-2 rounded-full bg-orange-800 blur-xs absolute top-50 left-95"></div>
                <div className="w-2 h-2 rounded-full bg-orange-700 blur-xs absolute top-16 left-10"></div>
                <div className="w-2 h-2 rounded-full bg-orange-700 blur-xs absolute top-78 left-10"></div>
              </div>
            </div>
          </div>
        </article>

        {/* //* Hackathon Leaderboard */}
        <aside className="hackathon-leaderboard bg-fuchsia-500 w-1/2 rounded-2xl p-2 relative overflow-hidden">
          {/* Animated Gradient Background + Stars */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-b from-purple-900/50 to-fuchsia-800/40 blur-2xl opacity-70"></div>
            {/* Glass border shapes/stars */}
            <div className="absolute top-12 left-16 w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full border border-fuchsia-200/40 animate-pulse"></div>
            <div className="absolute right-14 top-20 w-16 h-16 bg-purple-300/10 rounded-xl backdrop-blur-lg border border-purple-400/30 animate-move-slow"></div>
          </div>

          {/* Leaderboard Info (Glassmorphism + Modern UI) */}
          <div className="leaderboard-info flex justify-start items-center gap-2 relative z-10">
            <div className="rounded-xl bg-white/10 backdrop-blur-lg w-1/3 h-40 shadow-[0_2px_18px_rgba(200,120,255,0.14)] border border-fuchsia-300/40 flex items-center">
              <h3 className="font-bold p-5 text-fuchsia-200 drop-shadow-glass">
                Where innovation meets impact ⚡
              </h3>
            </div>
            <div className="rounded-xl bg-white/10 backdrop-blur-lg w-full h-40 p-5 box-border shadow-[0_2px_18px_rgba(145,120,255,0.13)] border border-purple-300/30 flex flex-col justify-center">
              <h3 className="font-bold text-4xl mb-3 text-purple-50 drop-shadow-glass">
                Upcoming
              </h3>
              <p className="font-medium text-xl text-fuchsia-300">
                DevVerse - 2026
              </p>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="rounded-2xl bg-gradient-to-b from-[#1a001f] to-[#0a0010] h-88 mt-4 p-5 shadow-[0_0_25px_rgba(120,50,255,0.3)] relative z-10">
            {/* Header */}
            <header className="leaderboard-header grid grid-cols-4 text-left text-sm text-zinc-400 font-semibold border-b border-purple-800 pb-3">
              <h4># Rank</h4>
              <h4>Hackathon</h4>
              <h4>Category</h4>
              <h4>Participants</h4>
            </header>
            {/* Rows */}
            <div className="leaderboard-body mt-3 space-y-2 text-white">
              {[
                {
                  rank: "#1",
                  name: "Hack the Future",
                  category: "AI & ML",
                  participants: "1.2k+",
                },
                {
                  rank: "#2",
                  name: "Build For Bharat",
                  category: "Web3 & Blockchain",
                  participants: "900+",
                },
                {
                  rank: "#3",
                  name: "Code For Change",
                  category: "Sustainability",
                  participants: "780+",
                },
                {
                  rank: "#4",
                  name: "Designverse",
                  category: "UI/UX & Creativity",
                  participants: "560+",
                },
                {
                  rank: "#5",
                  name: "AI Arena",
                  category: "Deep Learning",
                  participants: "1.5k+",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gradient-to-r from-purple-800/40 to-fuchsia-700/30 hover:from-purple-700/60 hover:to-fuchsia-600/40 transition-all duration-300 rounded-xl py-2 px-3 shadow-[0_0_12px_rgba(180,80,255,0.3)]"
                >
                  <p className="w-1/4 text-center font-bold text-purple-300">
                    {item.rank}
                  </p>
                  <p className="w-1/4 text-center">{item.name}</p>
                  <p className="w-1/4 text-center text-zinc-300">
                    {item.category}
                  </p>
                  <p className="w-1/4 text-center text-zinc-400">
                    {item.participants}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Style for animation classes */}
          <style>
            {`
      .drop-shadow-glass {
        filter: drop-shadow(0px 2px 24px rgba(200, 120, 255, 0.28));
      }
      .animate-move-slow {
        animation: moveSlow 6s ease-in-out infinite alternate;
      }
      @keyframes moveSlow {
        0% { transform: translateY(0px) scale(1); }
        100% { transform: translateY(-22px) scale(1.04);}
      }
    `}
          </style>
        </aside>
      </div>
    </section>
  );
};

export default Hackathon;
