import { cn } from "../../lib/utils";
import { Card } from "../ui/card";

 

interface StatsCardProps {
  value: string;
  description: string;
  className?: string;
}

export function StatsCard({ value, description, className }: StatsCardProps) {
  return (
    <Card className={cn(
      "flex flex-col items-center justify-center p-4 text-center", 
      className
    )}>
      <p className="text-xl font-bold">{value}</p>
      <p className="text-sm">{description}</p>
    </Card>
  );
}
