import HeroFrequentlyAsked from "@/components/faqs/herofrequentlyasked";
import HeroAskedCommons from "@/components/faqs/heroaskedcommons";
import GettingHaveQuestion from "@/components/faqs/gettinghavequestion";

// FAQs page
export default function PageFAQs() {
  return (
    <>
      <HeroFrequentlyAsked />
      <HeroAskedCommons />
      <GettingHaveQuestion />
    </>
  );
}
