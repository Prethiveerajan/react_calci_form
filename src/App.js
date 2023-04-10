import logo from './logo.svg';
import { BrowserRouter as Router ,Link,Routes,Route} from 'react-router-dom';
import CartoonComponent from'./Component/Routes/CartoonComponent/CartoonComponent';
import CalciComponent from './Component/Routes/CalciComponent/CalciComponent';
import IntroComponent from './Component/Routes/IntroComponent/IntroComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Calci">Calculator</Link>
          </li>
          <li>
            <Link to="/Cartoon">Cartoon</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/Cartoon'element={<CartoonComponent/>}></Route>
          <Route exact path='/Calci' element={<CalciComponent/>}></Route>
          <Route exact path='/' element={<IntroComponent/>}> </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

