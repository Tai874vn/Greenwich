export default function StaffDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Staff Dashboard</h1>
          <p className="text-gray-600">Academic & Administrative Staff Portal</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Quick Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-yellow-800">Pending Requests</h3>
            <p className="text-2xl font-bold text-yellow-900">5</p>
            <p className="text-sm text-yellow-700">Schedule changes awaiting approval</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-blue-800">Upcoming Exams</h3>
            <p className="text-2xl font-bold text-blue-900">12</p>
            <p className="text-sm text-blue-700">Exams scheduled this week</p>
          </div>
          
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-green-800">Room Availability</h3>
            <p className="text-2xl font-bold text-green-900">85%</p>
            <p className="text-sm text-green-700">Rooms available today</p>
          </div>
        </div>

        {/* Management Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Student Management */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Student Management</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <button className="w-full text-left p-3 border rounded-lg hover:bg-gray-50">
                  <h4 className="font-medium text-gray-900">Student Directory</h4>
                  <p className="text-sm text-gray-600">View and manage student profiles</p>
                </button>
                <button className="w-full text-left p-3 border rounded-lg hover:bg-gray-50">
                  <h4 className="font-medium text-gray-900">Enrollment Management</h4>
                  <p className="text-sm text-gray-600">Handle student enrollments</p>
                </button>
                <button className="w-full text-left p-3 border rounded-lg hover:bg-gray-50">
                  <h4 className="font-medium text-gray-900">Attendance Reports</h4>
                  <p className="text-sm text-gray-600">Generate attendance summaries</p>
                </button>
              </div>
            </div>
          </div>

          {/* Schedule Management */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Schedule Management</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <button className="w-full text-left p-3 border rounded-lg hover:bg-gray-50">
                  <h4 className="font-medium text-gray-900">Timetable Management</h4>
                  <p className="text-sm text-gray-600">Create and modify schedules</p>
                </button>
                <button className="w-full text-left p-3 border rounded-lg hover:bg-gray-50">
                  <h4 className="font-medium text-gray-900">Room Booking</h4>
                  <p className="text-sm text-gray-600">Manage room reservations</p>
                </button>
                <button className="w-full text-left p-3 border rounded-lg hover:bg-gray-50">
                  <h4 className="font-medium text-gray-900">Exam Scheduling</h4>
                  <p className="text-sm text-gray-600">Schedule examinations</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}