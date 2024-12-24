// API Configuration
export const API_CONFIG = {
    ENGLISH_JOKE: {
      PRIMARY_URL: 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous?safe-mode&type=twopart',
      FALLBACK_URL: 'https://official-joke-api.appspot.com/random_joke',
      HEADERS: {
        'Content-Type': 'application/json'
      }
    },
    HINDI_JOKE: {
      URL: 'https://hindi-jokes-api.onrender.com/jokes/random',
      HEADERS: {
        'Content-Type': 'application/json'
      }
    }
  };