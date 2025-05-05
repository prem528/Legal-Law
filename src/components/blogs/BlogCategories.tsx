import { Button } from "../ui/button";

 

const categories = [
  { name: "All", count: 42 },
  { name: "Trademark", count: 12 },
  { name: "Company Registration", count: 8 },
  { name: "GST", count: 11 },
  { name: "Import/Export", count: 5 },
  { name: "FSSAI", count: 6 },
];

export const BlogCategories = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <Button 
            key={category.name}
            variant={category.name === "All" ? "default" : "outline"} 
            className={category.name === "All" 
              ? "w-full justify-between bg-green-500 hover:bg-green-600" 
              : "w-full justify-between"
            }
          >
            {category.name}
            <span className={
              category.name === "All"
                ? "bg-green-400 text-white text-xs px-2 py-1 rounded-full"
                : "bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
            }>
              {category.count}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};
