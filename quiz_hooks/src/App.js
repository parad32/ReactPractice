import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import IndexCon from './containers/IndexCon';
import MListCon from './containers/members/MListCon';
import MOneCon from './containers/members/MOneCon';
import MDeleteCon from './containers/members/MDeleteCon';
import NotFound from './components/common/NotFound';
import HeaderCom from './components/common/HeaderCom';
function App() {
  return (
    <Routes>
      <Route path='/' element={<HeaderCom/>}>
        <Route path='/' element={<IndexCon/>}/>
        <Route path='/member/list' element={<MListCon/>}/>
        <Route path='/member/one/:id' element={<MOneCon/>}/>
        <Route path='/member/delete/:id' element={<MDeleteCon/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
