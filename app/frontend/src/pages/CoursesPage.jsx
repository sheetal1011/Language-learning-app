import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CoursePage.css';
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses');
        setCourses(response.data); // Set courses to state
        setLoading(false); // Turn off loading state
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []); 
  const navigate = useNavigate();

const handleStart = (id) => {
  navigate(`/course/${id}`);
};


  return (
    <div className="course-list">
      <h2>💡Available Courses</h2>
      {loading ? (
        <p>Loading courses...</p>
      ) : courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <div className="courses-container">
          {courses.map((course) => (
            <div key={course._id} className="course-card">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button className="start-btn" onClick={() => handleStart(course._id)}>Start Course</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;

