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
              Product Manager & Product Owner
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

        {/* Right side - Headshot with Creative Design */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-80 h-80">
            {/* Animated Rotating Border */}
            <div className="absolute inset-0 rounded-3xl animate-rotate-border" style={{
              background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #10b981, #3b82f6)',
              padding: '3px',
              borderRadius: '24px',
            }}>
              <div className="absolute inset-0 bg-white rounded-3xl" style={{ margin: '3px' }}></div>
            </div>

            {/* Gradient Mesh Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-3xl opacity-40 blur-lg"></div>

            {/* Glassmorphism Layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md rounded-3xl border border-white/30"></div>

            {/* Main Image */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2b1419a574084f78ba442616360d9a8e%2Fb45b4313a54049f09efb49884bd6d5d5?format=webp&width=800"
              alt="Baraa Diyab"
              className="w-full h-full object-cover rounded-3xl relative z-20 shadow-2xl"
            />

            {/* Floating Skill Badges */}
            {/* Badge 1 - Top Left */}
            <div className="absolute -top-6 -left-6 z-30 animate-float-up">
              <div className="bg-gradient-to-br from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-md">
                Product 🚀
              </div>
            </div>

            {/* Badge 2 - Top Right */}
            <div className="absolute -top-4 -right-8 z-30 animate-float-right" style={{ animationDelay: '0.5s' }}>
              <div className="bg-gradient-to-br from-secondary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-md">
                CCaaS 💡
              </div>
            </div>

            {/* Badge 3 - Bottom Right */}
            <div className="absolute -bottom-4 -right-6 z-30 animate-float-up" style={{ animationDelay: '1s' }}>
              <div className="bg-gradient-to-br from-accent to-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-md">
                SaaS ⚡
              </div>
            </div>

            {/* Badge 4 - Bottom Left */}
            <div className="absolute -bottom-6 -left-4 z-30 animate-float-right" style={{ animationDelay: '1.5s' }}>
              <div className="bg-gradient-to-br from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-md">
                AI/Data 🧠
              </div>
            </div>

            {/* Floating Orbs */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse-glow"></div>
            <div className="absolute -bottom-16 -left-8 w-32 h-32 bg-secondary/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 -right-16 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl shadow-2xl" style={{
              boxShadow: '0 0 60px rgba(59, 130, 246, 0.4), inset 0 0 60px rgba(139, 92, 246, 0.1)',
            }}></div>
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
