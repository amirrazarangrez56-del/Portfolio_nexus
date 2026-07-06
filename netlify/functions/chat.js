// netlify/functions/chat.js
// Uses Groq API (gsk_ key) — compatible with OpenAI SDK format

const https = require('https');

exports.handler = async function (event, context) {

    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    // CORS headers — needed for browser fetch calls
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
    };

    // Handle OPTIONS preflight
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    try {
        const { messages } = JSON.parse(event.body);

        // API key from Netlify environment variable
        const GROQ_API_KEY = process.env.GROQ_API_KEY;

        if (!GROQ_API_KEY) {
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ error: 'API key not configured on server.' })
            };
        }

        const requestBody = JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: messages,
            max_tokens: 512,
            temperature: 0.3
        });

        // Call Groq API (OpenAI-compatible endpoint)
        const response = await new Promise((resolve, reject) => {
            const req = https.request({
                hostname: 'api.groq.com',
                path: '/openai/v1/chat/completions',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${GROQ_API_KEY}`,
                    'Content-Length': Buffer.byteLength(requestBody)
                }
            }, (res) => {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => {
                    try {
                        resolve(JSON.parse(data));
                    } catch (e) {
                        reject(new Error('Failed to parse Groq response: ' + data));
                    }
                });
            });

            req.on('error', reject);
            req.write(requestBody);
            req.end();
        });

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(response)
        };

    } catch (error) {
        console.error('Groq API Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: error.message })
        };
    }
};
