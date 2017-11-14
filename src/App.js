
import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';
import pokemon from './pokemon.json';

class App extends Component {
   render() {
       return (
           <div className="App">

               <FilteredList items={pokemon} />
           </div>
       );
   }
}

export default App;
