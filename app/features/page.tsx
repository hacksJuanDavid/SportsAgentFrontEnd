import HeroFeaturesVideo from "@/components/features/herofeaturesvideo";
import HeroFeaturesBenefits from "@/components/features/herofeaturesbenefits";
import HeroFeaturesTestimonials from "@/components/features/herofeaturestestimonials";
import GettingStarted from "@/components/common/gettingstarted";

// Features page
export default function PageFeatures() {
  return (
    <>
      <HeroFeaturesVideo />
      <HeroFeaturesBenefits />
      <HeroFeaturesTestimonials />
      <GettingStarted />
    </>
  );
}
