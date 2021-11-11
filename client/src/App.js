import "./App.css";
import Landing from "./Components/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Parse from "parse";
import Profile from "./Components/Profile";
import InputProfile from "./Components/InputProfile";
import ListAdvertisers from "./Components/ListAdvertisers";
import { Helmet } from "react-helmet";
import Secondview from "./Components/Secondview";
import Fourthview from "./Components/Fourthview";
import Thirdview from "./Components/Thirdview";
import SuccessPage from "./Components/SuccessPage";
import AdvertProfile from "./Components/AdvertProfile";
Parse.initialize("myAppId");
Parse.serverURL = "http://localhost:1337/parse";
const Gamers = Parse.Object.extend("Gamers");
const users = new Gamers();
try {
  users.set(
    "linkpic",
    "https://images.pexels.com/photos/7683693/pexels-photo-7683693.jpeg?cs=srgb&dl=pexels-rodnae-productions-7683693.jpg&fm=jpg"
  );
  users.set("username", "Fodjo Frank");
  users.set("email", "fodjolontchifrank@gmail.com");
  users.set("Location", "Limbe,Camroon");
  users.set("Contacts", "679");
  users.set("Views", "524");
  users.set("Locale", "Douala");
  users.set("Category", "Shoes");
  users.set(
    "Bio",
    "It's huge and packed with sections and components: dropdown menu, everything I could throw at it"
  );

  users.save();
} catch (error) {
  console.log("errors");
  console.log(error);
}
const Name = users.get("username");
const mail = users.get("email");
const Local = users.get("Location");
const about = users.get("Bio");
const cont = users.get("Contacts");
const view = users.get("Views");
const loc = users.get("Locale");
const cat = users.get("Category");
const pic = users.get("linkpic");

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>Whatsapp Status Seller</title>
          <meta
            name="description"
            content="Get Advertisers advertise your product"
          />
        </Helmet>
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route path="/profile-form" component={InputProfile} />
          <Route path="/advertisers" component={ListAdvertisers} />
          <Route path="/advertiser/:id" component={Profile} />
          <Route path="/success-form" component={SuccessPage} />
          <Route path="/advert-prof" component={AdvertProfile} />
        </Switch>
      </div>
    </Router>
    // <div>
    //   <SuccessPage />
    // </div>
  );
}

export default App;
