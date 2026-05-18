const axios = require("axios");

exports.getRecommendation = async (req, res) => {

  try {

    const { employee } = req.body;

    const prompt = `
Analyze this employee:

Name: ${employee.name}

Department: ${employee.department}

Skills: ${employee.skills}

Performance Score: ${employee.performanceScore}

Experience: ${employee.experience}

Give:
1. Promotion recommendation
2. Training suggestions
3. Performance feedback
4. Ranking evaluation
`;

    const response = await axios.post(

      "https://openrouter.ai/api/v1/chat/completions",

      {
        model: "openai/gpt-3.5-turbo",

        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      },

      {
        headers: {
          Authorization:
            `Bearer ${process.env.OPENROUTER_API_KEY}`,

          "Content-Type": "application/json"
        }
      }
    );

    res.json(response.data);

  } catch (error) {

    console.log(error.response?.data || error.message);

    res.status(500).json({
      message: error.message
    });
  }
};