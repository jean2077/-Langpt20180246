require('dotenv').config();
const OpenAI = require('openai');
const fs = require('fs');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function uploadAndFineTune() {
    try {
        // 파일 업로드
        const file = await openai.files.create({
            file: fs.createReadStream('./training-data2.jsonl'),
            purpose: 'fine-tune'
        });

        // 파인튜닝 작업 생성
        const fineTune = await openai.fineTuning.jobs.create({
            training_file: file.id,
            model: 'gpt-4o-mini-2024-07-18'

        });

        console.log('파인튜닝 작업이 시작되었습니다:', fineTune);
    } catch (error) {
        console.error('오류 발생:', error);
    }
}

uploadAndFineTune();
