// // context/AuthContext.jsx
// import { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const login = async (email, password) => { /* call /api/login */ };
//   const register = async (data) => { /* call /api/register */ };
//   useEffect(() => { /* fetch /api/user if token exists */ }, []);
//   return (
//     <AuthContext.Provider value={{ user, login, register }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
