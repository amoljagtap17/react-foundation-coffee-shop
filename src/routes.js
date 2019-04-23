import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import $ from 'jquery'
import 'foundation-sites'

import Header from 'components/header/Header'

import Home from 'pages/Home'

const Routes = () => {

  useEffect(() => {
    console.log('useEffect called!')
    $(document).foundation()
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter >
  )
}

export default Routes
