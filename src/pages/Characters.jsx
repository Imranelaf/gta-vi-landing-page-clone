import CharacterSection from "../components/CharacterSection.jsx";

const characters = [
  {
    id: "jason",
    name: "Jason Duval",
    slogan: "Jason wants an easy life, but things just keep getting harder.",
    description:
      "Jason grew up around grifters and crooks. After a stint in the Army trying to shake off his troubled teens, he found himself in the Keys doing what he knows best, working for local drug runners. It might be time to try something new.",
    video: "/videos/output1.mp4",
    images: [
      "./images/jason-2.webp", // main
      "./images/jason-3.webp", // right top
      "./images/jason-1.webp", // right bottom
    ],
    videoPosition: 'size-full object-cover md:[object-position:50%_center] [object-position:75%_center]'
  },
  {
    id: "lucia",
    name: "Lucia Caminos",
    slogan: "Lucia’s father taught her to fight as soon as she could walk.",
    description:
      "Life has been coming at her swinging ever since. Fighting for her family landed her in the Leonida Penitentiary. Sheer luck got her out. Lucia’s learned her lesson — only smart moves from here.",
    video: "/videos/output2.mp4",
    images: [
      "./images/lucia-2.webp", // main
      "./images/lucia-3.webp", // right top
      "./images/lucia-1.webp", // right bottom
    ],
    videoPosition: 'size-full object-cover md:[object-position:50%_center] [object-position:20%_center]'
  },
];


export default function Characters(){

    return(
<>
        <CharacterSection data={characters[0]} />
        
         <CharacterSection data={characters[1]} switching={true} />
</>

    )
}