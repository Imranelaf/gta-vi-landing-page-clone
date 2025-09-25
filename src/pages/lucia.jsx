
import Video from "../components/BgVideo";

export default function Lucia() {


  return (
    <section className="flex flex-col items-start w-full w-auto relative">
      {/* Background video container */}
      <div>
     <Video link="/videos/output2.mp4" id="lucia" />

     </div>
      
      <div className="flex flex-col lg:flex-row items-start w-full min-h-screen infos absolute top-[200vh] z-[50]">
        {/* Left content */}
        <div className="flex-1 p-6 lg:p-12 lg:ml-64">
          <h1 className="carachterName text-2xl lg:text-4xl font-bold mb-3">lucia Duval</h1>
          <h3 className="carachterSlogan text-lg lg:text-xl mb-3">
            lucia wants an easy life, but things just keep getting harder.
          </h3>
          <p className="carachterP text-sm lg:text-base leading-relaxed">
            lucia grew up around grifters and crooks. After a stint in the Army
            trying to shake off his troubled teens, he found himself in the Keys
            doing what he knows best, working for local drug runners. It might be
            time to try something new.
          </p>

          {/* Main image block */}
          <div className="group relative lg:h-screen my-6 w-full overflow-hidden shadow-lg bg-yellow-100">
            <img
              src="./images/lucia-2.webp"
              alt="image1"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-95"
            />
            <button className="absolute bottom-3 right-3 h-10 w-10 font-extrabold rounded-full bg-white opacity-60 scale-110 font-bold shadow-md transition">
              +
            </button>
          </div>
        </div>

        {/* Right content (stack of images) */}
        <div className="flex-1 lg:w-1/4 lg:h-screen space-y-6 lg:mt-110">
          {/* Top image */}
          <div className="group relative w-full lg:h-3/4 overflow-hidden shadow-lg bg-yellow-100">
            <img
              src="./images/lucia-3.webp"
              alt="image2"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-95"
            />
            <button className="absolute bottom-3 right-3 h-10 w-10 font-extrabold rounded-full bg-white opacity-60 scale-110 font-bold shadow-md transition">
              +
            </button>
          </div>

          {/* Bottom image */}
          <div className="group relative lg:w-1/2 overflow-hidden shadow-lg bg-yellow-100">
            <img
              src="./images/lucia-1.webp"
              alt="image3"
              className="w-full h-full object-cover sm:h-80 md:h-96 object-cover transition-transform duration-700 ease-in-out group-hover:scale-95"
            />
            <button className="absolute bottom-3 right-3 h-10 w-10 font-extrabold rounded-full bg-white opacity-60 scale-110 font-bold shadow-md transition">
              +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}