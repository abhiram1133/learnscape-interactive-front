
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '@/data/mock-data';
import MainLayout from '@/components/layout/MainLayout';
import { VideoPlayer } from '@/components/ui/video-player';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { Book, Clock, Users, Star, CheckCircle, PlayCircle, User } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeLesson, setActiveLesson] = useState(0);
  
  const course = courses.find(course => course.id === id);
  
  if (!course) {
    return (
      <MainLayout>
        <div className="container px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <p className="mb-8">The course you are looking for does not exist.</p>
          <Button asChild>
            <a href="/courses">Browse Courses</a>
          </Button>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      {/* Course Hero */}
      <section className="bg-brand-50 py-12 border-b">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <div className="mb-8 flex flex-wrap gap-2">
                {course.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-gray-700 mb-6">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-amber-400 fill-amber-400 mr-1" />
                  <span className="font-medium mr-1">{course.rating}</span>
                  <span className="text-gray-500">({course.studentsCount} students)</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Book className="h-4 w-4 text-gray-500 mr-2" />
                  <span>{course.lessonCount} lessons</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="outline" className={
                    course.level === "Beginner" ? "bg-green-100 text-green-800 border-green-200" : 
                    course.level === "Intermediate" ? "bg-blue-100 text-blue-800 border-blue-200" : 
                    "bg-purple-100 text-purple-800 border-purple-200"
                  }>
                    {course.level}
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center mb-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mr-3">
                    <User className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <p className="font-medium">Created by</p>
                    <p className="text-brand-600">{course.instructor}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <div className="aspect-video rounded-md overflow-hidden mb-6">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                </div>
                <div className="text-3xl font-bold mb-6">{course.price || "Free"}</div>
                <Button className="w-full mb-4 text-lg py-6">Enroll Now</Button>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3" />
                    <span>Full lifetime access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3" />
                    <span>Access on mobile and desktop</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3" />
                    <span>Certificate of completion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Content */}
      <section className="py-12">
        <div className="container px-4">
          <Tabs defaultValue="content">
            <TabsList className="mb-8 w-full max-w-md">
              <TabsTrigger value="content" className="flex-1">Course Content</TabsTrigger>
              <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
              <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="content" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="rounded-lg overflow-hidden mb-6">
                    <VideoPlayer 
                      src={course.lessons[activeLesson].videoUrl || ''} 
                      title={course.lessons[activeLesson].title}
                      poster={course.image}
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{course.lessons[activeLesson].title}</h2>
                  <p className="text-gray-600 mb-4">
                    This lesson explores key concepts and practical applications related to {course.lessons[activeLesson].title.toLowerCase()}. 
                    Follow along with the instructor as you learn step-by-step how to master these important skills.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4">Course Lessons</h3>
                  <div className="space-y-2">
                    {course.lessons.map((lesson, index) => (
                      <div 
                        key={lesson.id}
                        className={`p-3 rounded-md flex items-center justify-between cursor-pointer ${
                          activeLesson === index ? 'bg-brand-100 border border-brand-200' : 'bg-white border hover:border-brand-200'
                        }`}
                        onClick={() => setActiveLesson(index)}
                      >
                        <div className="flex items-center">
                          <PlayCircle className={`h-5 w-5 mr-3 ${activeLesson === index ? 'text-brand-600' : 'text-gray-400'}`} />
                          <span className={activeLesson === index ? 'font-medium' : ''}>{lesson.title}</span>
                        </div>
                        <span className="text-sm text-gray-500">{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="overview">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold mb-6">About This Course</h2>
                <p className="text-gray-700 mb-8">
                  {course.description}
                </p>
                
                <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                    <span>Understand the core principles of {course.tags[0]}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                    <span>Build real-world projects from scratch</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                    <span>Master advanced techniques and best practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                    <span>Apply your skills to solve complex problems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                    <span>Optimize your workflow for maximum efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                    <span>Stay up-to-date with industry standards</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-bold mb-4">Course Content</h3>
                <Accordion type="single" collapsible className="mb-8">
                  <AccordionItem value="section-1">
                    <AccordionTrigger className="text-left">
                      <div>
                        <div className="font-semibold">Introduction to {course.tags[0]}</div>
                        <div className="text-sm text-gray-500 font-normal">3 lessons • 45 minutes</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {course.lessons.slice(0, 3).map(lesson => (
                          <li key={lesson.id} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                            <div className="flex items-center">
                              <PlayCircle className="h-4 w-4 text-gray-400 mr-2" />
                              <span>{lesson.title}</span>
                            </div>
                            <span className="text-sm text-gray-500">{lesson.duration}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="section-2">
                    <AccordionTrigger className="text-left">
                      <div>
                        <div className="font-semibold">Core Concepts and Techniques</div>
                        <div className="text-sm text-gray-500 font-normal">4 lessons • 1 hour 10 minutes</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {course.lessons.slice(3, 5).map(lesson => (
                          <li key={lesson.id} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                            <div className="flex items-center">
                              <PlayCircle className="h-4 w-4 text-gray-400 mr-2" />
                              <span>{lesson.title}</span>
                            </div>
                            <span className="text-sm text-gray-500">{lesson.duration}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <h3 className="text-xl font-bold mb-4">Requirements</h3>
                <ul className="list-disc pl-5 mb-8 space-y-2 text-gray-700">
                  <li>Basic understanding of {course.tags[1]} (recommended)</li>
                  <li>A computer with internet access</li>
                  <li>Enthusiasm and willingness to learn</li>
                </ul>
                
                <h3 className="text-xl font-bold mb-4">Who This Course Is For</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Beginners looking to build a solid foundation in {course.tags[0]}</li>
                  <li>Intermediate learners wanting to deepen their knowledge</li>
                  <li>Professionals looking to stay current with industry trends</li>
                  <li>Anyone interested in mastering {course.tags.join(', ')}</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="max-w-3xl">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Student Reviews</h2>
                    <p className="text-gray-600">See what our students have to say</p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-3xl font-bold mr-2">{course.rating}</div>
                    <div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star 
                            key={star} 
                            className={`h-5 w-5 ${star <= Math.round(course.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-500">{course.studentsCount} reviews</div>
                    </div>
                  </div>
                </div>
                
                {/* Sample reviews */}
                <div className="space-y-8">
                  <div className="border-b pb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <User className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">Alex Johnson</p>
                        <p className="text-sm text-gray-500">2 weeks ago</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= 5 ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700">
                      This course is amazing! The instructor explains complex concepts in a way that's easy to understand. 
                      I've already started applying what I've learned to my own projects.
                    </p>
                  </div>
                  
                  <div className="border-b pb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <User className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">Maria Garcia</p>
                        <p className="text-sm text-gray-500">1 month ago</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= 4 ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700">
                      Great course content and excellent delivery. The practical examples really helped me grasp the concepts. 
                      The only improvement I'd suggest is to include more advanced topics in the later sections.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <User className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">David Kim</p>
                        <p className="text-sm text-gray-500">2 months ago</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= 5 ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700">
                      One of the best online courses I've ever taken. The instructor is knowledgeable and engaging. 
                      The projects we worked on were relevant and challenging. Highly recommend to anyone interested in the field.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Related Courses */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="container px-4">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses
              .filter(relatedCourse => 
                relatedCourse.id !== course.id && 
                relatedCourse.tags.some(tag => course.tags.includes(tag))
              )
              .slice(0, 4)
              .map(relatedCourse => (
                <a 
                  key={relatedCourse.id} 
                  href={`/courses/${relatedCourse.id}`}
                  className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video">
                    <img 
                      src={relatedCourse.image} 
                      alt={relatedCourse.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold line-clamp-2 mb-1">{relatedCourse.title}</h3>
                    <p className="text-sm text-gray-500">{relatedCourse.instructor}</p>
                    <div className="flex items-center mt-2">
                      <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                      <span className="text-sm ml-1">{relatedCourse.rating}</span>
                      <span className="text-xs text-gray-500 ml-2">({relatedCourse.studentsCount.toLocaleString()})</span>
                    </div>
                    <div className="mt-2 font-medium">{relatedCourse.price}</div>
                  </div>
                </a>
              ))
            }
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CourseDetail;
