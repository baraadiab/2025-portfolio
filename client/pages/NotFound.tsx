import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="container max-w-2xl mx-auto px-6 text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-7xl md:text-8xl font-bold text-primary">404</h1>
          <h2 className="text-4xl font-bold text-foreground">Page Not Found</h2>
          <p className="text-xl text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-blue-100 space-y-6">
          <p className="text-foreground">
            Let me help you get back on track. Here are some useful links:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Home
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/portfolio"
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
