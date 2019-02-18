import React, {Component } from 'react';
import './App.css';
import Display from './Display' ;
class App extends Component {
    render(){
        return (
            <div className="background">
            <h1 className ='div-class'> My React Form! </h1>
            <button className ='button-app'> Switch users </button>
            <Display name="Mansha" age="20" month="November" />
            <Display name="Ayushee" age="19" month="july" />
            </div>
        );
    }
}
export default App;