import Video from "../components/BgVideo.jsx"


export default function Ending() {
    const data = {
        video: '/videos/output3.mp4',
        id: 3
    }

    return (
        <section>
            <Video link={data.video} id={data.id} />

            <div className="h-screen w-full flex flex-col justify-center items-center">
                <img src="./images/fav.png" alt="logo"
                    className="relative h-auto w-3/5 md:w-2/5 lg:w-1/5 object-contain"
                />
                <h1 className="ComingSoonStyle lg:text-[6rem] text-[3rem] text-center leading-tight">
                    Coming <br /> May 26th <br /> 2026
                </h1>
                <div className="flex gap-x-8 w-auto">
                    <img src="./images/x-logo.svg" alt="Xbox Logo" />
                    <img src="./images/ps-logo.svg" alt="Playstation Logo" />

                </div>
            </div>
        </section>
    )
}