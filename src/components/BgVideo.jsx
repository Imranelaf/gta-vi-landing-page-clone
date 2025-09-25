import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function Video({ link, id }) {
  const videoRef = useRef(null);
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
    videoRef.current.onloadedmetadata = () => {
      tl.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power1.inOut" }
      )
        .to(
          videoRef.current,
          {
            currentTime: videoRef.current.duration,
            duration: 3,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(sectionRef.current, {
          opacity: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen z-10" id={id}>
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        src={link}
        className="h-screen w-screen inset-0 object-cover"
      />
    </section>
  );
}
