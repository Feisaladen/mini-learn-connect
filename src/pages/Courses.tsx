import { courses } from "@/data/courses";
import { CourseCard } from "@/components/CourseCard";
import { Header } from "@/components/Header";

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            All Courses
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover our comprehensive collection of courses designed to help you master new skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Courses;
