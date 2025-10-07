import Navbar from "./components/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import Characters from "./pages/Characters.jsx";
import Ending from "./pages/Ending.js";
import PostCard from "./pages/PostCard.jsx";


export default function App() {

    return (
        <>
            <Navbar />
            <Hero /> 
            <Characters /> 
            <div className="h-[80vh]" />
            <PostCard />
            <Ending />

        </>
    )
}