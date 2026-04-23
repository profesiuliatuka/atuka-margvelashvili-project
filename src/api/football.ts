const BASE_URL = 'https://v3.football.api-sports.io';
const API_KEY = 'c5932b7ac5e4c32d4082cfcbc723f23d';

const headers = {
  'x-apisports-key': API_KEY,
  'x-rapidapi-host': 'v3.football.api-sports.io'
};

export const fetchTorpedoData = async (endpoint: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, { headers });
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};