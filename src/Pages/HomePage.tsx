import FeatureBanner from "../Components/FeatureBanner";
import Footer from "../Components/Footer";
import GetUpdate from "../Components/GetUpdate";
import Header from "../Components/Header";
// import Nav from "../Components/Nav";
import NewArrival from "../Components/NewArrival";
import Service from "../Components/Service";
import Shop from "../Components/Shop";

function HomePage() {
  return (
    <>
      <Header />
      <FeatureBanner />
      <Service />
      <Shop />
      <GetUpdate />
      <NewArrival />
      <Footer />
    </>
  );
}

export default HomePage;
