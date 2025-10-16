import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MentorshipReferral = () => {
  const cardsRef = useRef([]); // 🔹 to store multiple refs

  const [images] = useState([
    "/referral-1.png",
    "/referral-2.png",
    "/referral-4.png",
    "/referral-3.png",
  ]);

  useEffect(() => {
    // 🔹 Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // 🔹 Loop through each card and apply animation
    cardsRef.current.forEach((card) => {
      if (!card) return; // skip if null

      gsap.to(card, {
        scale: 0.5, // shrink slightly
        opacity: 0, // fade out
        rotate: "10",
        filter: "blur(8px)", // add blur for nice depth
        scrollTrigger: {
          trigger: card,
          start: "top 12%", // when top of card hits viewport center
          end: "bottom top", // when bottom leaves top of viewport
          scrub: true, // smooth transition
          // markers: true, // uncomment to debug
        },
      });
    });
  }, []);

  return (
    <section className="w-full bg-black py-20 px-5 min-h-screen relative">
      {/* Section Heading */}
      <header className="text-white text-center text-9xl font-bold absolute top-0 left-1/7 z-0 mt-25 ">
        <h1>Key Features</h1>
      </header>

      {/* Referral Cards */}
      <div className="referral-container flex flex-col justify-center items-center gap-6 z-10 mt-32 ">
        {[1, 2, 3, 4].map((num, index) => (
          <article
            key={num}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`card card-${num} w-[90%] h-150 rounded-2xl sticky top-20 
            ${
              index === 0
                ? "bg-purple-600 shadow-[0px_-28px_50px_12px_rgba(0,0,0,1)]"
                : ""
            }
            ${index === 1 ? "bg-blue-600" : ""}
            ${index === 2 ? "bg-teal-600" : ""}
            ${index === 3 ? "bg-orange-600" : ""} relative text-white`}
          >
            {/* Card Image */}
            {images.map((img) => (
              <img
                key={img}
                src={images[index]}
                alt="Feature Visual"
                className="w-80 h-80 outline outline-white absolute top-1/4 left-125"
              />
            ))}

            {/* Description */}
            <p className="font-semibold absolute top-15 w-1/4 left-15 text-xl leading-relaxed">
              {index === 0
                ? "Learn from experienced mentors who’ve walked the path you’re on. Get one-on-one guidance, feedback, and roadmaps tailored to your goals."
                : ""}
              {index === 1
                ? "Connect with like-minded learners, join study groups, and collaborate on projects that challenge and grow you."
                : ""}
              {index === 2
                ? "When you grow with community, your effort gets noticed. Earn real-world referrals from mentors and peers who trust your skill."
                : ""}
              {index === 3
                ? "Every success story starts with a small push. Inspire others by sharing your journey — from mentee to mentor."
                : ""}
            </p>

            {/* Card Title */}
            <h2 className="font-semibold pl-15 text-7xl w-1/3 absolute bottom-15">
              {index === 0 ? "Find Your Mentor" : ""}
              {index === 1 ? "Build Together" : ""}
              {index === 2 ? "Earn Referrals" : ""}
              {index === 3 ? "Become the Next Guide" : ""}
            </h2>

            {/* Card Subtext */}
            <h3 className="absolute right-25 top-1/3 w-1/5 font-light text-2xl leading-snug">
              {index === 0
                ? "Personalized mentorship for every domain — coding, design, AI, product, and beyond."
                : ""}
              {index === 1
                ? "Collaboration is the shortcut to innovation. Share, learn, and create with your peers."
                : ""}
              {index === 2
                ? "Your work speaks for you — let the community open doors to your next opportunity."
                : ""}
              {index === 3
                ? "Grow the circle — teach what you’ve learned, mentor others, and shape future creators."
                : ""}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MentorshipReferral;
