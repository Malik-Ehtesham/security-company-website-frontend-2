import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomeSection from "../HomeSection/HomeSection";

const Home = () => {
  return (
    <div className=" min-h-screen ">
      <div className="home-page min-h-screen ">
        <Header />
        <HomeSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
