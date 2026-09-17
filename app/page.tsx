import Certifications from "@/components/certifications/Certifications";
import ContactFooter from "@/components/contact/ContactFooter";
import Experience from "@/components/experience/Experience";
import Hero from "@/components/hero/Hero";
import Systems from "@/components/systems/Systems";
import FeaturedWork from "@/components/work/FeaturedWork";

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <FeaturedWork />
        <Systems />
        <Experience />
        <Certifications />
      </main>
      <ContactFooter />
    </>
  );
}
