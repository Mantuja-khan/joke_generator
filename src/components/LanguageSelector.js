function LanguageSelector({ language, onLanguageChange }) {
    return (
      <div className="language-selector">
        <label data-active={language === 'english'}>
          <input
            type="radio"
            value="english"
            checked={language === 'english'}
            onChange={(e) => onLanguageChange(e.target.value)}
          />
          ENG 🌍
        </label>
        <label data-active={language === 'hindi'}>
          <input
            type="radio"
            value="hindi"
            checked={language === 'hindi'}
            onChange={(e) => onLanguageChange(e.target.value)}
          />
          हिंदी 🇮🇳
        </label>
      </div>
    );
  }
  
  export default LanguageSelector;