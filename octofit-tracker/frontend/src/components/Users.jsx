import { useState, useEffect } from 'react';
import { fetchFromApi } from '../config/api.js';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const data = await fetchFromApi('/api/users');
        setUsers(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Users</h1>
      
      {error && (
        <div className="alert alert-danger" role="alert">
          Error loading users: {error}
        </div>
      )}

      {loading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {!loading && users.length === 0 && (
        <div className="alert alert-info">No users found</div>
      )}

      {!loading && users.length > 0 && (
        <div className="row">
          {users.map((user) => (
            <div key={user._id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="card-text">
                    <strong>Points:</strong> {user.points}
                  </p>
                  {user.bio && (
                    <p className="card-text">
                      <small className="text-muted">{user.bio}</small>
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
