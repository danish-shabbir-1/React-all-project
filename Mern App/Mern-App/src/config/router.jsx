import React, { createContext, useContext, useState, useEffect } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Login from '../Views/login';
import Signup from '../Views/signup';
import Navbar from '../Components/Navbar';
import Dashboard from '../Views/Dashboard';

// Create a Context for Auth
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <AuthContext.Provider value={isAuthenticated}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <div>
            <Navbar />
            <Dashboard />
          </div>
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: useAuth() ? <Navigate to="/" /> : <Login />
    },
    {
      path: "/signup",
      element: useAuth() ? <Navigate to="/" /> : <Signup />

    },
    {
      path: "/",
      element: useAuth() ? <Navigate to="/" /> : <Login />

    },
  ]);

  return <RouterProvider router={router} />;
};

function Router() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default Router;
