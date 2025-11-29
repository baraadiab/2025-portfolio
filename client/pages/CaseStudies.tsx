import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="relative py-20 px-6 container max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Deep Dives & <span className="text-primary">Case Studies</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl p-12 border border-blue-100 text-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Coming Soon
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm currently working on detailed case studies that showcase the
                problems I've solved, my approach, and the measurable impact of
                my work.
              </p>
            </div>

            <div className="space-y-4 mt-8">
              <p className="text-foreground font-semibold">
                Each case study will include:
              </p>
              <ul className="inline-flex flex-col items-start gap-3 text-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Problem & Context
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  My Role & Approach
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Discovery & Solution
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Key Decisions & Trade-offs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Measurable Outcomes
                </li>
              </ul>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/portfolio"
                className="flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Back to Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
