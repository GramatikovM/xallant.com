import "./App.css";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import ServicePage from './Services/ServicePage';
import AboutUs from './AboutUs/AboutUs';
import Contacts from './Contacts/Contacts';
import Error from './Error/Error';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>

        <Switch>
          <Route exact path="/xalllant.com">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <ServicePage></ServicePage>
          </Route>
          <Route path="/aboutUs">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/contacts">
            <Contacts></Contacts>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;