import { useState, useEffect } from 'react';
import { fetchFromApi } from '../config/api.js';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTeams = async () => {
      try {
        setLoading(true);
        const data = await fetchFromApi('/api/teams');
        setTeams(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err) {
        setError(err.message);
        setTeams([]);
      } finally {
        setLoading(false);
      }
    };

    loadTeams();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Teams</h1>
      
      {error && (
        <div className="alert alert-danger" role="alert">
          Error loading teams: {error}
        </div>
      )}

      {loading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {!loading && teams.length === 0 && (
        <div className="alert alert-info">No teams found</div>
      )}

      {!loading && teams.length > 0 && (
        <div className="row">
          {teams.map((team) => (
            <div key={team._id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{team.name}</h5>
                  {team.description && (
                    <p className="card-text">{team.description}</p>
                  )}
                  <p className="card-text">
                    <strong>Leader:</strong> {team.leader?.name || 'Unknown'}
                  </p>
                  <p className="card-text">
                    <strong>Members:</strong> {team.members?.length || 0}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
