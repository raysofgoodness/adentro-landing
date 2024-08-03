import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from  './components/Sections/Hero/Hero';
import Expertise from "./components/Sections/Expertise/Expertise";
import Choose from "./components/Sections/Choose/Choose";
import Search from "./components/Sections/Search/Search";
import Ai from "./components/Sections/Ai/Ai";

export default function Home() {
    return (
        <>
            <div className="inner">
                <Header/>
                <main className="main">
                    <Hero/>
                    <Expertise/>
                    <Choose/>
                    <Search/>
                    <Ai />
                </main>
                <Footer/>
            </div>
        </>
    );
}
