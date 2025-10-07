import ScaleBotton from "./ScaleBotton";

export default function RightContent({ data }) {
  return (
    <div className="rightImages flex-1 lg:w-1/4 lg:h-screen space-y-6 lg:mt-105">
      {/* Top image */}
      <div className="group relative w-full lg:h-3/4 overflow-hidden shadow-lg bg-yellow-100">
        <img
          src={data.images[1]}
          alt={`${data.name} right top`}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-95"
        />
        <ScaleBotton />
      </div>

      {/* Bottom image */}
      <div className="group relative lg:w-4/5 overflow-hidden shadow-lg bg-yellow-100">
        <img
          src={data.images[2]}
          alt={`${data.name} right bottom`}
          className="w-full h-full object-cover sm:h-80 md:h-96 transition-transform duration-700 ease-in-out group-hover:scale-95"
        />
        <ScaleBotton />
      </div>
    </div>
  );
}

