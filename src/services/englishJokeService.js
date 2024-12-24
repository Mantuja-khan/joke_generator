import { programmingJokes, techJokes, generalJokes } from '../data/englishJokes';

const ENDPOINTS = {
  PRIMARY: 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous?safe-mode&type=twopart',
  FALLBACK: 'https://official-joke-api.appspot.com/random_joke'
};

const getRandomJokeFromCollection = () => {
  const allJokes = [...programmingJokes, ...techJokes, ...generalJokes];
  const randomIndex = Math.floor(Math.random() * allJokes.length);
  return allJokes[randomIndex];
};

export const fetchEnglishJoke = async () => {
  try {
    const response = await fetch(ENDPOINTS.PRIMARY);
    
    if (response.ok) {
      const data = await response.json();
      return {
        setup: data.setup || data.question,
        punchline: data.delivery || data.punchline
      };
    }

    // If API fails, use local jokes
    return getRandomJokeFromCollection();
  } catch (error) {
    console.error('Error fetching English joke:', error);
    // Fallback to local jokes on error
    return getRandomJokeFromCollection();
  }
};