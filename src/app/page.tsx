export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">FGW Portal</h1>
            </div>
            <nav className="flex space-x-8">
              <a href="/" className="text-gray-900 hover:text-blue-600">Home</a>
              <a href="/student" className="text-gray-600 hover:text-blue-600">Student</a>
              <a href="/library" className="text-gray-600 hover:text-blue-600">Library</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">FPT Greenwich Academic Portal</h1>
          <p className="text-xl text-gray-600 mb-8">Enhanced User Experience for Students, Teachers, and Staff</p>
          
          {/* Quick Access Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <a href="/auth" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Login</h3>
              <p className="text-gray-600">Student & Staff Login</p>
            </a>
            <a href="/student" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Portal</h3>
              <p className="text-gray-600">Dashboard, Grades, Schedule</p>
            </a>
            <a href="/library" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Library</h3>
              <p className="text-gray-600">Books, Resources</p>
            </a>
            <a href="/teacher" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Teacher Portal</h3>
              <p className="text-gray-600">Classes, Attendance</p>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}