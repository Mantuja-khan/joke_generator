function JokeDisplay({ joke, showPunchline, onRevealPunchline }) {
    if (!joke) return null;
  
    return (
      <div className="joke-content">
        <p className="setup">
          {joke.setup} {!joke.punchline && '😄'}
        </p>
        {joke.punchline && (
          <>
            <button 
              onClick={onRevealPunchline} 
              className="reveal-btn"
              style={{ display: showPunchline ? 'none' : 'block' }}
            >
              🎭 Reveal Punchline
            </button>
            {showPunchline && (
              <p className="punchline">
                {joke.punchline} 😄
              </p>
            )}
          </>
        )}
      </div>
    );
  }
  
  export default JokeDisplay;