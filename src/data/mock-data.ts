
import { Course, Topic, Instructor } from '../types';

// Course Images
export const courseImages = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
];

// Topic Images
export const topicImages = [
  'https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1607706009771-de8808640bcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
];

export const sampleVideo = "https://res.cloudinary.com/yourdomain/video/upload/v1631456765/sample-video.mp4";

export const topics: Topic[] = [
  {
    id: '1',
    name: 'Web Development',
    image: topicImages[0],
    courseCount: 42,
  },
  {
    id: '2',
    name: 'Data Science',
    image: topicImages[1],
    courseCount: 31,
  },
  {
    id: '3',
    name: 'Mobile Development',
    image: topicImages[2],
    courseCount: 24,
  },
  {
    id: '4',
    name: 'UX/UI Design',
    image: topicImages[3],
    courseCount: 18,
  },
  {
    id: '5',
    name: 'Machine Learning',
    image: topicImages[4],
    courseCount: 27,
  },
  {
    id: '6',
    name: 'Digital Marketing',
    image: topicImages[5],
    courseCount: 22,
  },
];

export const instructors: Instructor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    avatar: 'https://i.pravatar.cc/150?img=1',
    title: 'Data Science Professor',
    bio: 'Dr. Johnson has over 15 years of experience in data science and machine learning. She has worked with major tech companies and has published numerous research papers.',
    courseCount: 8,
    studentsCount: 12400,
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://i.pravatar.cc/150?img=3',
    title: 'Senior Web Developer',
    bio: 'Michael is a full-stack developer with expertise in React, Node.js, and cloud technologies. He has helped build enterprise-scale applications for Fortune 500 companies.',
    courseCount: 12,
    studentsCount: 18700,
    rating: 4.9,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    avatar: 'https://i.pravatar.cc/150?img=5',
    title: 'UX/UI Design Lead',
    bio: 'With a background in psychology and visual design, Emily specializes in creating user-centered interfaces. She previously led design teams at several startup unicorns.',
    courseCount: 6,
    studentsCount: 9200,
    rating: 4.7,
  },
  {
    id: '4',
    name: 'James Wilson',
    avatar: 'https://i.pravatar.cc/150?img=8',
    title: 'Mobile App Developer',
    bio: 'James has been developing mobile applications for iOS and Android for over a decade. He specializes in React Native and has published several popular apps.',
    courseCount: 9,
    studentsCount: 15800,
    rating: 4.6,
  },
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn web development from scratch with HTML, CSS, JavaScript, React, Node.js and more! Build real-world projects and deploy them to the cloud.',
    instructor: 'Michael Chen',
    image: courseImages[0],
    duration: '42h 15m',
    level: 'Beginner',
    lessonCount: 142,
    price: '$89.99',
    rating: 4.9,
    studentsCount: 8245,
    tags: ['Web Development', 'HTML', 'CSS', 'JavaScript', 'React'],
    featured: true,
    lessons: [
      { id: 'l1', title: 'Introduction to Web Development', duration: '15:30', videoUrl: sampleVideo },
      { id: 'l2', title: 'HTML Fundamentals', duration: '42:15', videoUrl: sampleVideo },
      { id: 'l3', title: 'CSS Styling Basics', duration: '38:20', videoUrl: sampleVideo },
      { id: 'l4', title: 'JavaScript Fundamentals', duration: '55:10', videoUrl: sampleVideo },
      { id: 'l5', title: 'Building Your First Website', duration: '1:22:45', videoUrl: sampleVideo },
    ],
  },
  {
    id: '2',
    title: 'Machine Learning A-Z: Hands-On Python & R',
    description: 'Learn to create Machine Learning Algorithms in Python and R from scratch! Master Data Science, Machine Learning, and the Python programming language.',
    instructor: 'Dr. Sarah Johnson',
    image: courseImages[1],
    duration: '36h 30m',
    level: 'Intermediate',
    lessonCount: 124,
    price: '$94.99',
    rating: 4.8,
    studentsCount: 12430,
    tags: ['Machine Learning', 'Python', 'Data Science', 'R', 'AI'],
    lessons: [
      { id: 'l1', title: 'Introduction to Machine Learning', duration: '22:15', videoUrl: sampleVideo },
      { id: 'l2', title: 'Data Preprocessing', duration: '45:33', videoUrl: sampleVideo },
      { id: 'l3', title: 'Regression Models', duration: '1:12:40', videoUrl: sampleVideo },
      { id: 'l4', title: 'Classification Models', duration: '1:30:15', videoUrl: sampleVideo },
      { id: 'l5', title: 'Clustering Algorithms', duration: '58:22', videoUrl: sampleVideo },
    ],
  },
  {
    id: '3',
    title: 'Modern UI/UX Design Masterclass',
    description: 'Master the art of UI/UX design by learning principles, tools and practical techniques. Create stunning interfaces and user experiences from scratch.',
    instructor: 'Emily Rodriguez',
    image: courseImages[2],
    duration: '28h 45m',
    level: 'Beginner',
    lessonCount: 94,
    price: '$74.99',
    rating: 4.7,
    studentsCount: 9120,
    tags: ['UI/UX', 'Design', 'Figma', 'Adobe XD', 'Prototyping'],
    featured: true,
    lessons: [
      { id: 'l1', title: 'Introduction to UI/UX Design', duration: '18:30', videoUrl: sampleVideo },
      { id: 'l2', title: 'Design Thinking Process', duration: '42:15', videoUrl: sampleVideo },
      { id: 'l3', title: 'Wireframing Basics', duration: '35:48', videoUrl: sampleVideo },
      { id: 'l4', title: 'Learning Figma', duration: '1:05:22', videoUrl: sampleVideo },
      { id: 'l5', title: 'Creating Interactive Prototypes', duration: '52:10', videoUrl: sampleVideo },
    ],
  },
  {
    id: '4',
    title: 'The Complete iOS App Development Bootcamp',
    description: 'Learn to build iOS apps with Swift - Apple\'s programming language for iOS development. Create beautiful, functional apps and publish them on the App Store.',
    instructor: 'James Wilson',
    image: courseImages[3],
    duration: '44h 20m',
    level: 'Intermediate',
    lessonCount: 135,
    price: '$99.99',
    rating: 4.6,
    studentsCount: 15840,
    tags: ['iOS', 'Swift', 'Mobile Development', 'App Development', 'Xcode'],
    lessons: [
      { id: 'l1', title: 'Introduction to iOS Development', duration: '25:10', videoUrl: sampleVideo },
      { id: 'l2', title: 'Swift Programming Basics', duration: '48:35', videoUrl: sampleVideo },
      { id: 'l3', title: 'Building UI with UIKit', duration: '1:15:20', videoUrl: sampleVideo },
      { id: 'l4', title: 'Working with Data', duration: '58:45', videoUrl: sampleVideo },
      { id: 'l5', title: 'Publishing to the App Store', duration: '42:30', videoUrl: sampleVideo },
    ],
  },
  {
    id: '5',
    title: 'Advanced Data Analysis with Python',
    description: 'Take your data analysis skills to the next level with Python, Pandas, NumPy, Matplotlib and more. Learn to extract valuable insights from complex datasets.',
    instructor: 'Dr. Sarah Johnson',
    image: courseImages[4],
    duration: '32h 15m',
    level: 'Advanced',
    lessonCount: 98,
    price: '$84.99',
    rating: 4.9,
    studentsCount: 7620,
    tags: ['Data Analysis', 'Python', 'Pandas', 'NumPy', 'Visualization'],
    lessons: [
      { id: 'l1', title: 'Advanced Python for Data Analysis', duration: '35:20', videoUrl: sampleVideo },
      { id: 'l2', title: 'Working with Pandas', duration: '55:45', videoUrl: sampleVideo },
      { id: 'l3', title: 'Data Cleaning Techniques', duration: '48:15', videoUrl: sampleVideo },
      { id: 'l4', title: 'Statistical Analysis', duration: '1:08:30', videoUrl: sampleVideo },
      { id: 'l5', title: 'Advanced Visualization', duration: '45:55', videoUrl: sampleVideo },
    ],
  },
  {
    id: '6',
    title: 'Full-Stack JavaScript Development',
    description: 'Learn to build complete applications using JavaScript from front to back. Master React for frontend and Node.js for backend development.',
    instructor: 'Michael Chen',
    image: courseImages[5],
    duration: '38h 30m',
    level: 'Intermediate',
    lessonCount: 115,
    price: '$89.99',
    rating: 4.8,
    studentsCount: 10540,
    tags: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express'],
    lessons: [
      { id: 'l1', title: 'Full-Stack Overview', duration: '20:15', videoUrl: sampleVideo },
      { id: 'l2', title: 'React Fundamentals', duration: '1:05:30', videoUrl: sampleVideo },
      { id: 'l3', title: 'Building APIs with Express', duration: '48:25', videoUrl: sampleVideo },
      { id: 'l4', title: 'Working with MongoDB', duration: '52:40', videoUrl: sampleVideo },
      { id: 'l5', title: 'Authentication & Authorization', duration: '1:10:15', videoUrl: sampleVideo },
    ],
  },
];

// Enrolled courses with progress
export const enrolledCourses: Course[] = [
  {
    ...courses[0],
    progress: 65,
  },
  {
    ...courses[2],
    progress: 32,
  },
  {
    ...courses[5],
    progress: 18,
  },
];
