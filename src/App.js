import { BrowserRouter, Switch } from "react-router-dom";
import LandingPage from "./LandingPage.js";
import LayoutRouteBlue from "./LayoutRouteBlue.js";
import LayoutRouteGrey from "./LayoutRouteGrey.js";
import LayoutRouteExt from "./LayoutRouteExt";
import AboutScreen from "./AboutScreen.js"
import Faq from './Faq.js';
import Contact from './Contact.js';
import LoginScreen from './LoginScreen';
import SignUp from './SignUp.js';

//import Album from './Album.js'


function App() {
  return(
    <BrowserRouter>
      <Switch>
      <LayoutRouteGrey path="/" exact={true} component={LandingPage} />
      <LayoutRouteGrey path="/about" exact={true} component={AboutScreen} />
      <LayoutRouteGrey path="/faq" exact={true} component={Faq} />
      <LayoutRouteGrey path="/contact" exact={true} component={Contact} />
      <LayoutRouteExt path="/login" exact={true} component={LoginScreen} />
      <LayoutRouteExt path="/signup" exact={true} component={SignUp} />
      </Switch>
    </BrowserRouter>

   

 
  )
}

export default App;
