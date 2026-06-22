import { useState, useEffect } from 'react';
import { fetchFromApi } from '../config/api.js';

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadActivities = async () => {
      try {
        setLoading(true);
        const data = await fetchFromApi('/api/activities');
        setActivities(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err) {
        setError(err.message);
        setActivities([]);
      } finally {
        setLoading(false);
      }
    };

    loadActivities();
  }, []);

  const getActivityIcon = (type) => {
    const icons = {
      running: '🏃',
      cycling: '🚴',
      swimming: '🏊',
      gym: '💪',
      walking: '🚶',
      other: '🏋️',
    };
    return icons[type] || '🏃';
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Activities</h1>
      
      {error && (
        <div className="alert alert-danger" role="alert">
          Error loading activities: {error}
        </div>
      )}

      {loading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {!loading && activities.length === 0 && (
        <div className="alert alert-info">No activities found</div>
      )}

      {!loading && activities.length > 0 && (
        <div className="row">
          {activities.map((activity) => (
            <div key={activity._id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    {getActivityIcon(activity.type)} {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                  </h5>
                  <p className="card-text">
                    <strong>User:</strong> {activity.user?.name || 'Unknown'}
                  </p>
                  <p className="card-text">
                    <strong>Duration:</strong> {activity.duration} min
                  </p>
                  <p className="card-text">
                    <strong>Calories:</strong> {activity.calories} kcal
                  </p>
                  {activity.distance && (
                    <p className="card-text">
                      <strong>Distance:</strong> {activity.distance} km
                    </p>
                  )}
                  {activity.description && (
                    <p className="card-text">
                      <small className="text-muted">{activity.description}</small>
                    </p>
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
