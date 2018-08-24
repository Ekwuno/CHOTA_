import React from 'react';
import { BrowserRouter, Route, Switch ,} from 'react-router-dom';
<<<<<<< HEAD
import Home from './pages/home/home.js';
import SearchResult from './pages/search-result/search-results.js';
import PlaceDetails from './pages/place-details/place-details.js';
import About from './pages/about/about.js';
import Advertise from './pages/advertise/advertise.js';
import Privacy from './pages/privacy/privacy.js';
import Contact from './pages/contact/contact.js';
import SelectInterests from './pages/select-interests/select-interests.js';
import Login from './pages/login/login.js';
import PinLocation from './pages/pin-location/pin-location.js';
import PinDetails from './pages/pin-details/pin-details.js';
import PinFeed from './pages/pin-feed/pin-feed.js';
import Notifie from './pages/notification/notification.js';
import Profile from './pages/profile/profile.js';
import Setting from './pages/setting/setting.js';
import Friends from './pages/friends/friends.js';
// import Facebooklogin from '../components/facebook-login/Facebooklogin.js'
import Error from './pages/error/error.js';
=======
import Home from './home';
import SearchResult from './search-results';
import PlaceDetails from './place-details';
import About from './about';
import Advertise from './advertise';
import Privacy from './privacy';
import Contact from './contact';
import SelectInterests from './select-interests';
import Login from './components/LoginPage';
import Signup from './components/SignupPage'
import PinLocation from './pin-location';
import PinDetails from './pin-details';
import PinFeed from './pin-feed';
import Notifie from './notification';
import Profile from './profile';
import Setting from './setting';
import Friends from './friends';
import Facebooklogin from './components/Facebooklogin.js'
import Error from './error';
>>>>>>> f3e73cfc2f977ba9856cfa96dfd039327b136f75

const Router = () => {
    return (
      <div>
      <BrowserRouter>
         <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/SearchResults' component={SearchResult}/>
          <Route path='/PlaceDetails' component={PlaceDetails}/>
          <Route path='/About' component={About}/>
          <Route path='/Advertise' component={Advertise}/>
          <Route path='/Privacy' component={Privacy}/>
          <Route path='/Contact' component={Contact}/>
          <Route path='/SelectInterests' component={SelectInterests}/>
          <Route path='/Login' component={Login}/>
          <Route path='/Signup' component={Signup}/>
          <Route path='/PinLocation' component={PinLocation}/>
          <Route path='/PinDetails' component={PinDetails}/>
          <Route path='/PinFeed' component={PinFeed}/>
          <Route path='/Notifie' component={Notifie}/>
          <Route path='/Profile' component={Profile}/>
          <Route path='/Setting' component={Setting}/>
          <Route path='/Friends' component={Friends}/>
          {/* <Route path="/Facebook" component = {Facebooklogin}/> */}
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
  </div>
    );
  }

export default Router