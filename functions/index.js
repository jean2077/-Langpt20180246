const functions = require("firebase-functions");
const axios = require("axios");

// GPT-4 API 호출 함수
exports.fineTuneModel = functions.https.onRequest(async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/fine-tunes",
      {
        training_file: req.body.training_file,
        model: "gpt-4",
        n_epochs: 4,
      },
      {
        headers: {
          "Authorization": `Bearer ${functions.config().openai.api_key}`,
          "Content-Type": "application/json",
        },
      },
    );

    res.status(200).send(response.data);
  } catch (error) {
    console.error("Error calling GPT-4 API:", error);
    res.status(500).send("Error occurred while fine-tuning the model.");
  }
});
