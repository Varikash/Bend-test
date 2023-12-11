import { Routes, Route, useLocation} from 'react-router-dom';
import Style from '../App/App.module.css';
import FuncPage from '../../pages/FuncPage';

function App() {

  const location = useLocation();
  // const navigate = useNavigate();
  const background = location.state && location.state.background;
  
  return (
    <main className={Style.main}>
      <Routes location={background || location}>
        <Route path="/" element={<FuncPage />}/>
      </Routes>
    </main>
  )
}

export default App
