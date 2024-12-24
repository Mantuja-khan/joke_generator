import { fetchEnglishJoke } from './api/englishJokeService';
import { getRandomHindiJoke } from './hindiJokeService';
import { getRandomLocalJoke } from './utils/jokeUtils';

export const fetchJoke = async (language) => {
  try {
    if (language === 'english') {
      // Equal 50-50 chance between API and local jokes
      const useApi = Math.random() >= 0.5;
      return useApi ? await fetchEnglishJoke() : getRandomLocalJoke();
    }
    return getRandomHindiJoke();
  } catch (error) {
    console.error('Error in fetchJoke:', error);
    // Fallback to local jokes on error
    return language === 'english' ? getRandomLocalJoke() : getRandomHindiJoke();
  }
};