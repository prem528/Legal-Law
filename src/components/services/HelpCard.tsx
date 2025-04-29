import { Button } from "../ui/button";
import { Card } from "../ui/card";

 

export function HelpCard() {
  return (
    <Card className="flex flex-col h-full bg-sky-300 border-none shadow-sm overflow-hidden">
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-4">How We Can Help You?</h3>
        <p className="text-gray-700 text-sm mb-6">
          Connect with our experts to get more details about your selected service.
        </p>
        <Button 
          variant="default" 
          className="bg-white text-gray-800 hover:bg-gray-100 mt-auto w-full"
        >
          📞 Contact Now
        </Button>
      </div>
    </Card>
  );
}