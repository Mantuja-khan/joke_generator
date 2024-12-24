import { useState } from 'react';
import { fetchJoke } from '../services/jokeApi';
import LanguageSelector from './LanguageSelector';
import JokeDisplay from './JokeDisplay';
import LoadingSpinner from './LoadingSpinner';

function JokeGenerator() {
  const [currentJoke, setCurrentJoke] = useState(null);
  const [language, setLanguage] = useState('english');
  const [showPunchline, setShowPunchline] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isRolling, setIsRolling] = useState(false);

  const generateRandomJoke = async () => {
    try {
      setIsRolling(true);
      setIsLoading(true);
      setError(null);
      setCurrentJoke(null);
      setShowPunchline(false);
      const joke = await fetchJoke(language);
      setCurrentJoke(joke);
    } catch (err) {
      setError('Failed to fetch joke. Please try again.');
    } finally {
      setIsLoading(false);
      setTimeout(() => setIsRolling(false), 500);
    }
  };

  return (
    <div className="joke-container">
      <LanguageSelector 
        language={language} 
        onLanguageChange={setLanguage} 
      />

      <div className="button-container">
        <button 
          onClick={generateRandomJoke} 
          className={`generate-btn ${isRolling ? 'rolling' : ''}`}
          disabled={isLoading}
        >
          Generate Joke
        </button>
      </div>

      {isLoading && <LoadingSpinner />}
      {error && <p className="error-message">{error}</p>}
      
      {!isLoading && <JokeDisplay 
        joke={currentJoke}
        showPunchline={showPunchline}
        onRevealPunchline={() => setShowPunchline(true)}
      />}
    </div>
  );
}

export default JokeGenerator;