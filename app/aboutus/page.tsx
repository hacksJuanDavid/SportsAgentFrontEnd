import HeroAbout from "@/components/about/heroabout";
import HeroFounderStory from "@/components/about/herofounderstory";
import HeroOurHistory from "@/components/about/heroourhistory";
import HeroAboutVideoTeam from "@/components/about/heroaboutvideoteam";
import CarouselOurTeam from "@/components/about/carouselourteam";
import GettingStarted from "@/components/common/gettingstarted";

// AboutUs page
export default function PageAboutUs() {
  return (
    <>
      <HeroAbout />
      <HeroFounderStory />
      <HeroOurHistory />
      <HeroAboutVideoTeam />
      <CarouselOurTeam />
      <GettingStarted />
    </>
  );
}
