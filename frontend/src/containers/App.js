import React from 'react';
import '../App.css';
import Navbar from '../navbar/Nav'
import Footer from '../footer/Footer'
import {routerConfig} from '../routers'
import {Route} from 'react-router-dom'


function App() {
  return (
    <div className='wrapper'>
      <Navbar/>
    
      {routerConfig.map(route => (<Route path={route.path} exact={route.exact} component={route.component}/>))}
      <Footer/>
    </div>
  );
}

export default App;