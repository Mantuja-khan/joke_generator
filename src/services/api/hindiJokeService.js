import { ENDPOINTS } from './endpoints';
import { HEADERS } from './headers';

export const fetchHindiJoke = async () => {
  try {
    const response = await fetch(`${ENDPOINTS.HINDI}?api_key=d9c7c0a2c6d1c7c0`, {
      headers: HEADERS.HINDI,
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Hindi joke: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.jokeContent) {
      throw new Error('Invalid joke format received');
    }

    return {
      setup: data.jokeContent,
      punchline: '' // Hindi jokes API provides single-line jokes
    };
  } catch (error) {
    console.error('Error fetching Hindi joke:', error);
    throw new Error('Failed to fetch joke. Please try again.');
  }
};