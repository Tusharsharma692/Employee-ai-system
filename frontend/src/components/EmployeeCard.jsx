function EmployeeCard({ employee }) {

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300">

      <h2 className="text-2xl font-bold text-indigo-600 mb-3">
        {employee.name}
      </h2>

      <div className="space-y-2 text-gray-700">

        <p>
          <span className="font-semibold">
            Email:
          </span>
          {" "}
          {employee.email}
        </p>

        <p>
          <span className="font-semibold">
            Department:
          </span>
          {" "}
          {employee.department}
        </p>

        <p>
          <span className="font-semibold">
            Skills:
          </span>
          {" "}
          {employee.skills.join(", ")}
        </p>

        <p>
          <span className="font-semibold">
            Performance:
          </span>
          {" "}
          {employee.performanceScore}
        </p>

        <p>
          <span className="font-semibold">
            Experience:
          </span>
          {" "}
          {employee.experience} years
        </p>

      </div>

    </div>
  );
}

export default EmployeeCard;