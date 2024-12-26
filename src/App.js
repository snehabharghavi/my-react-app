import logo from './logo.svg';
import './App.css';
import Router from 'Router';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Self from './Self';
import Header from './Header';
import External from './External';
import Menu from './Menu';
import Sample from './Sample';
import Front from './Front';
import AboutUs from './Aboutus';
import Contactus from './Contactus';
import PageNotFound from './PageNotFound';
import Food from './Food';
import Statefunction from './Statefunction';
import Axitable from './Axitable';



function App() {
  return (
    <div className="App">
      <header>
      
        
        <h1 style={{color:"green",backgroundColor:"goldenrod",fontFamily:"cursive"}}>welcome to my react app</h1>
        <h2 style={{color:"red",backgroundColor:"pink",fontFamily:"cursive"}}>React automatically reloads</h2>
        <BrowserRouter>
        <Link to='/front'>Front</Link> &nbsp; &nbsp;
        <Link to='/menu'>Menu</Link> &nbsp; &nbsp;
        <Link to='/aboutus'>AboutUs</Link> &nbsp; &nbsp;
        <Link to='/contactus'>Contactus</Link> &nbsp; &nbsp;
        <Link to='/Food'>Food</Link> &nbsp; &nbsp;
        <Link to='/statefun'>Statefunction</Link> &nbsp; &nbsp;
        <Link to='/axiso'>Axitable</Link> &nbsp; &nbsp;



      
        
        <Routes>
        <Route path='/menu' element={<Menu></Menu>}>
          </Route>
        <Route path='/front' element={<Front></Front>}>
        </Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}>
        </Route>
        <Route path='/contactus' element={<Contactus></Contactus>}>
        </Route>
        <Route path='/*' element={<PageNotFound></PageNotFound>}>
        </Route>
        <Route path='/food' element={<Food></Food>}>
        </Route>
        <Route path='/statefun' element={<Statefunction></Statefunction>}>
        </Route>
        <Route path='/axiso' element={<Axitable></Axitable>}>
        </Route>
        </Routes>
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
