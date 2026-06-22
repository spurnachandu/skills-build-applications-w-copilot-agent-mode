import { Link } from 'react-router-dom';
import { getApiBaseUrl } from '../config/api.js';
import './Home.css';

export default function Home() {
  const apiUrl = getApiBaseUrl();

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-4">🏋️ OctoFit Tracker</h1>
          <p className="lead mb-4">
            Track your fitness activities, compete with teammates, and achieve your goals!
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/users" className="btn btn-primary btn-lg">
              View Users
            </Link>
            <Link to="/teams" className="btn btn-success btn-lg">
              Join Teams
            </Link>
            <Link to="/activities" className="btn btn-info btn-lg">
              Log Activities
            </Link>
            <Link to="/leaderboard" className="btn btn-warning btn-lg">
              Leaderboard
            </Link>
            <Link to="/workouts" className="btn btn-danger btn-lg">
              Get Workouts
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Features</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">👥 User Profiles</h5>
                  <p className="card-text">
                    Create your profile and connect with other fitness enthusiasts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">⚡ Activity Tracking</h5>
                  <p className="card-text">
                    Log your workouts and monitor your progress over time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">🏆 Leaderboard</h5>
                  <p className="card-text">
                    Compete with friends and climb the global rankings.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">👫 Team Challenge</h5>
                  <p className="card-text">
                    Form teams and challenge other groups to reach your goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">💪 Personalized Workouts</h5>
                  <p className="card-text">
                    Get customized workout plans tailored to your fitness level.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">📊 Analytics</h5>
                  <p className="card-text">
                    View detailed statistics and track your performance metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="api-info-section py-5">
        <div className="container">
          <h3>API Configuration</h3>
          <div className="alert alert-info">
            <p>
              <strong>API Base URL:</strong> <code>{apiUrl}</code>
            </p>
            <p className="mb-0">
              <small>
                Ensure <code>VITE_CODESPACE_NAME</code> is set in your environment for Codespaces.
              </small>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
