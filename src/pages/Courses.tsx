
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { CourseCard } from '@/components/ui/course-card';
import { courses, topics } from '@/data/mock-data';
import { Button } from '@/components/ui/button';
import { Search, Filter, Check, X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string | undefined>(undefined);
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>(undefined);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  // Extract all unique tags from courses
  const allTags = Array.from(
    new Set(courses.flatMap(course => course.tags))
  ).sort();

  // Filter courses based on criteria
  const filteredCourses = courses.filter(course => {
    // Search term filter
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Level filter
    const matchesLevel = !selectedLevel || course.level === selectedLevel;
    
    // Topic filter (simplified for demo)
    const matchesTopic = !selectedTopic || course.tags.includes(selectedTopic);
    
    // Tags filter
    const matchesTags = selectedTags.length === 0 || 
                        selectedTags.some(tag => course.tags.includes(tag));
    
    // Featured filter
    const matchesFeatured = !showFeaturedOnly || course.featured;
    
    // Price filter (simplified for demo since we have strings as prices)
    // In a real app, you would convert price strings to numbers and compare
    
    return matchesSearch && matchesLevel && matchesTopic && matchesTags && matchesFeatured;
  });

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedLevel(undefined);
    setSelectedTopic(undefined);
    setPriceRange([0, 100]);
    setSelectedTags([]);
    setShowFeaturedOnly(false);
  };

  return (
    <MainLayout>
      {/* Header */}
      <section className="bg-brand-50 py-12 border-b">
        <div className="container px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Discover our comprehensive library of courses designed to help you master new skills, advance your career, or pursue your passions.
          </p>
          
          {/* Search bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for courses or instructors"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
              />
            </div>
            <Button 
              className="md:hidden flex items-center gap-2" 
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-5 w-5" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Mobile Toggle */}
            <div className={`md:w-1/4 md:block ${showFilters ? 'block' : 'hidden'}`}>
              <div className="sticky top-20 bg-white rounded-lg border p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Filters</h2>
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm">
                    Clear All
                  </Button>
                </div>
                
                {/* Level Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Level</h3>
                  <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Topics Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Topic</h3>
                  <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {topics.map(topic => (
                          <SelectItem key={topic.id} value={topic.name}>
                            {topic.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Price Range</h3>
                  <div className="px-2">
                    <Slider 
                      value={priceRange} 
                      max={100} 
                      step={1} 
                      onValueChange={setPriceRange}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                {/* Featured Only */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="featured" 
                      checked={showFeaturedOnly}
                      onCheckedChange={setShowFeaturedOnly}
                    />
                    <Label htmlFor="featured">Featured Courses Only</Label>
                  </div>
                </div>
                
                {/* Tags */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Topics & Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.slice(0, 12).map(tag => (
                      <Badge 
                        key={tag} 
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                        {selectedTags.includes(tag) && <X className="ml-1 h-3 w-3" />}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Course Grid */}
            <div className="md:w-3/4">
              <div className="mb-6 flex flex-wrap justify-between items-center">
                <p className="text-gray-600">Showing {filteredCourses.length} courses</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Popular" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="popular">Most Popular</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="highest">Highest Rated</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map(course => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                  <Button onClick={clearFilters}>Clear All Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Courses;
