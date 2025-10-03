import { Link, useLocation } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg">
            <BookOpen className="h-6 w-6" />
          </div>
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            edu bridge
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/">
            <Button 
              variant={location.pathname === "/" ? "default" : "ghost"}
              size="sm"
            >
              Home
            </Button>
          </Link>
          <Link to="/courses">
            <Button 
              variant={location.pathname === "/courses" ? "default" : "ghost"}
              size="sm"
            >
              Courses
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
