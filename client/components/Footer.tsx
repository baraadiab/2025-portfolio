import { Link } from "react-router-dom";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-100 bg-white/50 backdrop-blur-md mt-20">
      <div className="container max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              to="/"
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors inline-block"
            >
              Baraa<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground">
              Building clarity in product, driving outcomes for teams.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="font-semibold text-foreground">Navigation</p>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <p className="font-semibold text-foreground">Connect</p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/baraa-diyab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-blue-50 text-primary hover:bg-blue-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/baraadiyab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-blue-50 text-primary hover:bg-blue-100 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@baraadiyab.com"
                className="p-2 rounded-lg bg-blue-50 text-primary hover:bg-blue-100 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Baraa Diyab. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with <span className="text-primary">React</span> + <span className="text-primary">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
