export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to FGW Portal
          </h2>
        </div>
        
        {/* Login Options */}
        <div className="space-y-4">
          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Staff & Students Login
          </button>
          <button className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors">
            Parents Login
          </button>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Sign in
          </button>
        </form>

        {/* Mobile App Links */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-600">Download Mobile App</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-500">iOS App Store</a>
            <a href="#" className="text-blue-600 hover:text-blue-500">Google Play</a>
          </div>
        </div>
      </div>
    </div>
  )
}