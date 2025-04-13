
import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { BookX } from "lucide-react";

const NotFound = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mb-6">
          <BookX className="h-10 w-10 text-brand-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md">
          We couldn't find the page you were looking for. It might have been moved or doesn't exist.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/courses">Browse Courses</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
