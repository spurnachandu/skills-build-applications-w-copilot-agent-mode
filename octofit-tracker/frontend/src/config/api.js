/**
 * API Configuration for Octofit Tracker
 * Supports both Codespaces and localhost environments
 */

/**
 * Get the API base URL based on environment variables
 * - In Codespaces: https://$VITE_CODESPACE_NAME-8000.app.github.dev
 * - Locally: http://localhost:8000
 */
export const getApiBaseUrl = () => {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  
  if (codespaceName && codespaceName !== 'undefined') {
    return `https://${codespaceName}-8000.app.github.dev`;
  }
  
  // Fallback to localhost for development
  return 'http://localhost:8000';
};

/**
 * Fetch data from API with error handling
 */
export const fetchFromApi = async (endpoint) => {
  try {
    const baseUrl = getApiBaseUrl();
    const url = `${baseUrl}${endpoint}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Fetch Error:', error);
    throw error;
  }
};

/**
 * POST data to API
 */
export const postToApi = async (endpoint, payload) => {
  try {
    const baseUrl = getApiBaseUrl();
    const url = `${baseUrl}${endpoint}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Post Error:', error);
    throw error;
  }
};

export default {
  getApiBaseUrl,
  fetchFromApi,
  postToApi,
};
