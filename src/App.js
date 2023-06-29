import logo from './logo.svg';
import './App.css';
import './Shared/Comp'
import TopNavbar from './Shared/TopNavbar';
import Frontpage from './Shared/Frontpage';
import FirstTeam from './Shared/FirstTeam';
import Shop from './Shared/Shop';
import MemberShip from './Shared/MemberShip';
import 'bootstrap/dist/css/bootstrap.min.css';
import JerseryWhite from './Shared/JerseryWhite';
import JerseryBlue from './Shared/JerseryBlue';
import JerseryGreen from './Shared/JerseryGreen';
import ChartCanvas from './Shared/ChartCanvas';
import ViewBag from './Shared/ViewBag';
import Checkout from './Shared/Checkout';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { First } from 'react-bootstrap/esm/PageItem';
import Leaguetable1 from './Shared/Leaguetable1';
import Club from './Shared/Club';
import News from './Shared/News';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
     <TopNavbar/>
     <Routes>
      <Route path='/' element={<Frontpage/>}/>
      <Route path='FirstTeam' element={<FirstTeam/>}/>
      <Route path='News' element={<News/>}/>
      <Route path='Club' element={<Club/>}/>
      <Route path='Shop' element={<Shop/>}/>
      <Route path='/option1' element={<JerseryWhite/>}/>
      <Route path='/option2' element={<JerseryBlue/>}/>
      <Route path='/option3' element={<JerseryGreen/>}/>
      <Route path='MemberShip' element={<MemberShip/>}/>
      <Route path='/cart' element={<ChartCanvas/>}/>
      <Route path='/viewbag' element={<ViewBag/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      <Route path='/handlelink' element={<Leaguetable1/>}/>
      <Route path='BFC-REACT-PROJECT/' element={<Frontpage/>}/>
      <Route path='*' element={<h1>Page Not Found</h1>}/>
     </Routes>
     </BrowserRouter>
  )
}

export default App;
