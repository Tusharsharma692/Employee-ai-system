import { useEffect, useState } from "react";

import API from "../services/api";

import EmployeeCard from "../components/EmployeeCard";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);

  const [department, setDepartment] = useState("");

  useEffect(() => {

    fetchEmployees();

  }, []);

  const fetchEmployees = async () => {

    const res = await API.get("/employees");

    setEmployees(res.data);
  };

  const searchDepartment = async () => {

    const res = await API.get(
      `/employees/search?department=${department}`
    );

    setEmployees(res.data);
  };

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-center text-indigo-700 mb-10">

        Employee Dashboard

      </h1>

      <div className="flex justify-center gap-4 mb-10">

        <input
          type="text"
          placeholder="Search Department"
          className="border p-4 rounded-lg w-80"
          onChange={(e) =>
            setDepartment(e.target.value)
          }
        />

        <button
          onClick={searchDepartment}
          className="bg-indigo-600 text-white px-6 rounded-lg hover:bg-indigo-700"
        >
          Search
        </button>

        <button
          onClick={fetchEmployees}
          className="bg-green-600 text-white px-6 rounded-lg hover:bg-green-700"
        >
          Refresh
        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {
          employees.map((employee) => (

            <EmployeeCard
              key={employee._id}
              employee={employee}
            />
          ))
        }

      </div>

    </div>
  );
}

export default EmployeeList;