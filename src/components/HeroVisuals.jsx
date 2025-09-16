/* The top hero visuals (backgrounds, play button, trailer button, mask image, logo overlay) */

export default function HeroVisuals(){


    return(

        <div className="hero-section flex flex-col items-center justify-center">
            <img src="./images/hero-bg.webp" alt="Hero backGround" className="hero_bg" />

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

				<div className="absolute flex justify-center top-14 ">
							<img className="secondLogo h-80 w-80" src="/images/hero-text.svg" alt="hero text" />
                </div>
        </div>


    )
}