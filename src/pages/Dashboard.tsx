
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { CourseCard } from '@/components/ui/course-card';
import { ProgressCircle } from '@/components/ui/progress-circle';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { courses, enrolledCourses } from '@/data/mock-data';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Award, Book, Calendar, Clock, ArrowRight, BarChart, BookOpen } from 'lucide-react';

// Mock learning activity data for the chart
const learningActivity = [
  { name: 'Mon', minutes: 45 },
  { name: 'Tue', minutes: 30 },
  { name: 'Wed', minutes: 60 },
  { name: 'Thu', minutes: 15 },
  { name: 'Fri', minutes: 90 },
  { name: 'Sat', minutes: 120 },
  { name: 'Sun', minutes: 75 },
];

const Dashboard = () => {
  // Calculate overall progress across all enrolled courses
  const overallProgress = enrolledCourses.length > 0
    ? enrolledCourses.reduce((total, course) => total + (course.progress || 0), 0) / enrolledCourses.length
    : 0;
  
  // Recommended courses (exclude enrolled courses)
  const recommendedCourses = courses
    .filter(course => !enrolledCourses.some(enrolled => enrolled.id === course.id))
    .slice(0, 3);

  return (
    <MainLayout>
      <section className="py-8 bg-brand-50 border-b">
        <div className="container px-4">
          <h1 className="text-3xl font-bold mb-2">My Dashboard</h1>
          <p className="text-gray-600">Track your progress and continue learning</p>
        </div>
      </section>
      
      <section className="py-8">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Overall Progress Card */}
            <Card className="bg-gradient-to-br from-brand-100 to-brand-50">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Overall Progress</p>
                  <h3 className="text-2xl font-bold mb-2">{Math.round(overallProgress)}%</h3>
                  <Progress value={overallProgress} className="h-2 w-40" />
                </div>
                <ProgressCircle progress={overallProgress} size={80} strokeWidth={8} />
              </CardContent>
            </Card>
            
            {/* Learning Time Card */}
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Learning Time</p>
                  <div className="flex items-baseline">
                    <h3 className="text-2xl font-bold mr-2">7.5</h3>
                    <p className="text-gray-500">hours this week</p>
                  </div>
                  <p className="text-xs text-brand-600">+2.5 hours from last week</p>
                </div>
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-brand-600" />
                </div>
              </CardContent>
            </Card>
            
            {/* Courses Enrolled Card */}
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Courses Enrolled</p>
                  <div className="flex items-baseline">
                    <h3 className="text-2xl font-bold mr-2">{enrolledCourses.length}</h3>
                    <p className="text-gray-500">active courses</p>
                  </div>
                  <p className="text-xs text-brand-600">3 completed courses</p>
                </div>
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                  <Book className="h-6 w-6 text-brand-600" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Learning Activity</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={learningActivity}
                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          label={{ value: 'Minutes', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} 
                        />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="minutes" 
                          stroke="#8250ff" 
                          strokeWidth={3} 
                          dot={{ stroke: '#8250ff', strokeWidth: 2, r: 4, fill: 'white' }} 
                          activeDot={{ r: 6, stroke: '#8250ff', strokeWidth: 2, fill: '#8250ff' }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <h3 className="text-xl font-semibold mb-4">My Courses</h3>
              {enrolledCourses.length > 0 ? (
                <div className="space-y-4">
                  {enrolledCourses.map(course => (
                    <Link 
                      to={`/courses/${course.id}`}
                      key={course.id}
                      className="block bg-white border rounded-lg overflow-hidden hover:shadow-md transition-all"
                    >
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-48 h-32 sm:h-auto">
                          <img 
                            src={course.image} 
                            alt={course.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 p-4 flex flex-col">
                          <h4 className="font-semibold mb-2">{course.title}</h4>
                          <p className="text-sm text-gray-500 mb-2">{course.instructor}</p>
                          <div className="mt-auto flex items-center justify-between">
                            <div className="flex-1 pr-4">
                              <div className="flex justify-between text-sm mb-1">
                                <span>Progress</span>
                                <span>{course.progress}%</span>
                              </div>
                              <Progress value={course.progress} className="h-2" />
                            </div>
                            <Button variant="ghost" size="sm" className="flex items-center gap-2">
                              <span>Continue</span>
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  <Button variant="outline" className="w-full mt-4">View All My Courses</Button>
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <BookOpen className="h-12 w-12 text-brand-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No courses yet</h3>
                    <p className="text-gray-500 mb-6">You haven't enrolled in any courses yet.</p>
                    <Button asChild>
                      <Link to="/courses">Browse Courses</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
            
            <div>
              <Tabs defaultValue="upcoming">
                <TabsList className="w-full mb-4">
                  <TabsTrigger value="upcoming" className="flex-1">Upcoming</TabsTrigger>
                  <TabsTrigger value="achievements" className="flex-1">Achievements</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upcoming">
                  <Card className="mb-6">
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-4">Upcoming Events</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                            <Calendar className="h-5 w-5 text-brand-600" />
                          </div>
                          <div>
                            <p className="font-medium">Project Deadline</p>
                            <p className="text-sm text-gray-500">Web Development Project</p>
                            <p className="text-xs text-brand-600 mt-1">Tomorrow, 11:59 PM</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                            <Calendar className="h-5 w-5 text-brand-600" />
                          </div>
                          <div>
                            <p className="font-medium">Live Workshop</p>
                            <p className="text-sm text-gray-500">Advanced React Patterns</p>
                            <p className="text-xs text-brand-600 mt-1">Friday, 3:00 PM</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                            <Calendar className="h-5 w-5 text-brand-600" />
                          </div>
                          <div>
                            <p className="font-medium">Quiz</p>
                            <p className="text-sm text-gray-500">UI/UX Design Fundamentals</p>
                            <p className="text-xs text-brand-600 mt-1">Next Monday, 10:00 AM</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="achievements">
                  <Card className="mb-6">
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-4">Your Achievements</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                            <Award className="h-6 w-6 text-amber-600" />
                          </div>
                          <div>
                            <p className="font-medium">Perfect Attendance</p>
                            <p className="text-xs text-gray-500">Completed 7 days streak</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                            <Award className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">First Certificate</p>
                            <p className="text-xs text-gray-500">Completed HTML & CSS Basics</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center opacity-50">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                            <BarChart className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <p className="font-medium">Top Performer</p>
                            <p className="text-xs text-gray-500">Score in top 10% (Locked)</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              
              <div className="bg-brand-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-3">Study Goal</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">Weekly goal: 10 hours</span>
                  <span className="text-sm font-medium">75% complete</span>
                </div>
                <Progress value={75} className="h-2 mb-3" />
                <p className="text-sm text-gray-600">2.5 hours left to reach your weekly goal</p>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Recommended For You</h3>
              <div className="space-y-4">
                {recommendedCourses.map(course => (
                  <Link 
                    to={`/courses/${course.id}`}
                    key={course.id}
                    className="block bg-white border rounded-lg overflow-hidden hover:shadow-md transition-all"
                  >
                    <div className="aspect-video">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-1 line-clamp-1">{course.title}</h4>
                      <p className="text-sm text-gray-500 mb-2">{course.instructor}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">{course.price}</div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 text-amber-500 mr-1" />
                          <span className="text-sm">{course.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Dashboard;
