import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold hover:text-blue-100 transition"
        >
          📋 TaskFlow
        </Link>

        <div className="flex items-center gap-6">
          {token ? (
            <>
              <Link
                to="/dashboard"
                className="hover:text-blue-100 transition font-medium"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-medium transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex gap-4">
              <Link
                to="/login"
                className="hover:text-blue-100 font-medium transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-white text-blue-600 px-4 py-0.5 rounded-lg font-medium hover:bg-blue-50 transition duration-200"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
