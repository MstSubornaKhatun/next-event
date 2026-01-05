import { EventsSection } from "@/components/pages/home/EventsSection";
import HeroSection from "@/components/pages/home/heroSection";
import { ServiceSection } from "@/components/pages/home/ServiceSection";
import { SubscribeSection } from "@/components/pages/home/SubscribeSection";
import { TestimonialSection } from "@/components/pages/home/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
   <div>
     <HeroSection />
      <ServiceSection />
      <EventsSection />
      <TestimonialSection />
      <SubscribeSection />
   </div>
  );
}
