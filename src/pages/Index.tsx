import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { CourseCard } from '@/components/ui/course-card';
import { courses, topics, instructors } from '@/data/mock-data';
import { 
  Book, 
  Activity, 
  ArrowRight, 
  GraduationCap, 
  Star, 
  Users, 
  BookOpen, 
  Award,
  CheckCircle,
  Clock,
  Layers
} from 'lucide-react';

const featuredCourses = courses.filter(course => course.featured);
const popularCourses = [...courses].sort((a, b) => b.studentsCount - a.studentsCount).slice(0, 3);

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 animate-fade-in">
              Unlock Your Potential with Expert-Led Online Courses
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Gain new skills, advance your career, and learn from industry experts with our interactive learning platform.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                <Link to="/dashboard">My Dashboard</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10 animate-scale-in">
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Students learning online"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-t border-b">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg">
              <div className="bg-brand-100 text-brand-600 p-3 rounded-full mb-4">
                <Book className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold mb-2">350+</div>
              <div className="text-center text-gray-500">Online Courses</div>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg">
              <div className="bg-brand-100 text-brand-600 p-3 rounded-full mb-4">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold mb-2">50k+</div>
              <div className="text-center text-gray-500">Active Students</div>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg">
              <div className="bg-brand-100 text-brand-600 p-3 rounded-full mb-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold mb-2">120+</div>
              <div className="text-center text-gray-500">Expert Instructors</div>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg">
              <div className="bg-brand-100 text-brand-600 p-3 rounded-full mb-4">
                <Award className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-center text-gray-500">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Courses</h2>
              <p className="text-gray-600">Explore our handpicked selection of top-rated courses</p>
            </div>
            <Button variant="ghost" className="text-brand-600 flex items-center gap-2">
              <Link to="/courses" className="flex items-center gap-2">
                View All Courses <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Topics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse Topics</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of topics and find the perfect course to help you achieve your goals
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {topics.map(topic => (
              <Link
                to={`/topics/${topic.id}`}
                key={topic.id}
                className="group bg-white border rounded-xl overflow-hidden hover-scale shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative">
                  {topic.image && (
                    <img
                      src={topic.image}
                      alt={topic.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <div>
                      <h3 className="text-white font-medium text-xl mb-1">{topic.name}</h3>
                      <p className="text-white/90 text-sm">{topic.courseCount} courses</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Users className="h-4 w-4" />
                    <span>{Math.floor(topic.courseCount * 84)} students enrolled</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {topic.id === '1' && (
                      <>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">HTML/CSS</span>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">JavaScript</span>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">React</span>
                      </>
                    )}
                    {topic.id === '2' && (
                      <>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">Python</span>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">R</span>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">SQL</span>
                      </>
                    )}
                    {topic.id === '3' && (
                      <>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">iOS</span>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">Android</span>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">React Native</span>
                      </>
                    )}
                    {topic.id === '4' && (
                      <>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">Figma</span>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">Adobe XD</span>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">Prototyping</span>
                      </>
                    )}
                    {topic.id === '5' && (
                      <>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">TensorFlow</span>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">PyTorch</span>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">NLP</span>
                      </>
                    )}
                    {topic.id === '6' && (
                      <>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">SEO</span>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">Social Media</span>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">Analytics</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Book className="h-4 w-4" />
                      <span>{topic.courseCount} courses</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{10 * topic.courseCount}+ hours</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" className="border-brand-600 text-brand-600 hover:bg-brand-50">
              <Link to="/topics" className="flex items-center gap-2">
                Browse All Topics <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Most Popular</h2>
              <p className="text-gray-600">Join thousands of students in our top-rated courses</p>
            </div>
            <Button variant="ghost" className="text-brand-600 flex items-center gap-2">
              <Link to="/courses" className="flex items-center gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularCourses.map(course => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Instructors Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Meet Our Instructors</h2>
              <p className="text-gray-600">Learn from industry experts with real-world experience</p>
            </div>
            <Button variant="ghost" className="text-brand-600 flex items-center gap-2">
              <Link to="/instructors" className="flex items-center gap-2">
                View All Instructors <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map(instructor => (
              <div key={instructor.id} className="bg-white border rounded-xl overflow-hidden hover-scale shadow-sm hover:shadow-md transition-all">
                <div className="relative">
                  <div className="flex justify-center pt-8 pb-4 bg-brand-50">
                    <img
                      src={instructor.avatar}
                      alt={instructor.name}
                      className="rounded-full w-24 h-24 object-cover border-4 border-white shadow-md"
                    />
                  </div>
                </div>
                <div className="p-5 text-center">
                  <Link to={`/instructors/${instructor.id}`}>
                    <h3 className="font-bold text-xl mb-1 hover:text-brand-600 transition-colors">{instructor.name}</h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-3">{instructor.title}</p>
                  
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-brand-50 rounded-full">
                      <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                      <span className="font-medium">{instructor.rating}</span>
                      <span className="text-gray-500 text-sm"> / 5</span>
                    </div>
                  </div>
                  
                  <div className="mb-4 px-4">
                    <p className="text-gray-700 text-sm line-clamp-2">{instructor.bio}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="font-semibold text-gray-900">{instructor.courseCount}</p>
                      <p className="text-gray-500 text-xs">Courses</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="font-semibold text-gray-900">{instructor.studentsCount.toLocaleString()}</p>
                      <p className="text-gray-500 text-xs">Students</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-brand-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose LearnScape</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform is designed to provide you with the best online learning experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-brand-100 text-brand-600 p-3 rounded-full inline-block mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert-Led Courses</h3>
              <p className="text-gray-600">
                Learn from industry professionals with real-world experience and proven expertise in their fields.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-brand-100 text-brand-600 p-3 rounded-full inline-block mb-4">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Track Your Progress</h3>
              <p className="text-gray-600">
                Monitor your learning journey with detailed progress tracking and performance analytics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-brand-100 text-brand-600 p-3 rounded-full inline-block mb-4">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">High-Quality Content</h3>
              <p className="text-gray-600">
                Access professionally produced videos, engaging assignments, and comprehensive learning resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-600 py-16">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Learning?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            Join thousands of students already learning on LearnScape and take the next step in your career journey.
          </p>
          <Button size="lg" variant="secondary" className="text-brand-600 hover:bg-white">
            <Link to="/courses">Browse All Courses</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
