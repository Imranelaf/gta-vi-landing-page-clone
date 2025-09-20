import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import HeroVisuals from "../components/HeroVisuals";


export default function Hero(){

      gsap.registerPlugin(ScrollTrigger);
	useGSAP(() => {
		gsap.set('.mask', { scale: 3, opacity: 0 });
		gsap.set('.hero_bg', { scale: 1.25});
		gsap.set('.secondLogo',{opacity:0});
        gsap.set('.imageSoon',{opacity:0});
        gsap.set('.ComingSoon',{opacity:0, scale:1.3});

		const tl = gsap.timeline({

			scrollTrigger: {
				trigger: '.hero-section',
				pin: true,
				start: 'top top',
				end: '+=200%',
				scrub: 3,
                invalidateOnRefresh: true

			}
		})

		tl
			.to('.hiding', { opacity: 0, ease: 'power1.inOut' })
			.to('.hero_bg', { scale: 1, opacity: 0, ease: 'power1.inOut' })
			.to('.mask', { scale: .9, opacity: 1, duration: 3, y:'10%', ease: 'power1.inOut' }, "-=0.2")
            .to('.ComingSoon', { 
        opacity: 1,
		scale:1,
		duration:2,    
        ease: 'power1.inOut' 
      }, "-=1")
	  .to('.mask', { opacity: 0 })
	  
	  .to('.ComingSoon', { 
        opacity: 0,     
        ease: 'power1.inOut' 
      }, '-=0.2')
			
        

	});

    return (
		<section>
			<HeroVisuals />
            
<div className="ComingSoon fixed z-50 inset-0 flex flex-col justify-center items-center">
  <img
    src="./images/fav.png"
    alt="logo"
    className="relative h-auto w-3/5 md:w-2/5 lg:w-1/5 object-contain"
  />
  <h1 className="lg:text-[6rem] text-[3rem] text-center leading-tight">
    Coming <br /> May 26th <br /> 2026
  </h1>
</div>


           

		</section>


	)
}