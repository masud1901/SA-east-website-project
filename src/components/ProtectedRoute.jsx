import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

const ProtectedRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    // You can return a loading spinner or any loading indicator here
    return <div>Loading...</div>;
  }

  if (error) {
    // Handle any errors that occurred during authentication
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
