import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/test/John2/dashboard/")({
  component: DashboardPage,
});

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* SIDEBAR */}
      <div className="w-64 bg-blue-900 text-white p-4 space-y-4">
        <h2 className="text-lg font-bold mb-6">Tutor Dashboard</h2>

        <button className="block w-full text-left bg-blue-700 px-3 py-2 rounded">
          Dashboard
        </button>

        <button
          onClick={() => navigate({ to: "/test/messages/" })}
          className="block w-full text-left px-3 py-2 hover:bg-blue-700 rounded"
        >
          Messages
        </button>

        <button className="block w-full text-left px-3 py-2 hover:bg-blue-700 rounded">
          Meetings
        </button>

        <button className="block w-full text-left px-3 py-2 hover:bg-blue-700 rounded">
          Documents
        </button>

        <button className="block w-full text-left px-3 py-2 hover:bg-blue-700 rounded">
          Blog
        </button>

        <button className="block w-full text-left px-3 py-2 hover:bg-blue-700 rounded">
          Students
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6">
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Welcome 👋</h1>

          <div className="flex items-center gap-4">
            <span className="text-sm">🔔</span>
            <div className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer" />
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 shadow rounded">
            <p className="text-sm text-gray-500">Total Students</p>
            <p className="text-lg font-bold">24</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <p className="text-sm text-gray-500">Upcoming Meetings</p>
            <p className="text-lg font-bold">5</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <p className="text-sm text-gray-500">Total Messages</p>
            <p className="text-lg font-bold">120</p>
          </div>
        </div>

        {/* ACTION + ACTIVITY */}
        <div className="grid grid-cols-2 gap-6">
          
          {/* ACTION BUTTONS */}
          <div className="bg-white p-4 shadow rounded space-y-3">
            
            <button
              onClick={() => navigate({ to: "/test/John2/messages/" })}
              className="w-full bg-blue-800 text-white py-2 rounded"
            >
              Schedule Meeting
            </button>

            <button
              onClick={() => navigate({ to: "/test/John2/messages/" })}
              className="w-full bg-blue-800 text-white py-2 rounded"
            >
              Send Message
            </button>

            <button
              onClick={() => navigate({ to: "/test/John2/messages/" })}
              className="w-full bg-blue-800 text-white py-2 rounded"
            >
              Upload Document
            </button>
          </div>

          {/* RECENT ACTIVITY */}
          <div className="bg-white p-4 shadow rounded">
            <h2 className="font-semibold mb-2">Recent Activities</h2>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>✔ Message sent to Chanda</li>
              <li>✔ Meeting scheduled</li>
              <li>✔ Document uploaded</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}