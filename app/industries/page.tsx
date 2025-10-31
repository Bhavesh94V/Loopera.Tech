import Navigation from "@/components/navigation"
import IndustriesHero from "@/components/industries-hero"
import IndustriesList from "@/components/industries-list"
import Footer from "@/components/footer"

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <IndustriesHero />
      <IndustriesList />
      <Footer />
    </main>
  )
}
