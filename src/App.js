import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Carousels from "./components/Carousel/Carousels";
import Internship from "./components/Internship/Internship";
import Training from "./components/Training/Training";
import Fresher from "./components/FresherJobs/Fresher";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Carousels />
      <Internship />
      <Training />
      <Fresher />
      <Footer />
    </>
  );
}

export default App;
