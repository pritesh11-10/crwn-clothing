import React from 'react';
import { Switch,Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'
import './pages/homepage/homepage.scss'
import Header from './components/header/header'

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
    </div>
  )
}

export default App;
