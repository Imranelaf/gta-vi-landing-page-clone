import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import HeroVisuals from "../components/HeroVisuals";


export default function Hero(){

    gsap.registerPlugin(ScrollTrigger);
	useGSAP(() => {
		gsap.set('.mask', { scale: 3, opacity: 0 });
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
			.to('.hero_bg', { scale: 0.95, opacity: 0, ease: 'power1.inOut' })
			.to('.mask', { scale: 0.2, opacity: 1, y: '-25%', duration: 3, ease: 'power1.inOut' }, "-=0.2")
			.to('.mask', { opacity: 0 })
			.to('.secondLogo', {opacity:1, ease: 'power1.inOut'},'<')
			
            .to('.ComingSoon', { 
        opacity: 1,  
        x: 0,     
        y: 0,    
        ease: 'power1.inOut' 
      })
	  .to('.secondLogo', {opacity:0, ease: 'power1.inOut'},)
	  .to('.ComingSoon', { 
        opacity: 0,  
        x: 0,     
        y: 0,    
        ease: 'power1.inOut' 
      }, '-=0.2')
			
        

	});


    return (
		<section>
			<HeroVisuals />
            

           <div className='ComingSoon fixed z-10 flex flex-col justify-center items-center sm:right-[5%] sm:top-[1%] lg:right-[35.5%] lg:top-[7%] '>
  				<img src='./images/fav.png' alt='logo' className='w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80' />
				<h1 className="text-9xl">Coming <br /> May 26th <br /> 2026</h1>
			</div>

           

		</section>


	)
}