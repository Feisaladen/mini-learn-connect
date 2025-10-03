import { Course } from "@/types/course";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const completedCourses = JSON.parse(localStorage.getItem("completedCourses") || "[]");
    setIsCompleted(completedCourses.includes(course.id));
  }, [course.id]);

  return (
    <Link to={`/course/${course.id}`}>
      <Card className="overflow-hidden hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1 h-full bg-gradient-to-b from-card to-card/50">
        <div className="relative h-48 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          {isCompleted && (
            <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
              <CheckCircle2 className="h-6 w-6" />
            </div>
          )}
          <Badge className="absolute top-2 left-2 bg-background/90 text-foreground">
            {course.category}
          </Badge>
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-2">{course.title}</CardTitle>
          <CardDescription className="line-clamp-2">{course.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-medium">{course.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{course.students.toLocaleString()} students</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <Badge variant="secondary">{course.level}</Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
