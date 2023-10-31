/* eslint-disable react-hooks/rules-of-hooks */
import { Route } from 'react-router-dom'

//Layouts
import RootLayout from '../layouts/rootLayout'
import AuthLayout from '../layouts/authLayout'

//Components
import App from '../App'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import PickLocation from '../pages/PickLocation'
import PollutantsAndPlants from '../pages/PollutantsAndPlants'
import PR from '../pages/PR'
import Plantstore from '../pages/plantstore'

//Authentication
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'
import Plantpage from '../pages/Plantpage'
import Blogs from '../pages/Blogs'

export default function routes() {

  return (
    <>
      <Route path="auth" element={<AuthLayout />}>
        <Route path='login' index element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="location" element={<PickLocation />} />
        <Route path="location/:lat/:lng" element={<PickLocation />} />
        <Route path="pollutionandplants" element={<PollutantsAndPlants />} />
        <Route path="pollutionandplants/:lat/:lng" element={<PollutantsAndPlants />} />
        <Route path="pr" element={<PR />} />
        <Route path="plantstore" element={<Plantstore />} />
        <Route path="plantselect" element={<Plantpage />} />
        <Route path="blogs" element={<Blogs/>} />
      </Route>
    </>
  )
}
