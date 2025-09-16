/* The top hero visuals (backgrounds, play button, trailer button, mask image, logo overlay) */

export default function HeroVisuals(){
    return(
        <div className="hero-section relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
            
            <img 
                src="./images/hero-bg.webp" 
                alt="Main hero background" 
                className="hero_bg absolute inset-0 w-full h-full object-cover" 
            />

            
            <img 
                src="./images/hero-text.webp" 
                alt="Hero text overlay" 
                className="hero_bg absolute inset-0 w-full h-full object-cover" 
            />

            
            <div className="hiding absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 
                          bg-white rounded-full flex items-center justify-center 
                          cursor-pointer hover:opacity-90 hover:scale-110 
                          transition-all duration-300 ease-in-out z-10">
                <img 
                    src="./images/play.png" 
                    alt="play button" 
                    className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 ml-1" 
                />
            </div>

           
            <div className="hiding absolute bottom-4 left-1/2 transform -translate-x-1/2 
                          sm:bottom-6 sm:left-[45%] 
                          md:bottom-8 md:left-[42%] 
                          lg:bottom-[2%] lg:left-[40%] lg:transform-none
                          w-52 h-52
                          flex items-center justify-center z-10">
                <img 
                    src="./images/watch-trailer.png" 
                    alt="Watch trailer button" 
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" 
                />
            </div>

            {/* Masking image */}
            <div className="masking-image mask absolute inset-0 w-full h-full opacity-0">
                <img 
                    src="/images/hero-bg.webp" 
                    alt="Hero background mask" 
                    className="w-full h-full object-cover" 
                />
            </div>

            {/* Second logo overlay - responsive sizing */}
            <div className="absolute top-8 sm:top-12 md:top-14 lg:top-16 flex justify-center w-full z-20">
                <img 
                    className="secondLogo opacity-0
                             w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 
                             object-contain" 
                    src="/images/hero-text.svg" 
                    alt="hero text logo" 
                />
            </div>
        </div>
    )
}