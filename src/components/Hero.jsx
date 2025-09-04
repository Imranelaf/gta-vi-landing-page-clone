import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Hero(){
	gsap.registerPlugin(ScrollTrigger);
useGSAP(()=>{
	gsap.set('.mask',{scale:3, opacity:0});
	gsap.set('logo', {opacity:0})
	const tl = gsap.timeline({

	scrollTrigger:{
	trigger:'.hero-section',
	pin:true,
	start:'top top',
	end: '+=200%',
	scrub: 2.5,
		
	}
})

	tl
	.to('.hiding', {opacity:0, ease: 'power1.inOut'})
	.to('.hero_bg',{scale:0.95, opacity:0} )
	.to('.mask', {scale:0.3, opacity:1, y:'-25%',duration:3}, "-=0.2")
	.to('.mask', {opacity:0})
	.to('.soon', {duration: 1, ease: 'power1.inOut', maskImage: 'radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)' })

	
	
	



	
	
});
	
	
	return(
			<section>
			<div className="hero-section flex flex-col items-center justify-center">
		
			<img src="./images/hero-bg.webp" alt="Hero backGround" className="hero_bg"/>

			<img src="./images/hero-text.webp" alt="Hero text" className="flex absolute top-[0%] hero_bg" />

			<div className="hiding w-20 h-20 bg-white p-8 rounded-full flex absolute top-[50%] left-[50%] cursor-pointer hover:opacity-90 hover:scale-125 duration-300 ease-in-out">
			<img src="./images/play.png" alt="play botton" />
			</div>
			<div className="hiding w-44 h-44 flex absolute bottom-[2%] left-[40%]">
			<img src="./images/watch-trailer.png" alt="watch trailer" />
			</div>		

			<div className="masking-image mask absolute top-[0] w-full h-full">
	  		<img src="/images/hero-bg.webp" alt="Hero Background" className="w-auto h-auto object-cover" />
			</div>
				
			</div>	
				  
				<div className=' soon flex flex-col justify-center items-center'>
				<img src='./images/fav.png' alt='logo' className='w-48 h-48 logo' />	
				<h1 className="ComingSoon text-9xl"> Coming <br /> May 26th <br /> 2026</h1>
				</div>

			</section>
			
		
)
}