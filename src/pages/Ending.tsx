import Video from "../components/BgVideo"

export default function Ending(){

    const data = {
        video: '/videos/output3.mp4',
        id:3
    }

    return(

        <section>
           <Video link={data.video} id={data.id} />
        </section>
    )
}