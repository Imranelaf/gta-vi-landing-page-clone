import gsap from "gsap";
import Navbar from "./components/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import Jason from "./pages/Jason.jsx";
import Lucia from "./pages/lucia.jsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {

    return (
        <>
    {/*    <Navbar />
	    <Hero />  */}
        <Jason />
        <Lucia /> 

            

        </>
    )
}