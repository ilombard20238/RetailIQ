function Feature({ title, children }) {
  return (
    <div className="p-6 bg-white/5 rounded-lg shadow-md">
      <h3 className="font-semibold text-xl text-retailiq-dark">{title}</h3>
      <p className="mt-3 text-gray-700">{children}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="py-16 bg-retailiq-light">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
        <Feature title="Automated Audits">
          Find missing prices and inconsistent product data across stores in seconds.
        </Feature>
        <Feature title="Adaptable AI">
          Start with AlexNet embeddings and upgrade to newer models without losing historical data.
        </Feature>
        <Feature title="Multi-Store Support">
          Compare catalogs across chains. Run locally or sync reports to a central dashboard.
        </Feature>
      </div>
    </section>
  );
}
