import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-transparent text-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Build Beautiful Interfaces Effortlessly
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10">
          A modern, flexible, and developer-friendly UI library made to help you
          ship faster.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/ui-components"
            className="bg-white text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            Explore Components
          </Link>
          <Link
            href="/docs"
            className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300"
          >
            Read Documentation
          </Link>
        </div>
      </div>
    </section>
  );
}
