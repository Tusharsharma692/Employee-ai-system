import { useState } from "react";

import API from "../services/api";

function Recommendation() {

  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    skills: "",
    performanceScore: "",
    experience: ""
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {

    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const getRecommendation = async () => {

    try {

      const payload = {
        ...employee,
        skills: employee.skills.split(",")
      };

      const res = await API.post(
        "/ai/recommend",
        { employee: payload }
      );

      setResult(
        res.data.choices[0].message.content
      );

    } catch (error) {

      console.log(error);

      alert("AI Error");
    }
  };

  return (

    <div className="max-w-2xl mx-auto mt-10">

      <h1 className="text-3xl font-bold mb-5">
        AI Recommendation
      </h1>

      <div className="space-y-3">

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border p-2"
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          className="w-full border p-2"
          onChange={handleChange}
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills"
          className="w-full border p-2"
          onChange={handleChange}
        />

        <input
          type="number"
          name="performanceScore"
          placeholder="Performance Score"
          className="w-full border p-2"
          onChange={handleChange}
        />

        <input
          type="number"
          name="experience"
          placeholder="Experience"
          className="w-full border p-2"
          onChange={handleChange}
        />

        <button
          onClick={getRecommendation}
          className="bg-purple-600 text-white px-4 py-2"
        >
          Generate AI Recommendation
        </button>

      </div>

      {
        result && (

          <div className="bg-gray-100 p-5 mt-5 rounded">

            <h2 className="text-2xl font-bold mb-3">
              AI Output
            </h2>

            <p className="whitespace-pre-wrap">
              {result}
            </p>

          </div>
        )
      }

    </div>
  );
}

export default Recommendation;