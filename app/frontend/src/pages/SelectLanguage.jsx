import { useNavigate } from "react-router-dom";
import './SelectLanguage.css';

const languages = [
  { name: 'HTML', tagline: 'Structure your web' },
  { name: 'CSS', tagline: 'Style your page' },
  { name: 'JAVASCRIPT', tagline: 'Make it dynamic' },
  { name: 'PHP', tagline: 'Server-side scripting' },
  { name: 'PYTHON', tagline: 'Easy & powerful' },
  { name: 'JAVA', tagline: 'Write once, run anywhere' },
  { name: 'C', tagline: 'Foundations of programming' },
  { name: 'C++', tagline: 'Object-oriented extension' },
  { name: 'SQL', tagline: 'Query your data' },
  { name: 'MYSQL', tagline: 'Popular RDBMS' },
  { name: 'MONGODB', tagline: 'The NoSQL Powerhouse' },
  { name: 'REACTJS', tagline: 'Modern UI framework' },
  { name: 'NODEJS', tagline: 'JS on the server' },
  { name: 'DJANGO', tagline: 'Python web magic' },
  { name: 'DSA', tagline: 'Crack coding rounds' }
];

const SelectLanguage = () => {
  const navigate = useNavigate();

  const handleSelect = (lang) => {
    navigate(`/quiz/${encodeURIComponent(lang)}`);
  };

  return (
    <div className="select-language-container">
      <h2>📚Boost your coding skills!</h2>
      <h4>Select a programming language below and put your skills to the test with our interactive quiz!</h4>
      <div className="language-grid">
        {languages.map((lang) => (
          <div key={lang.name} className="language-card" onClick={() => handleSelect(lang.name)}>
            <h3>{lang.name}</h3>
            <p>{lang.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectLanguage;