import FeatureBanner from "../components/FeatureBanner";
import Footer from "../components/Footer";
import GetUpdate from "../components/GetUpdate";
import Header from "../components/Header";
// import Nav from "../Components/Nav";
import NewArrival from "../components/NewArrival";
import Service from "../components/Service";
import Shop from "../components/Shop";

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
