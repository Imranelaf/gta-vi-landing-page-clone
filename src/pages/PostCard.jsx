import PostCardHelper from "../components/PostCardHelper"

const data = {
    image: './images/overlay.webp',
    video: './videos/postcard-vd.mp4'
}

export default function PostCard(){

    return(
        <PostCardHelper data={data} id={10} />
    )
}