import React, { lazy, Suspense } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom"

import Header from '@components/header'
import Footer from '@components/footer'

const Home = lazy(() => import('@pages/home'))
const Info = lazy(() => import('@src/pages/info'))
const InfoDetail = lazy(() => import('@pages/info-detail'))
const Solution = lazy(() => import('@pages/solution'))
const Honor = lazy(() => import('@pages/honor'))
const Hire = lazy(() => import('@pages/hire'))
const About = lazy(() => import('@pages/about'))

const Routers = () => {
  let { pathname } = useLocation(); 
  console.log(location)

  document.body.scrollIntoView()

  return (
    <>
      <Header active={pathname.split('/')[1]}></Header>

      <div className="content-wrap">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/honor">
            <Honor />
          </Route>
          <Route path="/hire">
            <Hire />
          </Route>
          <Route path="/info/:infoId">
            <InfoDetail />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/solution">
            <Solution />
          </Route>
          <Route path="/home">
            <Home />
          </Route>

          <Redirect to="/home" />
        </Switch>
      </div>

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
