import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";
import axios from "axios";

export const Route = createFileRoute('/test/John2/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [output, setOutput] = useState("");

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // ✅ YOUR API CODE (UNCHANGED)
    try {
      const res = await axios.post(
        "http://localhost:3000/auth/sign-in",
        login
      );
      setOutput(JSON.stringify(res.data));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setOutput(JSON.stringify(error.response?.data.message));
      } else {
        setOutput(JSON.stringify("An unexpected error occurred"));
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-md border border-black p-6 bg-gray-300">
        
        {/* Logo / Title */}
        <div className="mb-6 text-lg font-semibold">
          Logo/Tile
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
              className="bg-blue-700 text-black px-6 py-2 rounded-lg border-2 border-black hover:bg-blue-800 transition"
            >
              Login
            </button>
          </div>
        </form>

        {/* Output */}
        {output && (
          <div className="mt-4 text-sm wrap-break-word">
            {output}
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 text-sm font-semibold">
          Don’t have acct, contact system admin
        </div>
      </div>
    </div>
  );
}