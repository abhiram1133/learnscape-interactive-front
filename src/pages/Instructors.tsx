
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { instructors } from '@/data/mock-data';
import { Star, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

const Instructors = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredInstructors = instructors.filter(instructor => 
    instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    instructor.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <MainLayout>
      <div className="container px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Our Instructors</h1>
            <p className="text-gray-600 max-w-2xl">
              Learn from industry experts with real-world experience in their fields
            </p>
          </div>
          <div className="w-full md:w-64">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search instructors..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredInstructors.map(instructor => (
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
                  <p className="text-gray-700 text-sm">{instructor.bio}</p>
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
    </MainLayout>
  );
};

export default Instructors;
