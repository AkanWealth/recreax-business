import Hero from "@/components/homecomps/homepage/Hero";
import Built from "@/components/homecomps/homepage/Built";
import Works from "@/components/homecomps/homepage/Works";
import Testimonials from "@/components/homecomps/homepage/Testimonials";
import Products from "@/components/homecomps/homepage/Products";
import Faq from "@/components/homecomps/homepage/Faq";
import Metrics from "@/components/homecomps/homepage/Metrics";
export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Metrics />
      <Built />
      
      <Works />
     
      <Testimonials />
      <Products />
      <Faq /> 
    </div>
  );
}
