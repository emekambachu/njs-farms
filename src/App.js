import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../public/assets/css/fontawesome-all.min.css';
import '../public/assets/css/swiper.min.css';
import '../public/assets/css/animate.min.css';
import '../public/assets/css/odometer.min.css';
import '../public/assets/css/jarallax.css';
import '../public/assets/css/magnific-popup.css';
import '../public/assets/css/bootstrap-select.min.css';
import '../public/assets/css/agrikon-icons.css';
import '../public/assets/css/nouislider.min.css';
import '../public/assets/css/nouislider.pips.css';
import '../public/assets/css/main.css';

import '../public/assets/js/jquery-3.5.1.min.js';
import '../public/assets/js/bootstrap.bundle.min.js';
import '../public/assets/js/swiper.min.js';
import '../public/assets/js/jquery.ajaxchimp.min.js';
import '../public/assets/js/jquery.magnific-popup.min.js';
import '../public/assets/js/jquery.validate.min.js';
import '../public/assets/js/bootstrap-select.min.js';
import '../public/assets/js/wow.js';
import '../public/assets/js/odometer.min.js';
import '../public/assets/js/jquery.appear.min.js';
import '../public/assets/js/jarallax.min.js';
import '../public/assets/js/circle-progress.min.js';
import '../public/assets/js/wNumb.min.js';
import '../public/assets/js/nouislider.min.js';
import '../public/assets/js/theme.js';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {LayoutComponent} from "./pages/LayoutComponent";
import {HomeComponent} from "./pages/HomeComponent";
import {AboutComponent} from "./pages/AboutComponent";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<LayoutComponent/>}>
                  <Route
                      path='/'
                      element={<HomeComponent/>}
                  ></Route>
                  <Route
                      path='/about'
                      element={<AboutComponent/>}
                  ></Route>
              </Route>
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App;
