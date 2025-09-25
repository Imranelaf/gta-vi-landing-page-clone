import CharacterSection from "../components/CharacterSection";

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
  },
  {
    id: "lucia",
    name: "Lucia Duval",
    slogan: "Lucia wants an easy life, but things just keep getting harder.",
    description:
      "Lucia grew up around grifters and crooks. After a stint in the Army trying to shake off her troubled teens, she found herself in the Keys doing what she knows best, working for local drug runners. It might be time to try something new.",
    video: "/videos/output2.mp4",
    images: [
      "./images/lucia-2.webp", // main
      "./images/lucia-3.webp", // right top
      "./images/lucia-1.webp", // right bottom
    ],
  },
];


export default function Characters(){

    return(
<>
        <CharacterSection data={characters[0]} />
         <CharacterSection data={characters[1]} />
</>

    )
}