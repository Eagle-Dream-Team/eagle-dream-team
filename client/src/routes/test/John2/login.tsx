import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from "react";
import axios from "axios";
import eagleLogo from "@/assets/eagle.svg";

export const Route = createFileRoute('/test/John2/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setOutput("");

    try {
      const res = await axios.post(
        "http://localhost:3000/auth/sign-in",
        login
      );

      // ✅ SAVE TOKEN
      const token = res.data.access_token;
      localStorage.setItem("access_token", token);

      setOutput("Login successful ✅");

      // ✅ REDIRECT
      setTimeout(() => {
        navigate({ to: "/test/John2/messages/" });
      }, 800);

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setOutput(error.response?.data?.message || "Login failed");
      } else {
        setOutput("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-md border border-black p-6 bg-gray-300">
        
        {/* Logo */}
        <div className="mb-6 flex flex-col items-center">
  <img
    src={eagleLogo}
    alt="Eagle Logo"
    className="w-20 h-20 object-contain mb-2"
  />
  <h2 className="text-lg font-semibold">Login</h2>
</div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email */}
          <div className="flex items-center">
            <label className="w-24 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={login.email}
              onChange={handleChange}
              className="flex-1 border border-blue-900 px-2 py-1 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center">
            <label className="w-24 text-sm">Password</label>
            <input
              type="password"
              name="password"
              value={login.password}
              onChange={handleChange}
              className="flex-1 border border-blue-900 px-2 py-1 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 rounded-lg border-2 border-black transition ${
                loading
                  ? "bg-gray-400"
                  : "bg-blue-700 hover:bg-blue-800"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        {/* Output */}
        {output && (
          <div className="mt-4 text-sm text-center text-black">
            {output}
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 text-sm font-semibold text-center">
          Don’t have acct? Contact system admin
        </div>
      </div>
    </div>
  );
}