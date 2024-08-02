import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from  './components/Sections/Hero/Hero';
import Expertise from "./components/Sections/Expertise/Expertise";
import Choose from "./components/Sections/Choose/Choose";

export default function Home() {
    return (
        <>
            <div className="inner">
                <Header />
                <main className="main">
                    <div className="container">
                        <Hero />
                        <Expertise />
                        <Choose />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
