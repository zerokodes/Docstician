import Hero from "../components/sections/Hero";
import Problem from "../components/sections/Problem";
import Solution from "../components/sections/Solution";
import Features from "../components/sections/Features";
import HowItWorks from "../components/sections/HowItWorks";
import ProductPreview from "../components/sections/ProductPreview";
import Trust from "../components/sections/Trust";
import FinalCta from "../components/sections/FinalCta";

export function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <ProductPreview />
      <Trust />
      <FinalCta />
    </>
  );
}

export default Home;
