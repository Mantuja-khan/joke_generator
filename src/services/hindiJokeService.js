import { familyJokes, schoolJokes, doctorJokes, santaBantaJokes } from '../data/hindiJokes';

export const getRandomHindiJoke = () => {
  const allJokes = [...familyJokes, ...schoolJokes, ...doctorJokes, ...santaBantaJokes];
  
  // Simulate API delay for consistent UX
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * allJokes.length);
      resolve(allJokes[randomIndex]);
    }, 800);
  });
};