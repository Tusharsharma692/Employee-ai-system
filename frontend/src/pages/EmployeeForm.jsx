import { useState } from "react";

import API from "../services/api";

function EmployeeForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    skills: "",
    performanceScore: "",
    experience: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const employeeData = {
        ...formData,
        skills: formData.skills.split(",")
      };

      await API.post(
        "/employees",
        employeeData
      );

      alert("Employee Added Successfully");

      setFormData({
        name: "",
        email: "",
        department: "",
        skills: "",
        performanceScore: "",
        experience: ""
      });

    } catch (error) {

      alert("Error Adding Employee");
    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center p-10">

      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">

          Add Employee

        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Employee Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills (React, Node, MongoDB)"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="number"
            name="performanceScore"
            placeholder="Performance Score"
            value={formData.performanceScore}
            onChange={handleChange}
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="number"
            name="experience"
            placeholder="Years of Experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border p-4 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 text-lg font-semibold"
          >
            Add Employee
          </button>

        </form>

      </div>

    </div>
  );
}

export default EmployeeForm;