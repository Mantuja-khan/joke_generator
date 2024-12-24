import { JOKE_APIS } from './jokeApis';

const fetchFromJokeAPI = async () => {
  const categories = ['Programming', 'Miscellaneous', 'Pun', 'Spooky', 'Christmas'].join(',');
  const response = await fetch(`${JOKE_APIS.JOKE_API.URL}${categories}${JOKE_APIS.JOKE_API.PARAMS}`);
  
  if (!response.ok) throw new Error('Failed to fetch from JokeAPI');
  
  const data = await response.json();
  return {
    setup: data.setup,
    punchline: data.delivery
  };
};

const fetchFromOfficialJokeAPI = async () => {
  const response = await fetch(JOKE_APIS.OFFICIAL_JOKE.URL);
  
  if (!response.ok) throw new Error('Failed to fetch from Official Joke API');
  
  const data = await response.json();
  return {
    setup: data.setup,
    punchline: data.punchline
  };
};

export const fetchEnglishJoke = async () => {
  // Randomly choose between APIs
  const useFirstApi = Math.random() > 0.5;
  
  try {
    return useFirstApi ? 
      await fetchFromJokeAPI() : 
      await fetchFromOfficialJokeAPI();
  } catch (error) {
    console.error('Error fetching English joke:', error);
    throw error;
  }
};