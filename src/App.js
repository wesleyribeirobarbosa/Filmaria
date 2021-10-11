import Routes from "./routes";
import "./styles.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="app">
      <Routes></Routes>
      <ToastContainer autoClose={3000}/>
    </div>
  );
}

export default App;
