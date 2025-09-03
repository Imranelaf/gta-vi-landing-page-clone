import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import CommingSoon from './CommingSoon.jsx'


export default function Hero(){
	gsap.registerPlugin(ScrollTrigger);
useGSAP(()=>{
	gsap.set('.mask',{scale:2.5, opacity:0});
	const tl = gsap.timeline({

	scrollTrigger:{

	trigger:'.hero-section',
	pin:true,
	start:'top top',
	end: '+=250%',
	scrub: 2.5	
	}
})

	tl
	.to('.hiding', {opacity:0, ease: 'power1.inOut'})
	.to('.hero_bg',{scale:0.95, opacity:0} )
	.to('.mask', {scale:0.3, opacity:1, y:'-25%'}, "-=0.1")
	.to('.mask', {opacity:0})	
	
	
});
	
	
	return(
		<div className="hero-section felx items-center justify-center">
	
		<img src="./images/hero-bg.webp" alt="Hero backGround" className="hero_bg"/>

		<img src="./images/hero-text.webp" alt="Hero text" className="felx absolute top-[0%] hero_bg" />

		<div className="hiding w-20 h-20 bg-white p-8 rounded-full flex absolute top-[50%] left-[50%] cursor-pointer hover:opacity-90 hover:scale-125 duration-300 ease-in-out">
		<img src="./images/play.png" alt="play botton" />
		</div>
		<div className="hiding w-44 h-44 flex absolute bottom-[2%] left-[40%]">
		<img src="./images/watch-trailer.png" alt="watch trailer" />
		</div>		

		<div className="masking-image mask absolute top-[0] w-full h-full">
  		<img src="/images/hero-bg.webp" alt="Hero Background" className="w-full h-full object-cover" />
		</div>	
		
	
		</div>	
)
}