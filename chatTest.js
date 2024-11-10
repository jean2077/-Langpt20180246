const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = async () => {
    rl.question('You: ', async (userInput) => {
        if (userInput.toLowerCase() === 'exit') {
            rl.close();
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:5001/langpt3/us-central1/callGptApi', {
                prompt: userInput
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('GPT:', response.data.choices[0].message.content);
        } catch (error) {
            console.error('Error:', error.message);
        }

        askQuestion(); // 반복적으로 질문을 받을 수 있도록 재귀 호출
    });
};

console.log('Type your message to start chatting with GPT. Type "exit" to quit.');
askQuestion();
