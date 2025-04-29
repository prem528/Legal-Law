import { Card } from "../ui/card";

export function TestimonialCard() {
  return (
    <Card className="bg-white border shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
         
        <div className="flex items-center">
          <span className="text-sm font-medium mr-2">Trustpilot</span>
          <div className="flex items-center">
            <span className="text-green-500 text-xs">★★★★★</span>
          </div>
        </div>
      </div>
      
      <p className="text-sm mb-3">
        Hi, am really happy with the sincerity and dedication of Sarathi Bhattacharya with my central food license documents and uploading process.
      </p>
      
      <div className="mt-4">
        <p className="font-semibold text-sm">Lavanya Sureendran</p>
        <div className="flex text-yellow-400 mt-1">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>
    </Card>
  );
}
