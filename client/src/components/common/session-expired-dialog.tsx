import { signOut } from "@/services/auth";
import { useNavigate } from "@tanstack/react-router";

export function SessionExpiredDialog() {
  const navigate = useNavigate();

  return (
    <>
      <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30" />
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full mx-4 text-center space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Session Expired
          </h3>
          <p className="text-gray-500 text-sm">
            Your session has expired. Please sign in again to continue.
          </p>
          <button
            onClick={() => {
              signOut();
              navigate({ to: "/auth/sign-in" });
            }}
            className="w-full bg-primary text-white rounded-lg py-2 font-medium hover:opacity-90 transition"
          >
            Sign In Again
          </button>
        </div>
      </div>
    </>
  );
}
