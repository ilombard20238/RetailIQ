import Features from '../components/Features'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-retailiq-light text-center p-8">
      
      {/* Hero Section */}
      <section className="w-full max-w-4xl mt-16">
        <h1 className="text-5xl font-bold text-retailiq-blue mb-6">
          RetailIQ
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Downloadable AI-powered software for smart retailers. Detect missing prices, track incomplete merchandise, estimate potential savings, and optimize your catalog — all from photos of your products.
        </p>
        <a
          href="#about"
          className="bg-retailiq-blue text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Learn More
        </a>
      </section>

      {/* Why RetailIQ */}
      <section id="about" className="mt-20 max-w-3xl text-left">
        <h2 className="text-3xl font-semibold mb-4 text-retailiq-dark">
          Why RetailIQ?
        </h2>
        <p className="text-gray-700 mb-4">
          RetailIQ is designed for retailers who need real-time visibility into their inventory. Using AI models like AlexNet, it identifies individual products or similar items, detects missing components or pricing errors, and provides estimated valuations to help you recover lost revenue.
        </p>
        <p className="text-gray-700 mb-4">
          Traditional systems often miss gaps in pricing and inventory, costing companies millions. RetailIQ bridges that gap by offering accurate, actionable insights — all through smart devices that your teams already use.
        </p>
        <p className="text-gray-700">
          <strong>Our mission:</strong> empower retailers to save money, reduce errors, and make smarter data-driven decisions without disrupting existing workflows.
        </p>
      </section>

      {/* Features Section */}
      <Features />

      {/* Call-to-Action Section */}
      <CTA />

    </main>
  )
}
