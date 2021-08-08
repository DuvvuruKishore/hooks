import React from 'react';
import './App.css'
import Hello from './Ref/Hello';


class App extends React.Component {
helloRef=React.createRef();

change=()=>{
  this.helloRef.current.changeName("React");
}

  render(){
  return (
    <div className="App" >
    <Hello ref={this.helloRef}/>
    <button onClick={this.change}>change by ref</button>
    </div>
    
    );
}
}
export default App;
