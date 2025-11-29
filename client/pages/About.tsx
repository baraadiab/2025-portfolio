import {
  Target,
  Zap,
  BarChart3,
  Users,
  Code2,
  Cpu,
  Search,
  ClipboardList,
  Brain,
  GitBranch,
} from "lucide-react";

export default function About() {
  const skills = [
    {
      category: "Product",
      icon: Target,
      items: [
        "Product Discovery",
        "Backlog Ownership",
        "User Stories",
        "Sprint Planning",
        "Customer Journeys",
      ],
    },
    {
      category: "Technical",
      icon: Code2,
      items: [
        "Data Analysis",
        "System Architecture",
        "CCaaS & Amazon Connect",
        "API Design",
        "Integration Patterns",
      ],
    },
  ];

  const tools = [
    { name: "Jira", icon: "📋" },
    { name: "Confluence", icon: "📄" },
    { name: "Figma", icon: "🎨" },
    { name: "Miro", icon: "🎯" },
    { name: "Mixpanel", icon: "📊" },
    { name: "Google Analytics", icon: "📈" },
    { name: "Notion", icon: "📝" },
    { name: "Postman", icon: "🔗" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 container max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              About <span className="text-primary">Me</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-4xl">
            <p className="text-lg leading-relaxed text-foreground bg-white/50 backdrop-blur rounded-xl p-8 border border-blue-100">
              I didn't always know I wanted to be in Product management. But
              after studying Computer Engineering at Altınbaş Üniversitesi, I
              discovered something: I love being at the intersection of
              technology and people—translating complex technical possibilities
              into products that solve real problems. Today at Odea
              Integrations, every sprint, I'm bridging the gap between what
              stakeholders envision and what teams can build, making sure we
              deliver features that actually matter.
            </p>

            <p className="text-lg leading-relaxed text-foreground mt-6 bg-white/50 backdrop-blur rounded-xl p-8 border border-blue-100">
              My approach? Stay technical enough to challenge assumptions, stay
              collaborative enough to bring teams together, and stay focused on
              outcomes that move the needle.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="about-section"
        className="py-20 px-6 container max-w-6xl mx-auto"
      >
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Core Competencies
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => {
              const Icon = skillGroup.icon;
              return (
                <div
                  key={skillGroup.category}
                  className="bg-white rounded-2xl p-8 border border-blue-100 hover:border-primary/30 transition-colors shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {skillGroup.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-foreground"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-6 container max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Tools & Technologies
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="bg-white rounded-xl p-6 border border-blue-100 hover:border-primary/30 hover:shadow-lg transition-all text-center"
              >
                <div className="text-4xl mb-3">{tool.icon}</div>
                <p className="font-semibold text-foreground">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
