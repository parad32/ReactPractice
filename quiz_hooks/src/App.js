import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import MListPage from './pages/member/MListPage';
import HeaderCom from './components/common/HeaderCom';
import NotFound from './components/common/NotFound';
import MOnePage from './pages/member/MOnePage';
import MDeletePage from './pages/member/MDeletePage';
import MSignUpPage from './pages/member/MSignUpPage';
import MUpdatePage from './pages/member/MUpdatePage';
function App() {
  return (
    <Routes>
      <Route element={<HeaderCom />} >
        <Route path="/" element={<IndexPage />} />
        <Route path="/member/list" element={<MListPage />} />
        <Route path="/member/one" element={<MOnePage />} />
        <Route path="/member/delete/:id" element={<MDeletePage />} />
        <Route path="/member/signup" element={<MSignUpPage />} />
        <Route path="/member/update/:id" element={<MUpdatePage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;