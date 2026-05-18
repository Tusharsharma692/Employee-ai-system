import {
  Link
} from "react-router-dom";

function Home() {

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">

      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-2xl">

        <h1 className="text-5xl font-bold text-gray-800 mb-5">

          AI Employee Analytics System

        </h1>

        <p className="text-gray-600 text-lg mb-8">

          Smart employee performance analysis,
          AI recommendations,
          promotion insights,
          and training suggestions.

        </p>

        <div className="flex justify-center gap-5">

          <Link
            to="/signup"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-black transition"
          >
            Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Home;