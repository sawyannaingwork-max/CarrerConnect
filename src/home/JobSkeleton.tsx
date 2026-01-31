export default function JobSkeleton() {
  return (
    <div className="p-3 rounded-md shadow-md shadow-gray-400 animate-pulse">
      
      {/* Title + badge */}
      <div className="flex justify-between items-center">
        <div className="h-6 w-3/4 rounded bg-gray-300" />
        <div className="h-6 w-20 rounded bg-gray-300" />
      </div>

      {/* Employer */}
      <div className="mt-3 h-4 w-1/2 rounded bg-gray-300" />

      {/* Salary */}
      <div className="mt-2 h-4 w-2/3 rounded bg-gray-300" />

      {/* Publisher */}
      <div className="mt-2 h-4 w-1/3 rounded bg-gray-300" />

      {/* Posted date */}
      <div className="mt-2 h-4 w-1/4 rounded bg-gray-300" />

      {/* Button */}
      <div className="mt-4 h-8 w-24 rounded bg-gray-300" />
    </div>
  );
}
