export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">University of Greenwich's Library</h1>
          
          {/* Search Bar */}
          <div className="mt-4 max-w-md">
            <input
              type="text"
              placeholder="Search books, authors, topics..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Category Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Academic Book
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300">
            Self-Study
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300">
            Leisure Reading
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300">
            Personal Development
          </button>
        </div>

        {/* Book Sections */}
        <div className="space-y-8">
          {/* New Updates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">New Updates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((book) => (
                <div key={book} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-t-lg"></div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      Book Title {book}
                    </h3>
                    <p className="text-xs text-gray-500 truncate">Author Name</p>
                    <span className="inline-block mt-1 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Available
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Most Borrowed */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Most Borrowed</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((book) => (
                <div key={book} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-t-lg"></div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      Popular Book {book}
                    </h3>
                    <p className="text-xs text-gray-500 truncate">Famous Author</p>
                    <span className="inline-block mt-1 px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                      Borrowed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Highly Rated */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Highly Rated</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((book) => (
                <div key={book} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-t-lg"></div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      Top Rated {book}
                    </h3>
                    <p className="text-xs text-gray-500 truncate">Expert Author</p>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-400 text-xs">★★★★★</span>
                      <span className="ml-1 text-xs text-gray-500">4.8</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recommended by Faculty */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended by Faculty</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((book) => (
                <div key={book} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-t-lg"></div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      Faculty Pick {book}
                    </h3>
                    <p className="text-xs text-gray-500 truncate">Academic Author</p>
                    <span className="inline-block mt-1 px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                      Recommended
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}