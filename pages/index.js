import Features from '../components/Features'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-retailiq-light text-center p-8">
      <h1 className="text-5xl font-bold text-retailiq-blue mb-6">
        RetailIQ
      </h1>
      <p className="text-lg max-w-2xl text-gray-700 mb-8">
        Smarter Retail Intelligence — empowering stores like Ross, dd’s, and TJ Maxx
        to detect missing prices, track catalog accuracy, and make data-driven decisions
        through AI-powered product recognition.
      </p>

      <a
        href="#about"
        className="bg-retailiq-blue text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Learn More
      </a>

      <section id="about" className="mt-20 max-w-3xl text-left">
        <h2 className="text-3xl font-semibold mb-4 text-retailiq-dark">
          Why RetailIQ?
        </h2>
        <p className="text-gray-700 mb-4">
          RetailIQ stands for <strong>Retail Intelligence</strong> — the next evolution
          in how stores understand and manage their products. Using deep learning models like
          AlexNet, our system can identify products visually, detect missing data, and
          unify catalog information across multiple retail chains.
        </p>
        <p className="text-gray-700 mb-4">
          Outdated systems cause data loss, pricing errors, and inefficiencies that cost
          retailers millions every year. RetailIQ bridges the gap — integrating AI insight
          with legacy systems, preserving history while preparing for the future.
        </p>
        <p className="text-gray-700">
          <strong>Our mission:</strong> to make retail data cleaner, smarter, and more connected
          than ever before.
        </p>
      </section>

      {/* Features section */}
      <Features />
    </main>
  )
}
