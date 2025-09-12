export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
          <p className="text-gray-600">Welcome back, Dr. Smith</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Attendance</h3>
            <p className="text-sm text-gray-600">Mark today's attendance</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
              Take Attendance
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Communication</h3>
            <p className="text-sm text-gray-600">Message students</p>
            <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
              Send Message
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Feedback</h3>
            <p className="text-sm text-gray-600">Student feedback</p>
            <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700">
              View Feedback
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Schedule</h3>
            <p className="text-sm text-gray-600">Request changes</p>
            <button className="mt-2 bg-orange-600 text-white px-4 py-2 rounded text-sm hover:bg-orange-700">
              Schedule Change
            </button>
          </div>
        </div>

        {/* Today's Classes */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Today's Classes</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">Professional Practice and Portfolio</h4>
                    <p className="text-sm text-gray-600">Room A101 • Slot 1 (8:00 - 10:00)</p>
                    <p className="text-sm text-gray-500">25 students enrolled</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                      Take Attendance
                    </button>
                    <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700">
                      View Roster
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">Data Structures & Algorithms</h4>
                    <p className="text-sm text-gray-600">Room B205 • Slot 5 (13:00 - 15:00)</p>
                    <p className="text-sm text-gray-500">32 students enrolled</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                      Take Attendance
                    </button>
                    <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700">
                      View Roster
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pending Requests */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Pending Approvals</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <h4 className="font-medium text-gray-900">Schedule Change Request</h4>
                <p className="text-sm text-gray-600">Move Wednesday class to Friday - Requested by Academic Staff</p>
                <div className="mt-2 space-x-2">
                  <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                    Approve
                  </button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                    Deny
                  </button>
                </div>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-medium text-gray-900">Substitute Teacher Request</h4>
                <p className="text-sm text-gray-600">Need substitute for March 15 class - Medical appointment</p>
                <div className="mt-2 space-x-2">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                    Request Substitute
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Progress */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Student Progress Tracking</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Project Milestone 1</h4>
                  <p className="text-sm text-gray-600">Research & Analysis Phase</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-green-600">23/25</p>
                  <p className="text-sm text-gray-500">Completed</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Project Milestone 2</h4>
                  <p className="text-sm text-gray-600">Design & Development Phase</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-yellow-600">15/25</p>
                  <p className="text-sm text-gray-500">In Progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}