import { Quote } from "lucide-react";

const floatingItems = Array.from({ length: 6 }, (_, i) => ({
  left: Math.random() * 100,
  rotate: Math.random() * 30 - 15,
  size: 20 + Math.random() * 10,
  emoji: Math.random() > 0.5 ? "📜" : "🪶",
}));

const QuoteSection = () => {
  return (
    <section className="relative py-24 overflow-hidden text-center">
      <div>
        <Quote className="w-12 h-12 text-blue-500 mx-auto mb-4" />
      </div>

      {/* Decorative line */}
      <div className="w-16 h-1 bg-blue-300 mx-auto mb-6 rounded-full" />

      {/* Blockquote */}
      <blockquote className="text-2xl font-semibold text-blue-800 max-w-3xl mx-auto px-6">
        “A reader lives a thousand lives before he dies. The man who never reads lives only one.” — George R.R. Martin
      </blockquote>

      {/* Bottom decorative line */}
      <div className="w-16 h-1 bg-blue-300 mx-auto mt-6 rounded-full" />
    </section>
  );
};

export default QuoteSection;