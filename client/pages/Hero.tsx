import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center relative overflow-hidden">
      {/* Abstract tech background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text */}
        <div className="space-y-8 order-2 md:order-1">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Baraa <span className="text-primary">Diyab</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-primary">
              Product Owner | Digital Delivery
            </p>
            <p className="text-lg text-muted-foreground font-medium">
              CCaaS & SaaS Integrations Specialist
            </p>
          </div>

          <p className="text-xl text-foreground leading-relaxed max-w-xl">
            Turning complexity into clarity – building customer-first,
            integration-ready products
          </p>

          <div className="flex gap-4 pt-4">
            <Link
              to="/about"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Explore My Work
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              Portfolio
            </Link>
          </div>
        </div>

        {/* Right side - Headshot */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Decorative ring around image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl opacity-20 blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl opacity-10"></div>

            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2b1419a574084f78ba442616360d9a8e%2Fb45b4313a54049f09efb49884bd6d5d5?format=webp&width=800"
              alt="Baraa Diyab"
              className="w-80 h-80 object-cover rounded-3xl relative z-10 shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-6 h-6 text-primary" />
      </button>
    </section>
  );
}
