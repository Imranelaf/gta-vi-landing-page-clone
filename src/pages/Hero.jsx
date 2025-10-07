import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import HeroVisuals from "../components/HeroVisuals";
import HeroComingSoon from '../components/HeroComingSoon';


export default function Hero() {

	gsap.registerPlugin(ScrollTrigger);
	useGSAP(() => {
		gsap.set('.mask', { scale: 12, opacity: 0, y:'300%' });
		gsap.set('.hero_bg', { scale: 1.25 });
		gsap.set('.secondLogo', { opacity: 0 });
		gsap.set('.imageSoon', { opacity: 0 });
		gsap.set('.ComingSoon', {
			maskSize: '0% 0%',
			maskPosition: '50% 100%',
			opacity: 0
		});

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
			.to('.mask', { scale: 1, opacity: 1, duration: 3, y:0, ease: 'power1.inOut' }, "-=0.2")
			.to('.ComingSoon', {
				opacity: 1,
				maskSize: '400% 400%',
				maskPosition: '50% 100%',
				duration: 3,
				ease: 'power1.inOut'
			}, "-=0.5")
			.to('.mask', { opacity: 0 }, '-=0.5')
			.to('.ComingSoon', {
				opacity: 0
			})
			



	});

	return (
		<section>
			<HeroVisuals />
			<HeroComingSoon />
		</section>


	)
}