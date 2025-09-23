import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function Jason() {
  const bgVideo = useRef(null);
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.set('.infos', { y: '300vh' });
    gsap.set('.Character', { opacity: 0 });
    

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Character",
        start: "top top",
        end: "+=250% top",
        pin: true,
        scrub: 4, 
        anticipatePin: 1,
      },
    });
   
    

    bgVideo.current.onloadedmetadata = () => {
      tl.to('.Character', { opacity: 1, duration: 2, ease: 'power1.inOut' })
      .to(bgVideo.current, { currentTime: bgVideo.current.duration, duration: 3, ease: 'none' }, '<')
      .to('.Character', { opacity: 0, ease: 'power1.inOut' });
    }
   
  });

  return (
    <section className="flex flex-col items-start w-full w-auto relative">
      {/* Background video container */}
      <div className="Character absolute  z-10">
        <video
          ref={bgVideo}
          muted
          playsInline
          preload="auto"
          src="/videos/output1.mp4"
          className="h-screen w-screen inset-0 object-cover"
        />
      </div>
      
      <div className="flex flex-col lg:flex-row items-start w-full min-h-screen infos">
        {/* Left content */}
        <div className="flex-1 p-6 lg:p-12 lg:ml-64">
          <h1 className="carachterName text-2xl lg:text-4xl font-bold mb-3">Jason Duval</h1>
          <h3 className="carachterSlogan text-lg lg:text-xl mb-3">
            Jason wants an easy life, but things just keep getting harder.
          </h3>
          <p className="carachterP text-sm lg:text-base leading-relaxed">
            Jason grew up around grifters and crooks. After a stint in the Army
            trying to shake off his troubled teens, he found himself in the Keys
            doing what he knows best, working for local drug runners. It might be
            time to try something new.
          </p>

          {/* Main image block */}
          <div className="group relative lg:h-screen my-6 w-full overflow-hidden shadow-lg bg-yellow-100">
            <img
              src="./images/jason-2.webp"
              alt="image1"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-95"
            />
            <button className="absolute bottom-3 right-3 h-10 w-10 font-extrabold rounded-full bg-white opacity-60 scale-110 font-bold shadow-md transition">
              +
            </button>
          </div>
        </div>

        {/* Right content (stack of images) */}
        <div className="flex-1 lg:w-1/4 lg:h-screen space-y-6">
          {/* Top image */}
          <div className="group relative w-full lg:h-3/4 overflow-hidden shadow-lg bg-yellow-100">
            <img
              src="./images/jason-3.webp"
              alt="image2"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-95"
            />
            <button className="absolute bottom-3 right-3 h-10 w-10 font-extrabold rounded-full bg-white opacity-60 scale-110 font-bold shadow-md transition">
              +
            </button>
          </div>

          {/* Bottom image */}
          <div className="group relative lg:w-1/2 overflow-hidden shadow-lg bg-yellow-100">
            <img
              src="./images/jason-1.webp"
              alt="image3"
              className="w-full h-full object-cover sm:h-80 md:h-96 object-cover transition-transform duration-700 ease-in-out group-hover:scale-95"
            />
            <button className="absolute bottom-3 right-3 h-10 w-10 font-extrabold rounded-full bg-white opacity-60 scale-110 font-bold shadow-md transition">
              +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}