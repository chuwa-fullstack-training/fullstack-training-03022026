import { Navigate, Link } from 'react-router-dom';
import { useMemo } from 'react';

export default function ProtectedRoute({ children }) {
    const user = useMemo(() => localStorage.getItem('user'), []);
  
    if (!user) {
      return <Navigate to="/login" />;
    }
  
    return (
      <div>
        {children}
      </div>
    );
  }
  