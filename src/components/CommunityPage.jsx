const CommunityPage = () => {
  return (
    <div className="community-section bg-black text-white px-5 pt-25 ">
      {/* community-section heading */}
      <div className="mb-5">
        <h1 className="font-bold text-6xl mb-5">
          A Space Where Every <br />
          Creator Belongs.
        </h1>
        <h3 className="text-zinc-500 mb-5 text-lg">
          A community of doers, dreamers, and disruptors — all under one square.
        </h3>
        <button class="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group cursor-pointer">
          <span class="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Find Your Tribe
        </button>
      </div>

      {/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* */}

      {/* community-section catalog */}

      <div className="w-full h-154 flex justify-between gap-3 mt-15">
        {/* part 1 - dashboard + task management, public community, trending-domain*/}
        <div className="dashboard-public-task flex flex-col justify-between gap-3 h-full w-1/2">
          {/* area 1 - public-community, trending-domain */}
          <div className="w-full h-2/3 flex justify-between gap-3">
            <div className="trending-domain w-1/2 h-full rounded-2xl outline outline-purple-300 hover:border-3 border-purple-600 pt-[12%] pl-5">
              <h1 className="text-purple-800 font-bold text-3xl mb-3 w-1/2">
                What’s Hot Right Now
              </h1>
              <p className="w-2/3">
                Explore the latest fields shaping innovation — from data to AI
              </p>
            </div>
            <div className="public-community w-1/2 h-full rounded-2xl outline outline-purple-300 hover:border-3 border-purple-600 pt-[12%] pl-5">
              <h1 className="text-purple-800 font-bold text-3xl mb-3 w-1/2">
                Connect & Collaborate
              </h1>
              <p className="w-4/5">
                Meet creators, developers, and thinkers shaping tomorrow
                together
              </p>
            </div>
          </div>
          {/* area 2 - dashboard */}
          <div className="dashboard-task-management w-full h-full rounded-2xl outline outline-purple-300">
            <div className="flex flex-col w-full h-full pt-[20%] pl-5 box-border">
              <h1 className="text-purple-800 font-bold text-6xl mb-5 w-1/2">
                Your Space, Your Flow
              </h1>
              <p className="w-2/4">
                Organize goals, track tasks, and manage your journey in one
                place
              </p>
            </div>
          </div>
        </div>

        {/* -*-*-*-*-*-*-*-*-*-*- */}

        {/* part 2 - mentorship + referral, interview prep, challenges*/}
        <div className="mentorship-referral-interview flex flex-col justify-between gap-3 h-full w-1/2">
          {/* area 1 - mentorship & referral  */}
          <div className="mentorship-referral w-full h-full rounded-2xl outline outline-purple-300">
            <h1 className="text-purple-800 font-bold text-6xl mb-5 pt-[28%] pl-5">
              Learn, Guide, Grow
            </h1>
            <p className="pl-5 w-2/4">
              Find mentors or be one — build meaningful connections that lift
              everyone
            </p>
          </div>
          {/* area 2 - interview, trending domain  */}
          <div className="w-full h-2/3 flex justify-between gap-3">
            <div className="interview-prep public-community w-1/2 h-full rounded-2xl outline outline-purple-300 pt-[12%] pl-5">
              <h1 className="text-purple-800 font-bold text-3xl mb-3 w-2/3">
                Ready for the Real World
              </h1>
              <p className="w-64">
                Practice with experts, mock tests, and real interview
                experiences
              </p>
            </div>
            <div className="challenges task-management w-1/2 h-full rounded-2xl outline outline-purple-300 pt-[12%] pl-5">
              <h1 className="text-purple-800 font-bold text-3xl mb-3 w-2/3">
                Rise to Every Challenge
              </h1>
              <p className="w-64">
                Test your skills, compete with peers, and climb the leaderboard
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
