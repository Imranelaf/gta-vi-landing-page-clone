import ScaleBotton from "./ScaleBotton";

export default function LeftContent({ data, flip=false}) {
  
  return (
    <div className={`flex-1 p-6 lg:p-12 ${flip ? 'lg:mr-64'  : 'lg:ml-64'}`}>
      <h1 className="CharactersName text-2xl lg:text-4xl font-bold mb-3">
        {data.name}
      </h1>
      <h3 className="carachterSlogan text-lg lg:text-xl mb-3">
        {data.slogan}
      </h3>
      <p className="carachterP text-sm lg:text-base leading-relaxed">
        {data.description}
      </p>

      {/* Main image */}
      <div className="group relative lg:h-screen my-6  w-full overflow-hidden shadow-lg bg-yellow-100">
        <img
          src={data.mainImage}
          alt={`${data.name} main`}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-95"
        />
        <ScaleBotton />
      </div>
    </div>
  );
}
