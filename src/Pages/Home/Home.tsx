import Banner from "../../Components/Banner/Banner";
import Banner2 from "../../Components/Banner2/Banner2";
import HitsAndNews from "../../Components/Sections/HitsAndNews/HitsAndNews";
import NewYear from "../../Components/Sections/NewYear/NewYear";
import Specials from "../../Components/Sections/Specials/Specials";
import VideoBlock from "../../Components/VideoBlock/VideoBlock";
import MainLayout from "../../Layout/MainLayout";
import BannerSlider from "../../Ui/Sliders/BannerSlider/BannerSlider";

const Home = () => {
  return (
    <MainLayout>
      <Banner />
      <br />
      {/* <CategorySlider /> */}
      <Specials />
      <HitsAndNews />
      <BannerSlider />
      <NewYear />
      <Banner2 />
      <VideoBlock />
    </MainLayout>
  );
};

export default Home;
