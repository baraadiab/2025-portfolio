import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      name: "Loyalty Plus",
      company: "Independent SaaS Project",
      type: "SaaS",
      focus: "Customer Loyalty & Retention Platform",
      description:
        "A unified, intelligent platform that empowers businesses to effortlessly transform every customer interaction—across online, physical, and hybrid channels—into a lasting, profitable relationship through personalized loyalty and deep behavioral insights. Loyalty Plus enables businesses to increase customer lifetime value, improve retention rates, and gain deeper understanding of customer behavior patterns.",
      outcome:
        "Enhanced customer retention, increased lifetime value, actionable behavioral insights",
      color: "from-cyan-500 to-teal-500",
    },
    {
      name: "Agent 360",
      company: "Odea Integrations",
      type: "CCaaS",
      focus: "Agent Desktop + Integrations",
      description:
        "A unified agent desktop that centralizes tools, channels, and customer data—helping support teams work faster, smarter, and deliver better customer experiences.",
      outcome: "Improved agent productivity, centralized workflows",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Konvrsa",
      company: "Odea Integrations",
      type: "AI Chatbot",
      focus: "AI Virtual Agent Platform",
      description:
        "An AI-powered virtual agent platform that automates customer interactions across channels. It helps businesses boost efficiency, reduce response times, and deliver 24/7 intelligent support at scale.",
      outcome: "24/7 automated support, reduced response times",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Amazon Connect Integrations",
      company: "Odea Integrations",
      type: "Integration",
      focus: "Cloud Contact Center",
      description:
        "Customized Amazon Connect solutions that integrate with CRMs and business tools, offering intelligent IVRs, real-time reporting, and automated workflows for efficient, cloud-based contact centers.",
      outcome: "Streamlined integrations, enhanced reporting",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Web Scraper Engine",
      company: "AI Crafts",
      type: "AI/Data",
      focus: "Data Collection & Structuring",
      description:
        "A powerful scraping engine built to collect and structure data from e-commerce platforms, supporting a recommendation system powered by Neo4j for smarter, personalized user experiences.",
      outcome: "Efficient data collection, AI-driven recommendations",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Tukan Store",
      company: "AI Crafts",
      type: "E-commerce",
      focus: "Mobile Shopping Platform",
      description:
        "A mobile shopping platform that delivers the best prices in Türkiye right to your doorstep. Users can browse and purchase top deals instantly through the app.",
      outcome: "Increased user engagement, streamlined shopping experience",
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "Naseem Alsafwa",
      company: "NBS",
      type: "E-commerce",
      focus: "Medical Supplies Platform",
      description:
        "Mobile and website online store for medical supplies and equipment, providing healthcare professionals and patients with reliable access to essential medical products.",
      outcome: "Accessible medical supplies, improved customer reach",
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Stampry",
      company: "Independent",
      type: "Print-On-Demand",
      focus: "Custom Sticker Printing Platform",
      description:
        "A custom sticker printing platform that empowers individuals and businesses to turn their ideas into high-quality, personalized stickers. With an easy-to-use interface, customers can upload their own designs, choose from a variety of sticker shapes and sizes, and place orders in just a few clicks. Whether you need clear, circle, square, die-cut, or bumper stickers, Stampry delivers fast, vibrant, and durable prints that stick with your story.",
      outcome:
        "Accessible creative expression, streamlined design-to-print workflow",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="relative py-20 px-6 container max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Featured <span className="text-primary">Projects</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl">
            A curated selection of products and platforms I've led or
            contributed to, showcasing expertise in CCaaS, SaaS, AI, and
            e-commerce.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6 container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-blue-100 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Color accent bar */}
              <div className={`h-1 bg-gradient-to-r ${project.color}`}></div>

              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-foreground">
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">
                        {project.company}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary whitespace-nowrap">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-secondary">
                    Focus: {project.focus}
                  </p>
                </div>

                {/* Description */}
                <p className="text-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Outcome */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <p className="text-sm font-semibold text-primary mb-1">
                    Outcome
                  </p>
                  <p className="text-sm text-foreground">{project.outcome}</p>
                </div>

                {/* CTA */}
                <button className="w-full flex items-center justify-center gap-2 mt-4 py-3 rounded-lg font-semibold text-primary border-2 border-primary hover:bg-primary/5 transition-colors group">
                  View Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 container max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl p-12 text-center text-white space-y-6">
          <h2 className="text-4xl font-bold">Interested in learning more?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Explore detailed case studies, discover my process, and see how I
            translate product vision into measurable outcomes.
          </p>
          <button className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            View All Case Studies
          </button>
        </div>
      </section>
    </div>
  );
}
