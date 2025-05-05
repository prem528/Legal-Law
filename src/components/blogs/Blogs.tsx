import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { BlogCard } from "./BlogCard";
import { BlogCategories } from "./BlogCategories";
import { FeaturedBlog } from "./FeaturedBlog";
import React from "react";

const blogPosts = [
    {
        id: 1,
        title: "New Trademark Registration Guidelines: What Business Owners Need to Know",
        excerpt: "The latest updates to trademark registration processes and how they affect your business operations and intellectual property protection strategies in 2025.",
        category: "Trademark",
        date: "May 12, 2025",
        readTime: "5 min read",
        imageUrl: "https://static.wixstatic.com/media/1cd646_ae7f0376474742e4ac9a0dee2f3f5a5d~mv2_d_2508_1672_s_2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1cd646_ae7f0376474742e4ac9a0dee2f3f5a5d~mv2_d_2508_1672_s_2.jpg"
    },
    {
        id: 2,
        title: "Setting Up Your LLC: A Step-by-Step Guide for Entrepreneurs",
        excerpt: "Everything you need to know about forming an LLC, from choosing a name to filing the necessary paperwork with state authorities.",
        category: "Company Registration",
        date: "May 10, 2025",
        readTime: "7 min read",
        imageUrl: "https://static.wixstatic.com/media/1cd646_ae7f0376474742e4ac9a0dee2f3f5a5d~mv2_d_2508_1672_s_2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1cd646_ae7f0376474742e4ac9a0dee2f3f5a5d~mv2_d_2508_1672_s_2.jpg"
    },
    {
        id: 3,
        title: "GST Compliance: Latest Changes and What They Mean for SMEs",
        excerpt: "Learn about the recent GST regulatory updates and how they impact small and medium enterprises across different sectors.",
        category: "GST",
        date: "May 8, 2025",
        readTime: "4 min read",
        imageUrl: "https://static.wixstatic.com/media/1cd646_ae7f0376474742e4ac9a0dee2f3f5a5d~mv2_d_2508_1672_s_2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1cd646_ae7f0376474742e4ac9a0dee2f3f5a5d~mv2_d_2508_1672_s_2.jpg"
    },
    {
        id: 4,
        title: "Import/Export Documentation: Streamlining Your Cross-Border Business",
        excerpt: "Practical guidance on managing import/export documentation efficiently to avoid delays and legal complications in international trade.",
        category: "Import/Export",
        date: "May 6, 2025",
        readTime: "6 min read",
        imageUrl: "https://static.wixstatic.com/media/1cd646_ae7f0376474742e4ac9a0dee2f3f5a5d~mv2_d_2508_1672_s_2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1cd646_ae7f0376474742e4ac9a0dee2f3f5a5d~mv2_d_2508_1672_s_2.jpg"
    },
    {
        id: 5,
        title: "FSSAI Licensing: Requirements and Application Process Explained",
        excerpt: "A comprehensive overview of the FSSAI licensing requirements for food businesses and a simplified guide to the application process.",
        category: "FSSAI",
        date: "May 4, 2025",
        readTime: "8 min read",
        imageUrl: "https://static.wixstatic.com/media/1cd646_ae7f0376474742e4ac9a0dee2f3f5a5d~mv2_d_2508_1672_s_2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1cd646_ae7f0376474742e4ac9a0dee2f3f5a5d~mv2_d_2508_1672_s_2.jpg"
    },
    {
        id: 6,
        title: "Digital Compliance for E-commerce Businesses",
        excerpt: "Essential compliance requirements for online businesses operating in today's increasingly regulated digital marketplace.",
        category: "Company Registration",
        date: "May 2, 2025",
        readTime: "6 min read",
        imageUrl: "https://static.wixstatic.com/media/1cd646_ae7f0376474742e4ac9a0dee2f3f5a5d~mv2_d_2508_1672_s_2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1cd646_ae7f0376474742e4ac9a0dee2f3f5a5d~mv2_d_2508_1672_s_2.jpg"
    }
];

const Blogs = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-24 will-change-transform">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                            Legal Insights & Updates
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-">
                            Stay informed with the latest legal news, insights, and expert advice
                            on business law, compliance, and regulatory updates.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Article */}
            <section className="py-12 px-4 max-w-7xl mx-auto">
                <div className="mb-8">
                    <div className="flex items-center mb-1">
                        <BookOpen className="h-5 w-5 text-green-500 mr-2" />
                        <h2 className="text-xl font-semibold">Featured Article</h2>
                    </div>
                </div>
                <FeaturedBlog
                    id={10}
                    title="Complete Guide to Online Legal Services in 2025"
                    excerpt="As businesses increasingly operate in digital spaces, understanding the legal framework of online operations becomes critical."
                    date="May 18, 2025"
                    readTime="12 min read"
                    imageUrl="https://www.upgrad.com/_ww3-next/image/?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FLaw-6c37cecac4134fa0a8b6775521d0c620.webp&w=3840&q=75"
                />
            </section>

            {/* Main Content */}
            <section className="py-12 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Blog Posts */}
                    <div className="lg:col-span-2">
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center">
                                    <BookOpen className="h-5 w-5 text-green-500 mr-2" />
                                    <h2 className="text-xl font-semibold">Recent Articles</h2>
                                </div>
                                <Button variant="outline" className="text-sm">View All</Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {blogPosts.map((blog) => (
                                <React.Fragment key={blog.id}>
                                    <BlogCard
                                        id={blog.id}
                                        title={blog.title}
                                        excerpt={blog.excerpt}
                                        category={blog.category}
                                        date={blog.date}
                                        readTime={blog.readTime}
                                        imageUrl={blog.imageUrl}
                                    />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <BlogCategories />

                        {/* Popular Posts */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Popular Posts</h3>
                            <div className="space-y-4">
                                {[
                                    { id: 7, title: "GST Filing Deadline Extended", date: "May 15, 2025", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625" },
                                    { id: 8, title: "New Import Policies for 2025", date: "May 13, 2025", image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b" },
                                    { id: 9, title: "LLC vs. Corporation: Making the Right Choice", date: "May 11, 2025", image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334" }
                                ].map((post) => (
                                    <div key={post.id} className="flex space-x-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-medium hover:text-green-600 transition">
                                                <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                            </h4>
                                            <p className="text-sm text-gray-500">{post.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold mb-2">Subscribe to Newsletter</h3>
                            <p className="text-gray-600 text-sm mb-4">Get the latest legal updates delivered to your inbox.</p>
                            <Input placeholder="Your email" className="mb-3" />
                            <Button className="w-full bg-green-500 hover:bg-green-600">Subscribe</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
