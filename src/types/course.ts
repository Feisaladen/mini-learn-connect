export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  students: number;
  rating: number;
  image: string;
  modules: Module[];
  category: string;
}

export interface Module {
  id: string;
  title: string;
  duration: string;
  lessons: number;
}
