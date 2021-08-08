import React from 'react';
import './App.css'
import ClickCounter from './Hoc/ClickCounter';
import HoverCounter from './Hoc/HoverCounter';




class App extends React.Component {
  render(){
  return (
    <div className="App" style={{border:"5px red solid"}}>
    <ClickCounter/>
    <HoverCounter/>
    </div>
    
    );
}
}
export default App;
