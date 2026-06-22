import { useState, useEffect } from 'react';
import { fetchFromApi } from '../config/api.js';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        setLoading(true);
        const data = await fetchFromApi('/api/workouts');
        setWorkouts(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err) {
        setError(err.message);
        setWorkouts([]);
      } finally {
        setLoading(false);
      }
    };

    loadWorkouts();
  }, []);

  const getDifficultyBadgeClass = (difficulty) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-success';
      case 'intermediate':
        return 'bg-warning';
      case 'advanced':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Workouts</h1>
      
      {error && (
        <div className="alert alert-danger" role="alert">
          Error loading workouts: {error}
        </div>
      )}

      {loading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {!loading && workouts.length === 0 && (
        <div className="alert alert-info">No workouts found</div>
      )}

      {!loading && workouts.length > 0 && (
        <div className="row">
          {workouts.map((workout) => (
            <div key={workout._id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{workout.name}</h5>
                  {workout.description && (
                    <p className="card-text">{workout.description}</p>
                  )}
                  <p className="card-text">
                    <strong>Type:</strong> {workout.type}
                  </p>
                  <p className="card-text">
                    <strong>Duration:</strong> {workout.duration} min
                  </p>
                  <p className="card-text">
                    <span className={`badge ${getDifficultyBadgeClass(workout.difficulty)}`}>
                      {workout.difficulty}
                    </span>
                  </p>
                  {workout.exercises && workout.exercises.length > 0 && (
                    <div className="mt-3">
                      <strong>Exercises:</strong>
                      <ul className="list-unstyled mt-2">
                        {workout.exercises.map((exercise, idx) => (
                          <li key={idx}>• {exercise}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
