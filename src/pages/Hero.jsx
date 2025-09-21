import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import HeroVisuals from "../components/HeroVisuals";
import HeroComingSoon from '../components/HeroComingSoon';


export default function Hero(){

      gsap.registerPlugin(ScrollTrigger);
	useGSAP(() => {
		gsap.set('.mask', { scale: 5, opacity: 0 });
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
			.to('.mask', { scale: .8, opacity: 1, duration: 3, y:'10%', ease: 'power1.inOut' }, "-=0.2")
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
			<HeroComingSoon />
		</section>


	)
}