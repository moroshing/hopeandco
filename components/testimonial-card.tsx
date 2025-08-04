import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils"; // Import cn utility for conditional class names

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatarUrl?: string;
  bgColor?: string; // New prop for background color
}

export function TestimonialCard({
  quote,
  name,
  title,
  avatarUrl,
  bgColor,
}: TestimonialCardProps) {
  return (
    <Card className="flex-shrink-0 w-[300px] p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <CardContent className="p-0">
        <Quote className="h-6 w-6 text-gray-400 mb-3" />
        <p className="text-base text-gray-700 italic mb-4">"{quote}"</p>
        <div className="flex items-center">
          {avatarUrl ? (
            <img
              src={avatarUrl || "/placeholder.svg"}
              alt={name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
          ) : (
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3",
                bgColor || "bg-gray-500" // Use bgColor if provided, otherwise fallback to a default gray
              )}
            >
              {name.charAt(0)}
            </div>
          )}
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
