function Feature({ title, children }) {
  return (
    <div className="p-6 bg-white/5 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="font-semibold text-xl text-retailiq-dark mb-2">{title}</h3>
      <p className="text-gray-700">{children}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="py-16 bg-retailiq-light">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
        
        <Feature title="Automated Price Detection">
          RetailIQ identifies items missing prices, estimates their value, and highlights errors in your catalog to save lost revenue.
        </Feature>

        <Feature title="Smart Product Matching">
          Using AI-powered visual recognition, RetailIQ compares photographed items against your catalog, finding exact or similar matches for accurate pricing.
        </Feature>

        <Feature title="Inventory & Pair Verification">
          Detect missing pairs, incomplete sets, or bundled items to ensure your inventory is complete and accurate across all stores.
        </Feature>

        <Feature title="Multi-Store & Legacy Support">
          Works with single or multiple retail chains, and integrates with older systems without losing historical data.
        </Feature>

        <Feature title="Real-Time Insights">
          Gives immediate visibility into catalog inconsistencies, potential revenue loss, and estimated savings for fast, data-driven decisions.
        </Feature>

        <Feature title="AI That Adapts">
          Start with AlexNet embeddings and upgrade to newer AI models seamlessly, keeping your old data intact.
        </Feature>

      </div>
    </section>
  );
}
