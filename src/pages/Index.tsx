import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { Link } from "react-router-dom";
import { BookOpen, Users, Award, TrendingUp } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
        </div>
        
        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Bridge Your Way to Success
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Unlock your potential with expert-led courses designed to help you master in-demand skills.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/courses">
                <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Explore Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
                <BookOpen className="h-6 w-6" />
              </div>
              <p className="text-3xl font-bold mb-1">{courses.length}+</p>
              <p className="text-muted-foreground">Active Courses</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
                <Users className="h-6 w-6" />
              </div>
              <p className="text-3xl font-bold mb-1">48K+</p>
              <p className="text-muted-foreground">Students</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
                <Award className="h-6 w-6" />
              </div>
              <p className="text-3xl font-bold mb-1">95%</p>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
                <TrendingUp className="h-6 w-6" />
              </div>
              <p className="text-3xl font-bold mb-1">4.8</p>
              <p className="text-muted-foreground">Avg Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Courses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start your learning journey with our most popular courses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/courses">
              <Button size="lg" variant="outline">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
