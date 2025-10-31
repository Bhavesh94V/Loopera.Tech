import Navigation from "@/components/navigation"
import ServicesHero from "@/components/services-hero"
import ServicesList from "@/components/services-list"
import ProcessSection from "@/components/process-section"
import ExpertiseSection from "@/components/expertise-section"
import ServicesCTA from "@/components/services-cta"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <ExpertiseSection />
      {/* <ServicesCTA /> */}
      <Footer />
    </main>
  )
}
