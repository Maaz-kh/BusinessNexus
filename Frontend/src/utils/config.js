// API and Socket URLs
export const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api`;
export const SOCKET_URL = import.meta.env.VITE_BACKEND_URL;

// JWT token management
export const getToken = () => localStorage.getItem('token');
export const setToken = (token) => localStorage.setItem('token', token);
export const removeToken = () => localStorage.removeItem('token');

// User data management
export const getUser = () => {
  const userData = localStorage.getItem('user');
  return userData ? JSON.parse(userData) : null;
};
export const setUser = (user) => localStorage.setItem('user', JSON.stringify(user));
export const removeUser = () => localStorage.removeItem('user'); 