import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom"

import Header from '@components/header'
import Footer from '@components/footer'

// import Home from '@pages/home'
// import Infos from '@pages/infos'
// import Solutions from '@pages/solutions'
// import About from '@pages/about'

const Home = lazy(() => import('@pages/home'))
const Infos = lazy(() => import('@pages/Infos'))
const Solutions = lazy(() => import('@pages/solutions'))
const About = lazy(() => import('@pages/About'))

const Routers = () => {
  let { pathname } = useLocation(); 
  console.log(location)
  return (
    <>
      <Header active={pathname.slice(1)}></Header>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/infos">
          <Infos />
        </Route>
        <Route path="/solutions">
          <Solutions />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Suspense fallback={<div className="text-center"></div>}>
      <Router>
        <Routers />
      </Router>
    </Suspense>
  )
}
