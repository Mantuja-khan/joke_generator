import { programmingJokes, techJokes, generalJokes } from '../../data/englishJokes';

export const getRandomLocalJoke = () => {
  const allJokes = [...programmingJokes, ...techJokes, ...generalJokes];
  const randomIndex = Math.floor(Math.random() * allJokes.length);
  return allJokes[randomIndex];
};

export const getRandomJokeFromCollection = (collection) => {
  const randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex];
};