import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery().get('query');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
        axios.get(`http://localhost:5000/api/courses/search?q=${query}`)
          .then((res) => {
            const fetchedData = res.data;
            console.log('Fetched Data:', fetchedData);
            
            // Ensure the fetched data is an array before updating the state
            setResults(Array.isArray(fetchedData) ? fetchedData : []);
          })
          .catch((err) => {
            console.error('Search error:', err);
            setResults([]);  // Clear results if there's an error
          });
      }
  }, [query]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Results for "{query}"</h2>
      {results.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <ul>
          {results.map(course => (
            <li key={course._id}>{course.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResults;
