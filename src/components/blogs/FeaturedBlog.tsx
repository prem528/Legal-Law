
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

interface FeaturedBlogProps {
  id?: number;
  title?: string;
  excerpt?: string;
  date?: string;
  readTime?: string;
  imageUrl?: string;
}

export const FeaturedBlog = ({ 
  id = 1,
  title = "Complete Guide to Online Legal Services in 2025",
  excerpt = "As businesses increasingly operate in digital spaces, understanding the legal framework of online operations becomes critical. This comprehensive guide covers everything from digital compliance to online dispute resolution.",
  date = "May 18, 2025",
  readTime = "12 min read",
  imageUrl = "https://static.wixstatic.com/media/1cd646_ae7f0376474742e4ac9a0dee2f3f5a5d~mv2_d_2508_1672_s_2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1cd646_ae7f0376474742e4ac9a0dee2f3f5a5d~mv2_d_2508_1672_s_2.jpg"
}: FeaturedBlogProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-64 md:h-auto bg-gray-200 relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-sm font-medium bg-green-100 text-green-800 px-2 py-1 rounded">Featured</span>
              <span className="text-sm text-gray-500">{date}</span>
            </div>
            <h2 className="text-2xl font-bold mb-3">
              <Link to={`/blog/${id}`} className="hover:text-green-600">
                {title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">
              {excerpt}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <Button className="bg-green-500 hover:bg-green-600" asChild>
              <Link to={`/blog/${id}`}>
                <BookOpen className="mr-2 h-4 w-4" />
                Read Full Article
              </Link>
            </Button>
            <div className="text-sm text-gray-500">{readTime}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};
