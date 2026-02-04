# React TypeScript Authentication App with JWT

A complete authentication system built with React, TypeScript, and JWT tokens.

## Features

- ✅ JWT-based authentication
- ✅ Protected routes with React Router
- ✅ Token stored securely in localStorage
- ✅ Automatic token expiry check
- ✅ Login/Logout functionality
- ✅ Protected Dashboard page
- ✅ Responsive design
- ✅ TypeScript for type safety

## Project Structure

```
auth-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── PrivateRoute.tsx       # Protected route wrapper
│   ├── contexts/
│   │   └── AuthContext.tsx        # Auth state management
│   ├── pages/
│   │   ├── Home.tsx               # Landing page
│   │   ├── Login.tsx              # Login page
│   │   └── Dashboard.tsx          # Protected dashboard
│   ├── styles/
│   │   ├── Home.css
│   │   ├── Login.css
│   │   └── Dashboard.css
│   ├── utils/
│   │   └── authService.ts         # JWT & auth utilities
│   ├── App.tsx                    # Main app component
│   ├── App.css
│   ├── index.tsx                  # Entry point
│   └── index.css
├── package.json
├── tsconfig.json
└── README.md
```

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Application

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Usage

### Demo Credentials
- **Username:** demo
- **Password:** password

### How It Works

1. **Login**: Navigate to `/login` and enter credentials
2. **Authentication**: JWT token is generated and stored in localStorage
3. **Protected Routes**: Dashboard is only accessible to authenticated users
4. **Token Validation**: Token expiry is checked automatically
5. **Logout**: Removes token and redirects to login

## Key Components

### AuthContext (`src/contexts/AuthContext.tsx`)
Manages global authentication state using React Context API.

```typescript
const { user, token, login, logout, isAuthenticated } = useAuth();
```

### PrivateRoute (`src/components/PrivateRoute.tsx`)
Protects routes from unauthorized access.

```typescript
<PrivateRoute>
  <Dashboard />
</PrivateRoute>
```

### authService (`src/utils/authService.ts`)
Handles JWT token operations:
- `setToken(token)` - Store token in localStorage
- `getToken()` - Retrieve token
- `removeToken()` - Clear token
- `isAuthenticated()` - Check token validity
- `login(username, password)` - Mock login API

## Token Storage

Tokens are stored in **localStorage** with the key `auth_token`.

### Alternative Storage Options

You can easily switch to:

1. **Session Storage** (clears on tab close):
   ```typescript
   sessionStorage.setItem('auth_token', token);
   ```

2. **Cookies** (requires js-cookie package):
   ```typescript
   import Cookies from 'js-cookie';
   Cookies.set('auth_token', token, { secure: true, sameSite: 'strict' });
   ```

## Security Notes

- JWT tokens are checked for expiry on every authentication check
- Tokens expire after 24 hours (configurable in `authService.ts`)
- Private routes automatically redirect to login if token is invalid
- This is a **demo implementation** - in production:
  - Use HTTPS only
  - Implement refresh tokens
  - Store sensitive tokens in httpOnly cookies
  - Add CSRF protection
  - Use a real backend API

## API Integration

To connect to a real backend, modify `authService.login()`:

```typescript
login: async (username: string, password: string) => {
  const response = await fetch('https://your-api.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  
  if (!response.ok) throw new Error('Login failed');
  
  const data = await response.json();
  return { token: data.token, user: data.user };
}
```

## Available Scripts

- `npm start` - Run development server
- `npm build` - Create production build
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## Technologies Used

- React 18
- TypeScript 5
- React Router 6
- React Context API
- CSS3 (with gradients & flexbox)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Author

Created as a demonstration of JWT authentication in React with TypeScript.
