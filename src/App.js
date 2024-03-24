import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import AppRoutes from "./components/AppRoutes";
import { useAppContext } from "./utils/context";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "./components/Loader";

function App() {
  const { auth } = useAppContext();
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
