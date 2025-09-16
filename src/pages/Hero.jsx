import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import HeroComingSoon from "../components/HeroComingSoon";
import HeroVisuals from "../components/HeroVisuals";


export default function Hero(){

    gsap.registerPlugin(ScrollTrigger);
	useGSAP(() => {
		gsap.set('.mask', { scale: 3, opacity: 0 });
		gsap.set('.logo', { opacity: 0 });
		gsap.set('.secondLogo',{opacity:0});
        gsap.set('.imageSoon',{opacity:0});
        gsap.set('.ComingSoon',{opacity:0});
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
			.to('.hero_bg', { scale: 0.95, opacity: 0 })
			.to('.mask', { scale: 0.2, opacity: 1, y: '-25%', duration: 3 }, "-=0.2")
			.to('.mask', { opacity: 0 })
			.to('.secondLogo', {opacity:1},'<')
            .to('.logo', {opacity:1,

                onComplete: () => {
                    gsap.to('.secondLogo', {opacity:0}, '-=0.6')
                    gsap.to('.imageSoon', {opacity:1, duration:0.5}, '-=0.2')
                    gsap.to('.ComingSoon', {opacity:1}, '-=0.1')
                    
  }
            })
			
        

	});


    return (
		<section>
			<HeroVisuals />
            <div className='relative h-[-20%] w-full flex flex-col justify-center items-center'>

            <div className=' absolute z-1 flex flex-col justify-center items-center'>
				<img src='./images/fav.png' alt='logo' className='w-80 h-80 logo imageSoon' />
				<h1 className="ComingSoon text-9xl"> Coming <br /> May 26th <br /> 2026</h1>
			</div>
            </div>

		</section>


	)
}