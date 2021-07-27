import React , { useState } from 'react';
import './App.css';
import { Route , Switch } from 'react-router-dom'
import Main from './Main';
import Head from './Head';

const App = () => {

        return ( <>

<Switch> 
  <Route exact path='/' component={Head} />   
  <Route exact path='/main' component={Main} /> 
</Switch> 

       </>);
        }
        export default App;