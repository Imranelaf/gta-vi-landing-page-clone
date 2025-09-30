import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function PostCard() {

    const cardVideoRef = useRef(null);
    const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200% top",
        pin: true,
        scrub: true,
        anticipatePin: 1,
      },
    });

    // Animate only when metadata is loaded
    cardVideoRef.current.onloadedmetadata = () => {
      tl.to(
          cardVideoRef.current,
          {
            currentTime: cardVideoRef.current.duration,
            duration: 3,
            ease: "power1.inOut",
          },
        
        )
        
    };
  }, []);



    return (
        
        <section ref={sectionRef} className="min-h-screen w-full flex justify-center items-center p-4 bg-gradient-to-tr from-black to-indigo-900">
            <div className="relative lg:w-4/5 lg:h-4/5 w-full h-[50vh] aspect-video shadow-2xl bg-white  overflow-hidden">
                {/* Overlay Image - Top Left */}
                <img
                    src="/images/overlay.webp"
                    alt="Overlay"
                    className="absolute z-20 w-full h-full object-fit"
                />

                {/* Background Video */}
                <video
                ref={cardVideoRef}
                    muted
                    playsInline
                    preload="auto"
                    src='/videos/postcard-vd.mp4'
                    className="absolute inset-0 w-full h-full object-cover z-10"
                />

                {/* Button - Center Bottom */}
                <div className="absolute inset-x-0 bottom-8 flex justify-center z-30 hidden lg:flex">
                    <button className="bg-white hover:bg-gray-100 transition-colors duration-200 px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-lg font-medium text-gray-800 text-sm md:text-base">
                        Explore Lioneda Key
                    </button>
                </div>

            </div>
        </section>
    );
}