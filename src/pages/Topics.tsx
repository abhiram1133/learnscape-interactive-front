
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { topics } from '@/data/mock-data';
import { Book, Users, Clock, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Topics = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredTopics = topics.filter(topic => 
    topic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <MainLayout>
      <div className="container px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Browse Topics</h1>
            <p className="text-gray-600 max-w-2xl">
              Discover a wide range of topics to advance your skills and knowledge
            </p>
          </div>
          <div className="w-full md:w-64">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search topics..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map(topic => (
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
                      <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-100">HTML/CSS</Badge>
                      <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-100">JavaScript</Badge>
                      <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-100">React</Badge>
                    </>
                  )}
                  {topic.id === '2' && (
                    <>
                      <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-100">Python</Badge>
                      <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-100">R</Badge>
                      <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-100">SQL</Badge>
                    </>
                  )}
                  {topic.id === '3' && (
                    <>
                      <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-100">iOS</Badge>
                      <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-100">Android</Badge>
                      <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-100">React Native</Badge>
                    </>
                  )}
                  {topic.id === '4' && (
                    <>
                      <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-100">Figma</Badge>
                      <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-100">Adobe XD</Badge>
                      <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-100">Prototyping</Badge>
                    </>
                  )}
                  {topic.id === '5' && (
                    <>
                      <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-100">TensorFlow</Badge>
                      <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-100">PyTorch</Badge>
                      <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-100">NLP</Badge>
                    </>
                  )}
                  {topic.id === '6' && (
                    <>
                      <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-100">SEO</Badge>
                      <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-100">Social Media</Badge>
                      <Badge variant="outline" className="bg-brand-50 text-brand-700 hover:bg-brand-100">Analytics</Badge>
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
      </div>
    </MainLayout>
  );
};

export default Topics;
