// Collection of joke APIs
export const JOKE_APIS = {
    JOKE_API: {
      URL: 'https://v2.jokeapi.dev/joke/',
      PARAMS: '?safe-mode&type=twopart'
    },
    NINJA_JOKES: {
      URL: 'https://api.api-ninjas.com/v1/jokes',
      HEADERS: {
        'X-Api-Key': 'https://official-joke-api.appspot.com/jokes/random',
        'Content-Type': 'application/json'
      }
    },
    OFFICIAL_JOKE: {
      URL: 'https://official-joke-api.appspot.com/random_joke'
    }
  };
  export default JOKE_APIS;