export default function HeroComingSoon() {

	return (
		<>
			{/* Mask - shows first with scale animation */}
			<div className="masking-image mask fixed z-10 inset-0 flex flex-col justify-center items-center lg:ml-6 ml-4">
				<img
					src="./images/mask.svg"
					alt="logo"
					className="relative h-auto w-3/5 md:w-2/5 lg:w-1/5 object-contain"
				/>
				<h1 className="lg:text-[6rem] text-[3rem] text-center leading-tight opacity-0">
					Coming <br /> May 26th <br /> 2026
				</h1>
			</div>

			{/* Coming Soon - fades in after mask */}
			<div className="ComingSoon ComingSoonStyle circle fixed z-10 inset-0 flex flex-col justify-center items-center">
				<img
					src="./images/fav.png"
					alt="logo"
					className="relative h-auto w-3/5 md:w-2/5 lg:w-1/5 object-contain"
				/>
				<h1 className="lg:text-[6rem] text-[3rem] text-center leading-tight">
					Coming <br /> May 26th <br /> 2026
				</h1>
			</div>
		</>
	)
}