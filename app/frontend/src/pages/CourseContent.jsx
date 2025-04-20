import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CourseContent.css';

const CourseContent = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/courses/${id}`);
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <p>Loading course content...</p>;
  if (!course) return <p>Course not found</p>;

  const selectedLesson = course.lessons[selectedLessonIndex];
  return (
    <div className="course-container">
      <aside className="sidebar">
        <h3>Lessons</h3>
        <ul>
          {course.lessons.map((lesson, index) => (
            <li
              key={index}
              className={index === selectedLessonIndex ? 'active' : ''}
              onClick={() => setSelectedLessonIndex(index)}
            >
              {lesson.title}
            </li>
          ))}
        </ul>
      </aside>

      <main className="lesson-content">
        <h2>{course.title}</h2>
        <p className="description">{course.description}</p>
        <h3>{selectedLesson.title}</h3>
        <p>{selectedLesson.content}</p>
      </main>
    </div>
  );
};

export default CourseContent;

