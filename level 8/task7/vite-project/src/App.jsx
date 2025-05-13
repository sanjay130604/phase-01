// Import required dependencies
import { useAxiosInterceptors } from "./services/api";
import { LoadingProvider, LoadingContext } from "./context/LoadingContext";
import { useContext } from "react";
import UsersList from "./components/UsersList";

const LoadingIndicator = () => {
  const { loading } = useContext(LoadingContext); 
  return loading ? <div>Loading...</div> : null;
};

const App = () => {
  useAxiosInterceptors(); 

  return (
    <LoadingProvider>
      <LoadingIndicator /> 
      <UsersList /> 
    </LoadingProvider>
  );
};

export default App;
