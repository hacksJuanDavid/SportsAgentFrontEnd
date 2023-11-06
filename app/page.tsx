import HeroHome from "@/components/home/herohome";
import HeroAbout from "@/components/about/heroabout";
import HeroFeatures from "@/components/features/herofeatures";
import CarouselHome from "@/components/home/carouselhome";
import GettingStarted from "@/components/common/gettingstarted"

// Home page (index)
export default function PageHome() {
  return (
    <>
      <HeroHome />
      <HeroAbout />
      <HeroFeatures />
      <CarouselHome />
      <GettingStarted />
    </>
  );
}
