import React from 'react';
import './App.css';
import {AppContext} from "./Test/Context"
import Test from './Test/Test';
import Test2 from './Test/Test2';



class App extends React.Component {
  render(){
  return (
    <AppContext>
    <Test/>
    <Test2/>
    </AppContext>
    
    );
}
}
export default App;
