import { useParams, Link } from "react-router-dom";
import { courses } from "@/data/courses";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock, BookOpen, CheckCircle2, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (course) {
      const completedCourses = JSON.parse(localStorage.getItem("completedCourses") || "[]");
      setIsCompleted(completedCourses.includes(course.id));
    }
  }, [course]);

  const toggleCompletion = () => {
    if (!course) return;

    const completedCourses = JSON.parse(localStorage.getItem("completedCourses") || "[]");
    
    if (isCompleted) {
      const updated = completedCourses.filter((courseId: string) => courseId !== course.id);
      localStorage.setItem("completedCourses", JSON.stringify(updated));
      setIsCompleted(false);
      toast.success("Course marked as incomplete");
    } else {
      completedCourses.push(course.id);
      localStorage.setItem("completedCourses", JSON.stringify(completedCourses));
      setIsCompleted(true);
      toast.success("🎉 Congratulations! Course marked as completed!");
    }
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Link to="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <Link to="/courses">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative h-96 rounded-lg overflow-hidden mb-8">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              {isCompleted && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full p-2">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
              )}
            </div>

            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{course.description}</p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <span className="font-semibold">{course.rating}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-5 w-5" />
                <span>{course.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span>{course.duration}</span>
              </div>
              <Badge variant="secondary" className="text-base">{course.level}</Badge>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Course Modules</CardTitle>
                <CardDescription>What you'll learn in this course</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <div
                      key={module.id}
                      className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{module.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{module.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            <span>{module.lessons} lessons</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Course Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Instructor</p>
                  <p className="font-semibold">{course.instructor}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Category</p>
                  <Badge>{course.category}</Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Duration</p>
                  <p className="font-semibold">{course.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Level</p>
                  <p className="font-semibold">{course.level}</p>
                </div>
                
                <Button
                  onClick={toggleCompletion}
                  variant={isCompleted ? "secondary" : "hero"}
                  size="lg"
                  className="w-full"
                >
                  {isCompleted ? (
                    <>
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      Completed
                    </>
                  ) : (
                    <>
                      Mark as Complete
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;
