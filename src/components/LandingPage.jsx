import gsap from "gsap";
import DecryptedText from "./DecryptedText";
import { useEffect, useRef, useState } from "react";

const LandingPage = () => {
  const userCardRef = useRef(null);
  const progressCardRef = useRef(null);
  const colorPaletteRef = useRef(null);
  const filterRef = useRef(null);
  const leaderboardRef = useRef(null);

  const [userCard, setUserCard] = useState([
    {
      id: 1,
      img: "/anupam_mishra.jpg",
      designation: "ANALYST",
      name: "Anupam Mishra",
      username: "@mishraji_datawale",
      skills: "32",
      projects: "15",
      community: "2.5k",
      lang1: "Python",
      lang2: "SQL",
      isShow: true,
    },
    {
      id: 2,
      img: "/kanishq_sodhani.jpg",
      designation: "DEVELOPER",
      name: "Kanishq Sodhani",
      username: "@virusbaba",
      skills: "24",
      projects: "8",
      community: "1.2k",
      lang1: "JavaScript",
      lang2: "React",
      isShow: false,
    },
  ]);

  const [color] = useState([
    {
      id: 0,
      bg: "bg-pink-500",
      outline: "outline-4 outline-pink-300",
    },
    {
      id: 1,
      bg: "bg-blue-500",
      outline: "outline-4 outline-blue-300",
    },
    {
      id: 2,
      bg: "bg-green-500",
      outline: "outline-4 outline-green-300",
    },
    {
      id: 3,
      bg: "bg-yellow-500",
      outline: "outline-4 outline-yellow-300",
    },
    {
      id: 4,
      bg: "bg-red-500",
      outline: "outline-4 outline-red-300",
    },
  ]);

  const [activity] = useState([
    {
      id: 0,
      text: "Learning",
      bg: "bg-black",
      textColor: "text-white",
    },
    {
      id: 1,
      text: "Collabs",
      bg: "bg-black",
      textColor: "text-white",
    },
    {
      id: 2,
      text: "Challenges",
      bg: "bg-black",
      textColor: "text-white",
    },
  ]);

  const [feedCards] = useState([
    // ? array 1
    [
      {
        img: "/kanishq_sodhani.jpg",
        name: "Kanishq Sodhani",
        task: "Completed 'UI Systems 101'",
        time: "3min",
        notification: "CERTIFIED",
      },
      {
        img: "/andrew.jpg",
        name: "Andrew",
        task: "Preparing for Next.js Masterclass",
        time: "1h",
        notification: "UPCOMING",
      },
      {
        img: "/sara_malik.jpg",
        name: "Sara Malik",
        task: "Hosting 'AI Prompt Spring'",
        time: "now",
        notification: "LIVE",
      },
    ],
    // ? array 2
    [
      {
        img: "/riya_verma.jpg",
        name: "Riya Verma",
        task: "Shared 'React GSAP Animation Guide'",
        time: "8min",
        notification: "POSTED",
      },
      {
        img: "/rohit_singh.jpg",
        name: "Rohit Singh",
        task: "Achieved 'Fullstack Developer Badge'",
        time: "2h",
        notification: "CERTIFIED",
      },
      {
        img: "/emily_clark.jpg",
        name: "Emily Clark",
        task: "Started 'AI Tools in Design' course",
        time: "10h",
        notification: "ONGOING",
      },
    ],
    // ? array 3
    [
      {
        img: "/arjun_mehta.jpg",
        name: "Arjun Mehta",
        task: "Won 1st Place in 'Hack4Change' Hackathon",
        time: "5min",
        notification: "ACHIEVED",
      },
      {
        img: "/nisha_patel.jpg",
        name: "Nisha Patel",
        task: "Uploaded new project — 'HealthTrack App'",
        time: "45min",
        notification: "PUBLISHED",
      },
      {
        img: "/liam_ross.jpg",
        name: "Liam Ross",
        task: "Attending 'Dev Community Meetup'",
        time: "today",
        notification: "LIVE",
      },
    ],
  ]);

  // * this active counter is attached with "color"
  const [activeCounter, setActiveCounter] = useState(0);

  // * this counter is attached with "activity"
  const [counter, setCounter] = useState(0);

  // * this counter is attached with "feed cards"
  const [feedCounter, setFeedCounter] = useState(0);

  //* change color outline
  function changeOutline() {
    const interval = setInterval(() => {
      setActiveCounter((prev) => (prev + 1) % color.length);
    }, 3000);

    return () => clearInterval(interval);
  }

  //* change background and text color
  function changeBG() {
    const interval = setInterval(() => {
      setCounter((prev) => (prev + 1) % activity.length);
    }, 4000);

    return () => clearInterval(interval);
  }

  // * display and change feed cards
  function displayFeedCard() {
    const interval = setInterval(() => {
      setFeedCounter((count) => (count + 1) % feedCards.length);
    }, 3000);

    return () => clearInterval(interval);
  }

  //* display User
  function displayUser() {
    const interval = setInterval(() => {
      setUserCard((prevCard) =>
        prevCard.map((user) => ({
          ...user,
          isShow: !user.isShow,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }

  //* moving cards
  useEffect(() => {
    gsap.to(userCardRef.current, {
      x: 2,
      y: -2,
      duration: 1,
      delay: 1,
      ease: "linear",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(colorPaletteRef.current, {
      x: -2,
      y: -2,
      duration: 1,
      ease: "linear",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(progressCardRef.current, {
      y: -1,
      x: 2,
      duration: 1,
      ease: "linear",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(filterRef.current, {
      x: -2,
      y: 3,
      duration: 1,
      ease: "linear",
      yoyo: true,
      repeat: -1,
    });
    gsap.to(leaderboardRef.current, {
      x: 2,
      y: 3,
      duration: 1,
      ease: "linear",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  //* cleaning all functions
  useEffect(() => {
    const displayCleanUp = displayUser();
    const colorCleanUp = changeOutline();
    const BGCleanUp = changeBG();
    const feedCardCleanUp = displayFeedCard();
    return displayCleanUp, colorCleanUp, BGCleanUp, feedCardCleanUp;
  }, [color.length, feedCards.length, activity.length]);

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
            <div
              ref={colorPaletteRef}
              className="color-combinators w-2/4 rounded-2xl outline-3 outline-white bg-zinc-200 flex justify-around items-center gap-2 px-3 py-4 ml-[49.5%]"
            >
              {color.map((color, index) => (
                <div
                  key={index}
                  className={`pink w-7 h-7 rounded-md ${color.bg} ${
                    activeCounter === index ? color.outline : ""
                  }`}
                ></div>
              ))}
            </div>

            {/* ✅ Renamed and re-purposed */}
            <div
              ref={progressCardRef}
              className="task-progress bg-zinc-200 outline-3 outline-white rounded-3xl w-full h-full px-5 py-3"
            >
              {/* Tabs for type of activity */}

              <div className="flex gap-3 items-center">
                {activity.map((active, index) => (
                  <h3
                    key={index}
                    className={`${counter === index ? active.bg : ""} ${
                      counter === index ? active.textColor : ""
                    }  rounded-xl px-3 py-2`}
                  >
                    {active.text}
                  </h3>
                ))}
              </div>

              {/* 🧑‍💻 Dynamic activity feed cards */}
              <div className="Learning-status mt-5 flex flex-col gap-3 max-h-66">
                {/* User Activity 1 */}
                {feedCards[feedCounter].map((singleCard) => (
                  <div className="relative bg-white rounded-3xl py-3 px-5 flex items-center gap-3">
                    <p className="bg-green-500 text-white text-[.6rem] rounded-full p-1 absolute -top-2 left-24">
                      {singleCard.notification}
                    </p>
                    <img
                      src={singleCard.img}
                      alt=""
                      className="w-10 h-10 bg-yellow-400 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{singleCard.name}</h4>
                      <p className="text-sm text-zinc-600">{singleCard.task}</p>
                    </div>
                    <p className="ml-auto text-sm text-zinc-500">
                      {singleCard.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 🧠 CARD 2: Featured Profile / Learner Spotlight */}

          <div ref={userCardRef} className="card2 user-card w-1/4 mt-25">
            {userCard.map((user) => (
              <div
                key={user.id}
                className={`relative w-full bg-zinc-200 rounded-3xl outline-white p-4 flex flex-col justify-center gap-3 shadow-lg ${
                  user.isShow ? "" : "hidden"
                } `}
              >
                {/* Profile Section */}
                <div className="user-details bg-white w-full text-center h-1/2 rounded-2xl">
                  <div className="user-img w-22 h-22 absolute -top-5 left-37">
                    <img
                      src={user.img}
                      alt=""
                      className="w-full h-full rounded-full object-cover outline-4 outline-neutral-400"
                    />
                    <h5 className="bg-blue-500 text-white text-[.7rem] font-semibold rounded-full absolute -bottom-1 left-3 px-2">
                      <DecryptedText
                        speed={50}
                        sequential="true"
                        animateOn="view"
                        useOriginalCharsOnly="true"
                        text={user.designation}
                      />
                    </h5>
                  </div>

                  <h2 className="font-extrabold text-2xl mt-15 mb-1">
                    <DecryptedText
                      speed={50}
                      sequential="true"
                      animateOn="view"
                      useOriginalCharsOnly="true"
                      text={user.name}
                    />
                  </h2>
                  <h5 className="font-medium text-zinc-500">
                    <DecryptedText
                      speed={50}
                      sequential="true"
                      animateOn="view"
                      useOriginalCharsOnly="true"
                      text={user.username}
                    />
                  </h5>

                  <div className="user-highlight-area flex justify-around items-center w-full my-5">
                    <div>
                      <h2 className="font-bold">
                        <DecryptedText
                          speed={50}
                          sequential="true"
                          animateOn="view"
                          useOriginalCharsOnly="true"
                          text={user.skills}
                        />
                      </h2>
                      <h5 className="text-zinc-500 text-center">Skills</h5>
                    </div>
                    <div>
                      <h2 className="font-bold">
                        <DecryptedText
                          speed={50}
                          sequential="true"
                          animateOn="view"
                          useOriginalCharsOnly="true"
                          text={user.projects}
                        />
                      </h2>
                      <h5 className="text-zinc-500">Projects</h5>
                    </div>
                    <div>
                      <h2 className="font-bold">
                        {" "}
                        <DecryptedText
                          speed={50}
                          sequential="true"
                          animateOn="view"
                          useOriginalCharsOnly="true"
                          text={user.community}
                        />
                      </h2>
                      <h5 className="text-zinc-500">Community</h5>
                    </div>
                  </div>
                </div>

                {/* Skills Section */}
                <div className="user-skills w-full text-left h-36 flex flex-col justify-between font-semibold">
                  <div className="rounded-xl bg-white py-2 px-4">
                    <h3>
                      <DecryptedText
                        speed={50}
                        sequential="true"
                        animateOn="view"
                        useOriginalCharsOnly="true"
                        text={user.lang1}
                      />
                      <span className="text-neutral-600"> Expert</span>
                    </h3>
                  </div>
                  <div className="rounded-xl bg-white py-2 px-4">
                    <h3>
                      <DecryptedText
                        speed={50}
                        sequential="true"
                        animateOn="view"
                        useOriginalCharsOnly="true"
                        text={user.lang2}
                      />
                      <span className="text-neutral-600"> Advanced</span>
                    </h3>
                  </div>
                  <div className="rounded-xl bg-neutral-300 py-2 px-4">
                    <h3>Add Skill</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 🏆 CARD 3: Quick Filter + Leaderboard */}
          <div className="card3 w-1/3 flex flex-col gap-8">
            {/* Quick Filter */}
            <div
              ref={filterRef}
              className="quick-filter w-2/4 rounded-2xl bg-zinc-200 py-4 px-2"
            >
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
            <div
              ref={leaderboardRef}
              className="Leaderboard w-3/4 rounded-2xl bg-zinc-200"
            >
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
