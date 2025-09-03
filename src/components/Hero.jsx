import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useEffect} from "react";


export default function Hero(){
	gsap.registerPlugin(ScrollTrigger);




	
	
	return(
		<div className="hero-section felx items-center justify-center">
	
		<img src="./images/hero-bg.webp" alt="Hero backGround"/>

		<img src="./images/hero-text.webp" alt="Hero text" className="felx absolute top-[0%]" />

		<div className="w-20 h-20 bg-white p-8 rounded-full flex absolute top-[50%] left-[50%] cursor-pointer hover:opacity-90 hover:scale-[1.2] duration-300 ease-in-out">
		<img src="./images/play.png" alt="play botton" />
		</div>
		<div className="w-44 h-44 flex absolute bottom-[-2%] left-[40%]">
		<img src="./images/watch-trailer.png" alt="watch trailer" />
		</div>		
		</div>	
)
}