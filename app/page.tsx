import BotanicalDivider from "@/components/ui/BotanicalDivider";
import CoffeeQuiz from "@/components/home/CoffeeQuiz";
import EventsPreview from "@/components/home/EventsPreview";
import ExperienceStrip from "@/components/home/ExperienceStrip";
import FeaturedDrinks from "@/components/home/FeaturedDrinks";
import GoogleRatingBadge from "@/components/home/GoogleRatingBadge";
import Hero from "@/components/home/Hero";
import TheSpaceSection from "@/components/home/TheSpaceSection";
import VisitSection from "@/components/home/VisitSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <GoogleRatingBadge />
      <BotanicalDivider />
      <ExperienceStrip />
      <BotanicalDivider />
      <CoffeeQuiz />
      <FeaturedDrinks />
      <EventsPreview />
      <TheSpaceSection />
      <VisitSection />
    </>
  );
}
