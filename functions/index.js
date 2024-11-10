const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');
const cors = require('cors')({ origin: true }); // CORS 설정 추가
require('dotenv').config();

admin.initializeApp();

exports.callGptApi = functions.https.onRequest((req, res) => {
    cors(req, res, async () => { // CORS 미들웨어 추가
        const prompt = req.body.prompt;
        const apiKey = process.env.OPENAI_API_KEY;

        if (!prompt) {
            return res.status(400).send('Prompt is required');
        }

        if (!apiKey) {
            console.error('API key is not defined');
            return res.status(500).send('API key is not defined');
        }

        try {
            const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 100
            }, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            });

            res.status(200).send(response.data);
        } catch (error) {
            console.error('Error calling OpenAI API:', error.response ? error.response.data : error.message);
            res.status(500).send(`Error calling OpenAI API: ${error.message}`);
        }
    });
});
