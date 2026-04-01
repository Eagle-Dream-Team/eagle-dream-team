import { useNavigate } from "@tanstack/react-router";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
      <h1 className="text-6xl font-bold text-gray-200">404</h1>
      <h2 className="text-xl font-semibold text-gray-800">Page Not Found</h2>
      <p className="text-gray-500 text-sm max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate({ to: "/" })}
        className="bg-primary text-white rounded-lg px-6 py-2 font-medium hover:opacity-90 transition"
      >
        Go Home
      </button>
    </div>
  );
}
