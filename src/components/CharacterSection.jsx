import Video from "./BgVideo";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";


export default function CharacterSection({ data }) {
  const { name, slogan, description, images, ...rightData } = data;

  const leftData = { name, slogan, description, mainImage: images[0] };
  rightData.images = images;

  return (
    <section className="flex flex-col items-start w-full w-auto relative" id={data.id}>
      <div>
        <Video link={data.video} id={data.id} />
      </div>

      <div className="flex flex-col lg:flex-row items-start w-full min-h-screen infos absolute top-[200vh] z-[50]">
        <LeftContent data={leftData} />
        <RightContent data={rightData}/>
      </div>
    </section>
  );
}
