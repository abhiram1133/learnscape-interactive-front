
export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  image: string;
  duration: string; // e.g., "4h 30m"
  level: "Beginner" | "Intermediate" | "Advanced";
  lessonCount: number;
  price?: string;
  rating: number;
  studentsCount: number;
  tags: string[];
  progress?: number; // 0 to 100, for enrolled courses
  featured?: boolean;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl?: string;
  completed?: boolean;
}

export interface Topic {
  id: string;
  name: string;
  image?: string;
  courseCount: number;
}

export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  title: string;
  bio: string;
  courseCount: number;
  studentsCount: number;
  rating: number;
}
