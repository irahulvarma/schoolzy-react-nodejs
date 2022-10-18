import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';

function App() {

  useEffect(() => {
    document.title = "SchoolZy";
  });

  return (
    <>      
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
	        <Route path="/" element={<Homepage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
