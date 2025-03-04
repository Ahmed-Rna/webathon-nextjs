import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";

import { Whychooseus } from "@/components/Whychooseus";
import { TestimonialsCards } from "@/components/TestimonialsCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <main className="min-h-screen scroll-smooth bg-black/[0.96] bg-grid-white/[0.02] ">
      <HeroSection />
      <FeaturedCourses />
      <Whychooseus />
      <TestimonialsCards/>
      <UpcomingWebinars/>
      <Instructors/>  
      <Footer/>
      </main> 
    </>
  );
}
