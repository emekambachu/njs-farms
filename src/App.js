import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import './assets/css/fontawesome-all.min.css';
// import './assets/css/swiper.min.css';
// import './assets/css/animate.min.css';
// import './assets/css/odometer.min.css';
// import './assets/css/jarallax.css';
// import './assets/css/magnific-popup.css';
// import './assets/css/bootstrap-select.min.css';
// import './assets/css/agrikon-icons.css';
// import './assets/css/nouislider.min.css';
// import './assets/css/nouislider.pips.css';
// import './assets/css/main.css';

// import './assets/js/bootstrap.bundle.min.js';
// import './assets/js/swiper.min.js';
// import './assets/js/jquery.ajaxchimp.min.js';
// import './assets/js/jquery.magnific-popup.min.js';
// import './assets/js/jquery.validate.min.js';
// import './assets/js/bootstrap-select.min.js';
// import './assets/js/wow.js';
// import './assets/js/odometer.min.js';
// import './assets/js/jquery.appear.min.js';
// import './assets/js/jarallax.min.js';
// import './assets/js/circle-progress.min.js';
// import './assets/js/wNumb.min.js';
// import './assets/js/nouislider.min.js';
// import './assets/js/theme.js';

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
