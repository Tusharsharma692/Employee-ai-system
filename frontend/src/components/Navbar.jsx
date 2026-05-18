import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  FaRobot
} from "react-icons/fa";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");
  };

  return (

    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">

      <div className="container mx-auto flex justify-between items-center px-8 py-4">

        <div className="flex items-center gap-3">

          <FaRobot className="text-white text-3xl" />

          <h1 className="text-2xl font-bold text-white">

            Employee AI System

          </h1>

        </div>

        <div className="flex items-center gap-6 text-white font-medium">

          <Link
            to="/"
            className="hover:text-yellow-300 transition"
          >
            Home
          </Link>

          {
            token && (
              <>
                <Link
                  to="/add"
                  className="hover:text-yellow-300 transition"
                >
                  Add Employee
                </Link>

                <Link
                  to="/employees"
                  className="hover:text-yellow-300 transition"
                >
                  Employees
                </Link>

                <Link
                  to="/recommendation"
                  className="hover:text-yellow-300 transition"
                >
                  AI Recommendation
                </Link>
              </>
            )
          }

          {
            !token ? (
              <>
                <Link
                  to="/login"
                  className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
                >
                  Signup
                </Link>
              </>
            ) : (
              <button
                onClick={logout}
                className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            )
          }

        </div>

      </div>

    </nav>
  );
}

export default Navbar;