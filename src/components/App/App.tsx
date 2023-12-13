import { Routes, Route, useLocation} from 'react-router-dom';
import Style from '../App/App.module.css';
import FuncPage from '../../pages/FuncPage';
import ClassPage from '../../pages/ClassPage';
import SwitchButton from '../SwitchButton/SwitchButton';

function App() {

  const location = useLocation();
  
  return (
    <main className={Style.main}>
      <SwitchButton />
      <Routes location={location}>
        <Route path="/" element={<FuncPage />}/>
        <Route path="/class" element={<ClassPage/>}/>
      </Routes>
    </main>
  )
}

export default App
