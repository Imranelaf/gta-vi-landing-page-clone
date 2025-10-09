import { useGSAP } from "@gsap/react";
import Video from "./BgVideo";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useMemo } from "react";

export default function CharacterSection({ data, switching = false }) {


  const { name, slogan, description, images, ...rightData } = data;

const leftData = useMemo(
  () => ({ name, slogan, description, mainImage: images[0] }),
  [name, slogan, description, images]
);
  rightData.images = images;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.Character',
        start: "top 80%",
        end: "bottom top", 
        scrub: true,
        
      },
    });

    tl.to(".rightImages", {
      y: "-30%",
      duration: 2.5,
      ease: "power1.inOut",
    });
  });

  return (
    <section
      className="flex flex-col items-start w-full relative z-30"
      id={data.id}
    >
      <div>
        <Video link={data.video} id={data.id} vStyle={data.videoPosition} />
      </div>

      {switching ? (
        <div
          className="Character flex flex-col lg:flex-row items-start w-full min-h-screen infos absolute top-[200vh] z-40"
        >
          <RightContent data={rightData} />
          <LeftContent data={leftData} flip={switching} />
        </div>
      ) : (
        <div
          className="Character flex flex-col lg:flex-row items-start w-full min-h-screen infos absolute top-[200vh] z-40"
        >
          <LeftContent data={leftData} />
          <RightContent data={rightData} />
        </div>
      )}
    </section>
  );
}
