import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="relative py-20 px-6 container max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Let's Connect <span className="text-primary">→</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Left side - Message */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  Let's discuss how I can drive clarity and outcomes in your
                  product initiatives.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're looking to streamline your product processes,
                  build better integrations, or scale your product team, I'm
                  always open to meaningful conversations.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-blue-100 space-y-4">
                <p className="font-semibold text-foreground text-sm">
                  CORE EXPERTISE
                </p>
                <div className="space-y-2">
                  <p className="text-foreground">
                    <span className="font-semibold">CCaaS & SaaS:</span>{" "}
                    Building scalable, integration-ready products
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">AI & Automation:</span>{" "}
                    Virtual agents, IVRs, intelligent workflows
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">Team Leadership:</span>{" "}
                    Product strategy, cross-functional collaboration
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Contact options */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 border border-blue-100 hover:border-primary/50 transition-all space-y-4 group cursor-pointer hover:shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-lg font-semibold text-foreground">
                      <a
                        href="mailto:baraa98diab@outlook.com"
                        className="hover:text-primary transition-colors"
                      >
                        baraa98diab@outlook.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-blue-100 hover:border-primary/50 transition-all space-y-4 group cursor-pointer hover:shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="text-lg font-semibold text-foreground">
                      <a
                        href="https://www.linkedin.com/in/baraa-diyab-b37618175/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        /in/baraa-diyab-b37618175
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-blue-100 hover:border-primary/50 transition-all space-y-4 group cursor-pointer hover:shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="text-lg font-semibold text-foreground">
                      <a
                        href="https://github.com/baraadiyab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        /baraadiyab
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand statement */}
          <div className="mt-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-12 border border-primary/20 space-y-4">
            <p className="text-xl text-primary font-semibold">My Brand</p>
            <p className="text-2xl font-bold text-foreground leading-relaxed">
              "I build and scale CCaaS & AI-driven SaaS products. I simplify
              complex systems and bring clarity to product teams."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
