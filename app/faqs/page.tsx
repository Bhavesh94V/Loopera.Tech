import Navigation from "@/components/navigation"
import FAQsHero from "@/components/faqs-hero"
import FAQsList from "@/components/faqs-list"
import Footer from "@/components/footer"

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <FAQsHero />
      <FAQsList />
      <Footer />
    </main>
  )
}
