import Main from './pages/main';
import Calculator from './pages/calculator';
import Result from './pages/result';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/calculator" element={<Calculator />}/>
          <Route path="/result" element={<Result />}/>
          <Route path="/" element={<Main />}/>
        </Routes>
      </div>
    </Router>
  );
}