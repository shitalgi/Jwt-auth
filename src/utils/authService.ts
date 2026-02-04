// Utility functions for handling JWT tokens
const TOKEN_KEY = 'auth_token';

export const authService = {
  // Store token in localStorage
  setToken: (token: string): void => {
    localStorage.setItem(TOKEN_KEY, token);
  },

  // Retrieve token from localStorage
  getToken: (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
  },

  // Remove token from localStorage
  removeToken: (): void => {
    localStorage.removeItem(TOKEN_KEY);
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    const token = authService.getToken();
    if (!token) return false;

    // Check if token is expired
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiry = payload.exp * 1000; // Convert to milliseconds
      return Date.now() < expiry;
    } catch (error) {
      return false;
    }
  },

  // Decode JWT token to get user data
  decodeToken: (token: string): any => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
      return null;
    }
  },

  // Mock login function (replace with actual API call)
  login: async (username: string, password: string): Promise<{ token: string; user: any }> => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock validation
        if (username === 'demo' && password === 'password') {
          // Create a mock JWT token
          const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
          const payload = btoa(JSON.stringify({
            sub: '1234567890',
            username: username,
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) // 24 hours
          }));
          const signature = 'mock-signature';
          const token = `${header}.${payload}.${signature}`;

          resolve({
            token,
            user: { id: '1234567890', username }
          });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  },

  // Mock logout function
  logout: (): void => {
    authService.removeToken();
  }
};
