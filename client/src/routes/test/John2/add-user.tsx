import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";
import axios from "axios";

export const Route = createFileRoute('/test/John2/add-user')({
  component: RouteComponent,
})

function RouteComponent() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
  });

  const [output, setOutput] = useState("");

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // 🔒 Email validation (as per your design note)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      setOutput("Invalid email format");
      return;
    }

        try {
      const res = await axios.post(
        "http://localhost:3000/auth/sign-up",
        user
      );
      setOutput(JSON.stringify(res.data));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setOutput(JSON.stringify(error.response?.data?.message));
      } else {
        setOutput("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      
      {/* Title */}
      <h1 className="text-xl font-bold mb-4">
        Add User
      </h1>

      <div className="flex gap-10">
        
        {/* Form Card */}
        <div className="w-full max-w-md border border-black p-6 bg-gray-300">
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* First Name */}
            <div className="flex items-center">
              <label className="w-28">First Name</label>
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                className="flex-1 border border-black px-2 py-1"
                required
              />
            </div>

            {/* Last Name */}
            <div className="flex items-center">
              <label className="w-28">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                className="flex-1 border border-black px-2 py-1"
                required
              />
            </div>

            {/* Email */}
            <div className="flex items-center">
              <label className="w-28">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="flex-1 border border-blue-900 px-2 py-1"
                required
              />
            </div>

            {/* Role Dropdown */}
            <div className="flex items-center">
              <label className="w-28">User Role</label>
              <select
                name="role"
                value={user.role}
                onChange={handleChange}
                className="flex-1 border border-black px-2 py-1"
                required
              >
                <option value="">Select Role</option>
                <option value="admin">Admin (SuperUser)</option>
                <option value="tutor">Tutor</option>
                <option value="student">Student</option>
              </select>
            </div>

            {/* Password */}
            <div className="flex items-center">
              <label className="w-28">Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="flex-1 border border-black px-2 py-1"
                required
              />
            </div>

            {/* Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-blue-700 px-6 py-2 rounded-lg border-2 border-black hover:bg-blue-800"
              >
                Add User
              </button>
            </div>
          </form>

          {/* Output */}
          {output && (
            <div className="mt-4 text-sm wrap-break-word">
              {output}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}