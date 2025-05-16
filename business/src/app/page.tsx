import Hero from "@/components/homecomps/homepage/Hero";
import Built from "@/components/homecomps/homepage/Built";
import Works from "@/components/homecomps/homepage/Works";
import Testimonials from "@/components/homecomps/homepage/Testimonials";
export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Built />
      <Works />
      <Testimonials />
    </div>
  );
}
