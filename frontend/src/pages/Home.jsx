import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="max-w-8xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Organize Your Tasks,
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Master Your Goals
            </span>
          </h1>
          <p className=" flex justify-center text-xl md:text-2xl text-gray-600 mb-8  max-w-2xl mx-auto ">
            A simple yet powerful task manager that helps you stay productive
            and achieve your goals with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-200 shadow-lg"
            >
              Get Started Free →
            </Link>
            <Link
              to="/login"
              className="inline-block bg-white text-blue-600 border-2 border-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="text-5xl mb-4">✓</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Easy to Use
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Create and manage tasks in seconds. Simple, intuitive interface
              designed for everyone.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Secure & Private
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your data is encrypted and secure. Only you can access your
              personal task list.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Lightning Fast
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Instant performance on all devices. Manage tasks anywhere, anytime
              with our responsive design.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-2xl p-12 shadow-lg mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="text-3xl">📝</div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Create & Organize
                </h4>
                <p className="text-gray-600">
                  Add tasks with a single click and organize them however you
                  like.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="text-3xl">🔍</div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Search & Filter
                </h4>
                <p className="text-gray-600">
                  Quickly find tasks and filter by status with powerful search.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="text-3xl">✅</div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Track Progress
                </h4>
                <p className="text-gray-600">
                  Mark tasks complete and see your productivity statistics in
                  real-time.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="text-3xl">🎯</div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Stay Focused
                </h4>
                <p className="text-gray-600">
                  Simple interface helps you stay focused on what matters most.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 md:p-16 text-white text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Organized?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start managing your tasks today with TaskFlow
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition duration-200"
          >
            Create Your Account Now
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white text-center py-8 mt-16">
        <p className="opacity-75">
          © 2026 TaskFlow. Organize your tasks, master your goals.
        </p>
      </div>
    </div>
  );
}
