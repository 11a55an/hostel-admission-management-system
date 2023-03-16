import IndexHeader from "./IndexHeader";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Map from "./Map";
function Home() {
    return (
        <div>
            <IndexHeader />
            <About />
            <Contact />
            <Map/>
            <Footer />
        </div>
    );
}

export default Home;
