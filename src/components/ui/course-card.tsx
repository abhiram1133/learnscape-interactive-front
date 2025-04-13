
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Star, Users } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ProgressCircle } from "@/components/ui/progress-circle";
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';

export interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  image: string;
  duration: string; // e.g., "4h 30m"
  level: "Beginner" | "Intermediate" | "Advanced";
  lessonCount: number;
  price?: string;
  rating?: number;
  studentsCount?: number;
  progress?: number; // 0 to 100, optional for enrolled courses
  className?: string;
  featured?: boolean;
}

export function CourseCard({
  id,
  title,
  instructor,
  image,
  duration,
  level,
  lessonCount,
  price,
  rating = 0,
  studentsCount = 0,
  progress,
  className,
  featured = false,
}: CourseCardProps) {
  const levelColorMap = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-blue-100 text-blue-800",
    Advanced: "bg-purple-100 text-purple-800"
  };
  
  return (
    <Link to={`/courses/${id}`}>
      <Card className={cn(
        "overflow-hidden transition-all hover:shadow-lg h-full flex flex-col hover-scale", 
        className,
        featured && "border-brand-300 shadow-md"
      )}>
        <div className="aspect-video relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {featured && (
            <Badge className="absolute top-2 left-2 bg-brand-500 hover:bg-brand-600">Featured</Badge>
          )}
          {progress !== undefined && (
            <div className="absolute bottom-2 right-2">
              <ProgressCircle progress={progress} size={36} />
            </div>
          )}
        </div>
        <CardContent className="p-4 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <Badge variant="outline" className={cn("font-normal", levelColorMap[level])}>
              {level}
            </Badge>
            {price !== undefined ? (
              <div className="font-semibold text-base">{price}</div>
            ) : null}
          </div>
          <h3 className="text-lg font-semibold line-clamp-2 mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{instructor}</p>
          
          <div className="flex items-center mt-auto">
            {rating > 0 && (
              <div className="flex items-center mr-4">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400 mr-1" />
                <span className="text-sm font-medium">{rating.toFixed(1)}</span>
              </div>
            )}
            {studentsCount > 0 && (
              <div className="flex items-center text-muted-foreground">
                <Users className="h-4 w-4 mr-1" />
                <span className="text-xs">{studentsCount.toLocaleString()} students</span>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="px-4 py-3 border-t bg-muted/30">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-xs">{duration}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <BookOpen className="h-4 w-4 mr-1" />
              <span className="text-xs">{lessonCount} lessons</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
