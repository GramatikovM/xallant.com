import "./App.css";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import ServicePage from './Services/ServicePage';
import Projects from './Projects/Projects';
import Contacts from './Contacts/Contacts';
import Error from './Error/Error';
import HomeImage from './Images/HomeImage.jpg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <img src={HomeImage} alt="HomeImage" />
            <Home></Home>
          </Route>
          <Route path="/home">
            <img src={HomeImage} alt="HomeImage" width="1920px" height="320px" />
            <Home></Home>
          </Route>
          <Route path="/services">
            <ServicePage>

            </ServicePage>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/contacts">
            <Contacts></Contacts>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;