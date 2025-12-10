// netlify/functions/movie.js
import 'dotenv/config';
import axios from 'axios';

export const handler = async function (event, context) {
  const { s } = event.queryStringParameters;
  const API_KEY = process.env.OMDB_API_KEY;

  if (!API_KEY) {
    console.error("Missing API Key"); // Log this to see in terminal if it fails
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: "Server missing API Key" }) 
    };
  }

  try {
    const response = await axios.get('https://www.omdbapi.com', {
      params: {
        apikey: API_KEY,
        s: s,
        type: 'movie'
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };

  } catch (error) {
    console.error("OMDB Error:", error.message);
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: "Failed to fetch data" }) 
    };
  }
};