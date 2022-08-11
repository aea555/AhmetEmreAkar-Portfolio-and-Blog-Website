import Header from "../Components/Partials/Header";
import Footer from "../Components/Partials/Footer";
import Carousel from "../Components/Others/Carousel";
import Services from "../Components/Others/Services";
import Portfolio from "../Components/Others/Portfolio";
function Home() {
  return (
    <div className="App container-md">
      <Header />
      <Carousel />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Home;
