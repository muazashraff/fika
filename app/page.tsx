import BotanicalDivider from "@/components/ui/BotanicalDivider";
import ExperienceStrip from "@/components/home/ExperienceStrip";
import FeaturedDrinks from "@/components/home/FeaturedDrinks";
import FikaRitual from "@/components/home/FikaRitual";
import GoogleRatingBadge from "@/components/home/GoogleRatingBadge";
import Hero from "@/components/home/Hero";
import InstagramFeed from "@/components/home/InstagramFeed";
import TheSpaceSection from "@/components/home/TheSpaceSection";
import VisitSection from "@/components/home/VisitSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <GoogleRatingBadge />
      <BotanicalDivider />
      <ExperienceStrip />
      <FikaRitual />
      <FeaturedDrinks />
      <TheSpaceSection />
      <InstagramFeed />
      <VisitSection />
    </>
  );
}
