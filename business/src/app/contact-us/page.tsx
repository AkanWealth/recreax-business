import React from "react";
import ContactHero from "@/components/homecomps/contactpage/ContactHero";
import ContactForm from "@/components/homecomps/contactpage/ContactForm";

function page() {
  return (
    <div className="flex flex-col w-full">
      <ContactHero />
      <ContactForm />
    </div>
  );
}

export default page;