import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-lg text-blue-100 max-w-2xl">{description}</p>
        )}
      </div>
    </div>
  );
}
