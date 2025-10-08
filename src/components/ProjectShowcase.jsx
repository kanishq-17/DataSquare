import React from "react";
import CardSwap, { Card } from "./CardSwap";
import { FaReact, FaNodeJs, FaPython, FaGithub, FaFigma } from "react-icons/fa";
import {
  SiMongodb,
  SiTensorflow,
  SiAdobexd,
  SiNextdotjs,
} from "react-icons/si";

const ResumeProjectShowcase = () => {
  return (
    <section className="Resume-Project-Showcase-Section relative bg-black text-white px-20 pt-24 h-screen overflow-hidden">
      {/* ============================
          Section Heading + Subheading
      ============================ */}
      <div className="absolute top-44 left-20 text-left max-w-xl">
        <h2 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-tight">
          Explore Real Skills
          <br />
          in Action
        </h2>
        <p className="text-gray-400 mt-4 text-lg tracking-wide">
          Peek into portfolios that blend creativity, code, and impact — one
          project at a time.
        </p>
      </div>

      {/* ============================
          CardSwap Container
      ============================ */}
      <div className="w-full h-full relative flex justify-end items-center pr-32 pb-16">
        <div
          className="absolute right-0 bottom-0"
          style={{ height: "500px", width: "900px" }}
        >
          <CardSwap
            cardDistance={60}
            verticalDistance={90}
            delay={1800} // Faster transition for medium pace
            pauseOnHover={false}
            // skewAmount={8}
          >
            {/* ============================
                CARD 1 - Full Stack Explorer
            ============================ */}
            <Card className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 shadow-[0_0_25px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]  w-[450px] h-[800px]">
              <h3 className="text-3xl font-semibold mb-3 text-cyan-300">
                Full Stack Explorer
              </h3>
              <p className="text-gray-300 mb-6 text-base">
                Frontend to Backend Excellence
              </p>

              <div className="bg-gradient-to-br from-cyan-800/30 to-cyan-400/10 rounded-xl h-48 mb-6 flex items-center justify-center text-gray-400 text-sm">
                Dashboard Preview
              </div>

              <div className="flex gap-5 text-4xl text-cyan-400">
                <FaReact />
                <FaNodeJs />
                <SiMongodb />
              </div>

              <button className="mt-8 px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full text-white font-medium hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] ">
                View Project
              </button>
            </Card>

            {/* ============================
                CARD 2 - AI & Data
            ============================ */}
            <Card className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 shadow-[0_0_25px_rgba(200,100,255,0.2)] hover:shadow-[0_0_40px_rgba(200,100,255,0.4)]  w-[450px] h-[500px]">
              <h3 className="text-3xl font-semibold mb-3 text-purple-400">
                AI & Data Innovator
              </h3>
              <p className="text-gray-300 mb-6 text-base">
                Turning Data into Decisions
              </p>

              <div className="bg-gradient-to-br from-purple-800/30 to-pink-400/10 rounded-xl h-48 mb-6 flex items-center justify-center text-gray-400 text-sm">
                Model Visualization
              </div>

              <div className="flex gap-5 text-4xl text-purple-400">
                <FaPython />
                <SiTensorflow />
              </div>

              <button className="mt-8 px-6 py-2.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full text-white font-medium hover:scale-105 hover:shadow-[0_0_25px_rgba(200,100,255,0.4)] ">
                Explore Models
              </button>
            </Card>

            {/* ============================
                CARD 3 - Design
            ============================ */}
            <Card className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 shadow-[0_0_25px_rgba(255,120,150,0.2)] hover:shadow-[0_0_40px_rgba(255,120,150,0.4)]  w-[450px] h-[500px]">
              <h3 className="text-3xl font-semibold mb-3 text-pink-400">
                Creative Designer
              </h3>
              <p className="text-gray-300 mb-6 text-base">Design That Speaks</p>

              <div className="bg-gradient-to-br from-pink-800/30 to-orange-400/10 rounded-xl h-48 mb-6 flex items-center justify-center text-gray-400 text-sm">
                UI Mockup Preview
              </div>

              <div className="flex gap-5 text-4xl text-pink-400">
                <FaFigma />
                <SiAdobexd />
              </div>

              <button className="mt-8 px-6 py-2.5 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full text-white font-medium hover:scale-105 hover:shadow-[0_0_25px_rgba(255,120,150,0.4)] ">
                See Design Shots
              </button>
            </Card>

            {/* ============================
                CARD 4 - Open Source
            ============================ */}
            <Card className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 shadow-[0_0_25px_rgba(0,255,200,0.2)] hover:shadow-[0_0_40px_rgba(0,255,200,0.4)]  w-[450px] h-[500px]">
              <h3 className="text-3xl font-semibold mb-3 text-green-400">
                Open Source Builder
              </h3>
              <p className="text-gray-300 mb-6 text-base">
                Collaborating for Impact
              </p>

              <div className="bg-gradient-to-br from-green-800/30 to-teal-400/10 rounded-xl h-48 mb-6 flex items-center justify-center text-gray-400 text-sm">
                Code Repository Snapshot
              </div>

              <div className="flex gap-5 text-4xl text-green-400">
                <FaGithub />
                <SiNextdotjs />
              </div>

              <button className="mt-8 px-6 py-2.5 bg-gradient-to-r from-green-400 to-teal-500 rounded-full text-white font-medium hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,200,0.4)] ">
                View Repos
              </button>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default ResumeProjectShowcase;
