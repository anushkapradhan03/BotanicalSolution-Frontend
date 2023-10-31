import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from 'react-router-dom'

// import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

import GLightbox from 'glightbox';

// Routes import
import Routes from './router/routes.jsx'

// Stylesheets
import './index.css'
import './assets/css/font.css'
import './assets/scss/styles.scss'

import 'leaflet/dist/leaflet.css'

// Import all of Bootstrap's JS
// eslint-disable-next-line no-unused-vars
import 'bootstrap'


import AOS from 'aos';
import 'aos/dist/aos.css';

import axios from 'axios';


//Hooks
import { useNavigation } from 'react-router-dom'

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

// init Swiper:
// Swiper();

// init GLightbox:
GLightbox({
  selector: '.glightbox',
  touchNavigation: true,
  autoplayVideos: true
});

const router = createBrowserRouter(
  createRoutesFromElements(Routes())
);

window.onload = function () {
  axios.get('http://127.0.0.1:8000/api/get_csrf_token/')
    .then(response => {
      const csrfToken = response.data.csrfToken;
      localStorage.setItem('csrfToken', csrfToken);
      // Include the CSRF token in subsequent requests
      axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
      return csrfToken;
    }).then((csrfToken) => {
      console.log('CSRF token set: ' + csrfToken);
      const navigation = useNavigation()
      navigation.navigate('/auth/login')
    }).catch((error) => {
      console.log(error);
    });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);