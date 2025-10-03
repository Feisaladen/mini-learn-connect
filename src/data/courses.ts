import { Course } from "@/types/course";
import webDevImage from "@/assets/course-web-dev.jpg";
import dataScienceImage from "@/assets/course-data-science.jpg";
import uiUxImage from "@/assets/course-ui-ux.jpg";
import marketingImage from "@/assets/course-marketing.jpg";

export const courses: Course[] = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    description: "Master modern web development from scratch. Learn HTML, CSS, JavaScript, React, and Node.js to build full-stack applications.",
    instructor: "Sarah Johnson",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    students: 15420,
    rating: 4.8,
    image: webDevImage,
    category: "Development",
    modules: [
      { id: "1", title: "HTML & CSS Fundamentals", duration: "2 weeks", lessons: 15 },
      { id: "2", title: "JavaScript Essentials", duration: "3 weeks", lessons: 20 },
      { id: "3", title: "React & Modern Frontend", duration: "4 weeks", lessons: 25 },
      { id: "4", title: "Backend with Node.js", duration: "3 weeks", lessons: 18 },
    ],
  },
  {
    id: "2",
    title: "Data Science & Machine Learning",
    description: "Dive into data science and machine learning. Learn Python, data analysis, visualization, and build ML models.",
    instructor: "Dr. Michael Chen",
    duration: "16 weeks",
    level: "Intermediate",
    students: 12340,
    rating: 4.9,
    image: dataScienceImage,
    category: "Data Science",
    modules: [
      { id: "1", title: "Python for Data Science", duration: "3 weeks", lessons: 18 },
      { id: "2", title: "Data Analysis & Visualization", duration: "4 weeks", lessons: 22 },
      { id: "3", title: "Machine Learning Fundamentals", duration: "5 weeks", lessons: 28 },
      { id: "4", title: "Deep Learning & Neural Networks", duration: "4 weeks", lessons: 24 },
    ],
  },
  {
    id: "3",
    title: "UI/UX Design Masterclass",
    description: "Create beautiful, user-friendly interfaces. Learn design principles, prototyping, and modern design tools.",
    instructor: "Emily Rodriguez",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    students: 9850,
    rating: 4.7,
    image: uiUxImage,
    category: "Design",
    modules: [
      { id: "1", title: "Design Principles & Theory", duration: "2 weeks", lessons: 12 },
      { id: "2", title: "User Research & Testing", duration: "2 weeks", lessons: 14 },
      { id: "3", title: "Wireframing & Prototyping", duration: "3 weeks", lessons: 18 },
      { id: "4", title: "UI Design with Figma", duration: "3 weeks", lessons: 16 },
    ],
  },
  {
    id: "4",
    title: "Digital Marketing Strategy",
    description: "Master digital marketing across all channels. Learn SEO, social media, content marketing, and analytics.",
    instructor: "David Thompson",
    duration: "8 weeks",
    level: "Beginner",
    students: 11200,
    rating: 4.6,
    image: marketingImage,
    category: "Marketing",
    modules: [
      { id: "1", title: "Marketing Fundamentals", duration: "2 weeks", lessons: 10 },
      { id: "2", title: "SEO & Content Marketing", duration: "2 weeks", lessons: 12 },
      { id: "3", title: "Social Media Marketing", duration: "2 weeks", lessons: 14 },
      { id: "4", title: "Analytics & Optimization", duration: "2 weeks", lessons: 11 },
    ],
  },
];
