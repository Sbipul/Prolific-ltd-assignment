import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Form from './Pages/Form/Form';
import Home from './Pages/Home/Home';
import Info from './Pages/Info/Info';
import Menu from './Pages/Menu/Menu';
import Search from './Pages/Search/Search';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/home">
            <Home/>
          </Route>

          <Route path="/search">
            <Search/>
          </Route>

          <Route path="/form">
            <Form/>
          </Route>

          <Route path="/info">
            <Info/>
          </Route>

          <Route path="/bonus">
            <Menu/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
