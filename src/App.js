import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Navbar from './components/Navbar';
import Newsitem from './components/Newsitem';
import News from './components/News';


export default class App extends Component {




  render() {

    console.log("render function")
    return (

      <>

       <Navbar/>
       <News pageSize={9} country="in" category='general'/>
      </>
    )

  }
}

