
import { LucideIcon } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

export function ServiceCard({ icon: Icon, title, description, color = "text-blue-500" }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full bg-gray-50 border-none shadow-sm overflow-hidden">
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-6">
          <div className="flex justify-center">
            <img 
              src={`https://placehold.co/200x150/e0e0e0/white?text=${title.split(' ')[0]}`} 
              alt={title} 
              className="object-contain h-32 rounded" 
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className={`h-1 w-8 bg-orange-500 mb-3`}></div>
        <p className="text-gray-600 text-sm mb-4 flex-1">{description}</p>
        <Button
          variant="link" 
          className="text-gray-700 mt-auto p-0 justify-start hover:text-blue-600"
        >
          Click Here
        </Button>
      </div>
    </Card>
  );
}
