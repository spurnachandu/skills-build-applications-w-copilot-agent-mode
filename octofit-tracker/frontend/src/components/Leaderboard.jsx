import { useState, useEffect } from 'react';
import { fetchFromApi } from '../config/api.js';

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLeaderboard = async () => {
      try {
        setLoading(true);
        const data = await fetchFromApi('/api/leaderboard');
        setLeaderboard(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err) {
        setError(err.message);
        setLeaderboard([]);
      } finally {
        setLoading(false);
      }
    };

    loadLeaderboard();
  }, []);

  const getMedalEmoji = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Leaderboard</h1>
      
      {error && (
        <div className="alert alert-danger" role="alert">
          Error loading leaderboard: {error}
        </div>
      )}

      {loading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {!loading && leaderboard.length === 0 && (
        <div className="alert alert-info">No leaderboard data found</div>
      )}

      {!loading && leaderboard.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Rank</th>
                <th>User</th>
                <th>Points</th>
                <th>Activities</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry) => (
                <tr key={entry._id}>
                  <td>
                    <span className="fs-5">{getMedalEmoji(entry.rank)}</span>
                  </td>
                  <td>{entry.user?.name || 'Unknown'}</td>
                  <td>
                    <span className="badge bg-primary">{entry.totalPoints}</span>
                  </td>
                  <td>{entry.activitiesCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
