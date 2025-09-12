export default function ParentDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Parent Dashboard</h1>
          <p className="text-gray-600">Monitor your child's academic progress</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Student Overview */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Student Information</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Student Name</h3>
                <p className="text-gray-600">Student ID: GW12345</p>
                <p className="text-gray-600">Year 2, Computer Science</p>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Performance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Attendance Overview</h3>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-32 h-32">
                  <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">85%</div>
                      <div className="text-sm text-gray-500">Present</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Classes:</span>
                  <span className="font-medium">120</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Attended:</span>
                  <span className="font-medium text-green-600">102</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Absent:</span>
                  <span className="font-medium text-red-600">18</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Academic Performance</h3>
            </div>
            <div className="p-6">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-blue-600">3.2</div>
                <div className="text-sm text-gray-500">Current GPA</div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Data Structures</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded">A</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Web Development</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">B+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Database Systems</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded">A-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Mathematics</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-sm rounded">B</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">School Contacts</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Academic Advisor</h4>
                <p className="text-sm text-gray-600">Dr. Sarah Johnson</p>
                <p className="text-sm text-gray-600">sarah.johnson@greenwich.edu.vn</p>
                <p className="text-sm text-gray-600">+84 123 456 789</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Student Services</h4>
                <p className="text-sm text-gray-600">Student Front Office</p>
                <p className="text-sm text-gray-600">student.services@greenwich.edu.vn</p>
                <p className="text-sm text-gray-600">+84 987 654 321</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Finance Office</h4>
                <p className="text-sm text-gray-600">Fee inquiries & payments</p>
                <p className="text-sm text-gray-600">finance@greenwich.edu.vn</p>
                <p className="text-sm text-gray-600">+84 456 789 123</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Contact Administration
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}