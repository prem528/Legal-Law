import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link, } from "react-router-dom";
import { Button } from "../ui/button";
import { BlogCategories } from "./BlogCategories";

const BlogPost = () => {
    //   const { id } = useParams();

    const blogData = {
        title: "New Trademark Registration Guidelines: What Business Owners Need to Know",
        category: "Trademark",
        date: "May 12, 2025",
        author: "Legal Expert",
        readTime: "5 min read",
        featuredImage: "https://i0.wp.com/www.managementnote.com/wp-content/uploads/2023/05/law.jpg?fit=1280%2C853&ssl=1",
        content: [
            "The latest updates to trademark registration processes bring significant changes that all business owners should be aware of. These new guidelines, effective from January 2025, streamline several aspects of the registration process while introducing additional requirements for certain industries.",
            "First and foremost, the digital application process has been completely overhauled. Applicants can now expect a more intuitive interface with real-time validation of submission requirements. This means fewer applications will be returned due to technical errors or incomplete information.",
            "Additionally, the review timeline has been shortened from an average of 18 months to approximately 12 months for standard applications. This improvement comes as a result of increased staffing and better internal processing systems within the trademark office.",
            "However, businesses in technology, pharmaceuticals, and food industries face new requirements. These industries will now need to provide more comprehensive documentation regarding their product origins, manufacturing processes, and market differentiation strategies. This additional scrutiny aims to reduce the number of overly broad or potentially conflicting trademark registrations in these competitive sectors.",
            "Another significant change affects international businesses. Companies seeking trademark protection across multiple jurisdictions will benefit from a new harmonized application process that aligns more closely with international standards. This reduces the need for completely separate applications in each target country, though local legal representation is still advised.",
            "Small businesses may find relief in the new fee structure, which introduces tiered pricing based on company size and revenue. Startups and small enterprises with annual revenues below $1 million may qualify for reduced application fees, making trademark protection more accessible for emerging businesses.",
            "The updated opposition process now includes a mandatory mediation phase before formal proceedings begin. This gives parties an opportunity to resolve potential conflicts without extensive legal proceedings, potentially saving significant time and money for all involved.",
            "Perhaps most notably, the new guidelines place greater emphasis on use evidence. Applicants must now provide more substantial proof of commercial use or genuine intent to use the trademark in commerce. This change aims to reduce the number of defensive or speculative registrations that can clog the system and create barriers for businesses actively using their marks in the marketplace.",
            "Legal experts recommend that businesses review their trademark portfolios in light of these changes. Existing registrations may need supplementary filings to remain fully protected under the new framework, particularly if they fall into the newly designated 'high-scrutiny' categories.",
            "These changes represent the most significant overhaul to trademark registration processes in over a decade. While the adjustments may require additional effort during the application phase, the long-term benefits of a more efficient, accessible, and reliable trademark system should benefit the business community as a whole."
        ],
        tags: ["Trademark", "Legal Updates", "Business Law", "Intellectual Property"]
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-50 to-indigo-50 py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <Button variant="outline" size="sm" asChild className="mb-6">
                        <Link to="/blogs">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Blogs
                        </Link>
                    </Button>
                    <div>
                        <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {blogData.category}
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-4">{blogData.title}</h1>
                        <div className="flex flex-wrap items-center text-gray-600 gap-4">
                            <div className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                <span className="text-sm">{blogData.author}</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span className="text-sm">{blogData.date}</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                <span className="text-sm">{blogData.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <article className="lg:col-span-2 prose prose-lg max-w-none">
                        {/* Featured Image */}
                        <div className="w-full h-80 bg-gray-200 rounded-lg mb-8 overflow-hidden">
                            <img
                                src={blogData.featuredImage}
                                alt={blogData.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        {blogData.content.map((paragraph, index) => (
                            <p key={index} className="mb-6 text-gray-700">{paragraph}</p>
                        ))}

                        {/* Tags */}
                        <div className="mt-10">
                            <h4 className="text-lg font-semibold mb-3">Tags</h4>
                            <div className="flex flex-wrap gap-2">
                                {blogData.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Share */}
                        <div className="mt-10 pt-6 border-t">
                            <h4 className="text-lg font-semibold mb-3">Share this article</h4>
                            <div className="flex gap-3">
                                <Button variant="outline" size="sm">Twitter</Button>
                                <Button variant="outline" size="sm">LinkedIn</Button>
                                <Button variant="outline" size="sm">Facebook</Button>
                                <Button variant="outline" size="sm">Email</Button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        <BlogCategories />

                        {/* Related Posts */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                            <div className="space-y-4">
                                {[
                                    { id: 1, title: "Intellectual Property Protection Tips", date: "May 15, 2025", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
                                    { id: 2, title: "Copyright vs. Trademark: What's the Difference?", date: "May 12, 2025", image: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
                                    { id: 3, title: "Patent Filing Essentials for Startups", date: "May 10, 2025", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6" }
                                ].map((post) => (
                                    <div key={post.id} className="flex space-x-3">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-medium hover:text-green-600 cursor-pointer">
                                                <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                            </h4>
                                            <p className="text-sm text-gray-500">{post.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Subscribe to Newsletter</h3>
                            <p className="text-gray-600 text-sm mb-4">Get the latest legal updates delivered to your inbox.</p>
                            <div className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                                />
                                <Button className="w-full bg-green-500 hover:bg-green-600">Subscribe</Button>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default BlogPost;
