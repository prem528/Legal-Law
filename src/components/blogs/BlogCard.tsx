import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { BookOpen } from "lucide-react";
import { AspectRatio } from "../ui/aspect-ratio";
import React from "react";

interface BlogCardProps {
  id: number;
  title?: string;
  excerpt?: string;
  category?: string;
  date?: string;
  readTime?: string;
  imageUrl?: string;
}

export const BlogCard = React.memo(({
  id = 1,
  title = "New Trademark Registration Guidelines: What Business Owners Need to Know",
  excerpt = "The latest updates to trademark registration processes and how they affect your business operations and intellectual property protection strategies in 2025.",
  category = "Legal",
  date = "May 12, 2025",
  readTime = "5 min read",
  imageUrl = "https://i0.wp.com/www.managementnote.com/wp-content/uploads/2023/05/law.jpg?fit=1280%2C853&ssl=1"
}: BlogCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 will-change-transform pb-4">
      <div className="overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <img
            src={imageUrl}
            alt={title}
            width="400"
            height="225"
            loading="lazy"
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
            onError={(e) => {
              e.currentTarget.src = "/fallback.jpg"; // fallback image
            }}
          />
        </AspectRatio>
      </div>
      <CardContent className="pt-4">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">{category}</span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
          <Link to={`/blog/${id}`} className="hover:text-green-600">
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="pt-0 flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          className="text-green-600 border-green-600 hover:bg-green-50"
          asChild
        >
          <Link to={`/blog/${id}`}>
            <BookOpen className="mr-1 h-4 w-4" />
            Read More
          </Link>
        </Button>
        <div className="text-xs text-gray-500">{readTime}</div>
      </CardFooter>
    </Card>
  );
});
