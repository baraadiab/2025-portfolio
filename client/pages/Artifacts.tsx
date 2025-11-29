import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Artifacts() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="relative py-20 px-6 container max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Product <span className="text-primary">Artifacts</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl p-12 border border-blue-100 text-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Deliverables & Documentation
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                This section will showcase product artifacts that demonstrate my proficiency in core PM deliverables.
              </p>
            </div>

            <div className="space-y-4 mt-8">
              <p className="text-foreground font-semibold">
                Artifacts to be featured:
              </p>
              <ul className="inline-flex flex-col items-start gap-3 text-foreground text-left">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  User Stories & Refinement
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Product Roadmaps
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Backlog Prioritization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Customer Journey Maps
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Architecture Diagrams
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Analytics Dashboards
                </li>
              </ul>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/portfolio"
                className="flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
