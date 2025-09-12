export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
          <p className="text-gray-600">Welcome back, Student Name</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Quick Access Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Attendance Report</h3>
            <p className="text-3xl font-bold text-green-600">85%</p>
            <p className="text-sm text-gray-500">Present this semester</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Mark Report</h3>
            <p className="text-3xl font-bold text-blue-600">3.2</p>
            <p className="text-sm text-gray-500">Current GPA</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Room Booking</h3>
            <p className="text-sm text-gray-600">Book study rooms</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
              Book Now
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Wallet</h3>
            <p className="text-lg font-semibold text-gray-900">1,500,000 VND</p>
            <p className="text-sm text-gray-500">Available balance</p>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Today's Classes</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-medium text-gray-900">Professional Practice and Portfolio</h4>
                <p className="text-sm text-gray-600">Room A101 • 8:00 - 10:00 • Dr. Smith</p>
                <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Present</span>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-medium text-gray-900">Data Structures & Algorithms</h4>
                <p className="text-sm text-gray-600">Room B205 • 13:00 - 15:00 • Prof. Johnson</p>
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Not marked</span>
              </div>
            </div>
          </div>
        </div>

        {/* Your Tasks */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Your Tasks</h2>
            <p className="text-sm text-gray-600">3 tasks pending</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium text-gray-900">Dissertation Research</h4>
                <p className="text-sm text-gray-600 mt-1">Due: March 15, 2024</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">In Progress</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Check Moodle</a>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h4 className="font-medium text-gray-900">Weekly Paper Review</h4>
                <p className="text-sm text-gray-600 mt-1">Due: March 8, 2024</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">New</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Check Moodle</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}