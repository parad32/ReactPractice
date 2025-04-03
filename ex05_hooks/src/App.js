import logo from './logo.svg';
import './App.css';
import ReducerCon from './containers/ReducerCon';
import RegPage from './pages/RegPage';
import TestPage from './pages/TestPage';
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';
import HeaderCon from './containers/HeaderCon';
import { Routes , Route} from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderCon />} />
      <Route path="/register" element={<RegPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/context" element={<TestPage />} />
     
    </Routes>
  );
}

export default App;
