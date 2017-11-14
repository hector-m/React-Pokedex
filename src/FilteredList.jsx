import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
   constructor(props) {
       super(props);
       this.state = {
           search: "",
           type: "NormalFireWaterGrassElectricIceGroundFlyingPoisonFightingPsychicDarkRockBugGhostSteelDragonFairy",
           weakness: "NormalFireWaterGrassElectricIceGroundFlyingPoisonFightingPsychicDarkRockBugGhostSteelDragonFairy",
           sort: (a, b) => a.id > b.id
       };
   }
    // Sets the state whenever the user types on the search bar
   onSearch = (event) => {
       this.setState({search: event.target.value.trim().toLowerCase()});
   }

   filterItem = (item) => {
        // Checks if the current search term is contained in this item
        // TODO: Add condition to check item’s type
        var typeMatch = -1;
        var weaknessMatch = -1;
        for (var i = 0; i < item.type.length; i++) {
            if (this.state.type.toLowerCase().includes(item.type[i])) {
                typeMatch = 1;
                break;
            }
        }
        for (i = 0; i < item.weakness.length; i++) {
            if (this.state.weakness.includes(item.weakness[i])) {
                weaknessMatch = 1;
                break;
            }
        }
       return item.name.toLowerCase().search(this.state.search) !== -1 && weaknessMatch !== -1 && typeMatch !== -1;
   }
    /* TODO: Add an event handling method for when an item in dropdown is selected
       Per the DropdownButton documentation, this function should take in an eventKey and
       event
    */


    typeSelect = (eventKey) => {
      this.setState({type: eventKey})
    }

    weaknessSelect = (eventKey) => {
      this.setState({weakness: eventKey})
    }

    sort = (eventKey) => {
        var key;
        if (eventKey === "alph") {
            key = (a, b) => a.name > b.name;
        } else {
            key = (a, b) => a.id > b.id;
        }
        this.setState({sort: key})
    }



    render() {
       return (
            <div className="filter-list">

               <div className="App-header">
                    <h1 className="Logo">POKEDEX</h1>
                    <label className="Search">
                        <h2 className="Title">Search</h2>
                        <input clas="Input" type="text" placeholder="Which Pokemon" onChange={this.onSearch} />
                    </label>

                    <div className="Choices">
                        <label className="Search">
                            <h2 className="Title">Type</h2>
                            <DropdownButton id="typeDropdown" title={"Type"}>
                       <MenuItem eventKey="NormalFireWaterGrassElectricIceGroundFlyingPoisonFightingPsychicDarkRockBugGhostSteelDragonFairy" onSelect={this.typeSelect}>All</MenuItem>
                       <MenuItem eventKey="Normal" onSelect={this.typeSelect}>Normal</MenuItem>
                       <MenuItem eventKey="Fire" onSelect={this.typeSelect}>Fire</MenuItem>
                       <MenuItem eventKey="Water" onSelect={this.typeSelect}>Water</MenuItem>
                       <MenuItem eventKey="Grass" onSelect={this.typeSelect}>Grass</MenuItem>
                       <MenuItem eventKey="Electric" onSelect={this.typeSelect}>Electric</MenuItem>
                       <MenuItem eventKey="Ice" onSelect={this.typeSelect}>Ice</MenuItem>
                       <MenuItem eventKey="Ground" onSelect={this.typeSelect}>Ground</MenuItem>
                       <MenuItem eventKey="Flying" onSelect={this.typeSelect}>Flying</MenuItem>
                       <MenuItem eventKey="Poison" onSelect={this.typeSelect}>Poison</MenuItem>
                       <MenuItem eventKey="Fighting" onSelect={this.typeSelect}>Fighting</MenuItem>
                       <MenuItem eventKey="Psychic" onSelect={this.typeSelect}>Psychic</MenuItem>
                       <MenuItem eventKey="Dark" onSelect={this.typeSelect}>Dark</MenuItem>
                       <MenuItem eventKey="Rock" onSelect={this.typeSelect}>Rock</MenuItem>
                       <MenuItem eventKey="Bug" onSelect={this.typeSelect}>Bug</MenuItem>
                       <MenuItem eventKey="Ghost" onSelect={this.typeSelect}>Ghost</MenuItem>
                       <MenuItem eventKey="Steel" onSelect={this.typeSelect}>Steel</MenuItem>
                       <MenuItem eventKey="Dragon" onSelect={this.typeSelect}>Dragon</MenuItem>
                       <MenuItem eventKey="Fairy" onSelect={this.typeSelect}>Fairy</MenuItem>

                       </DropdownButton>
                        </label>

                        <label className="Search">
                            <h2 className="Title">Weakness</h2>
                            <DropdownButton id="typeDropdown" title={"Weakness"}>
                               <MenuItem eventKey="NormalFireWaterGrassElectricIceGroundFlyingPoisonFightingPsychicDarkRockBugGhostSteelDragonFairy" onSelect={this.weaknessSelect}>All</MenuItem>
                               <MenuItem eventKey="Normal" onSelect={this.weaknessSelect}>Normal</MenuItem>
                               <MenuItem eventKey="Fire" onSelect={this.weaknessSelect}>Fire</MenuItem>
                               <MenuItem eventKey="Water" onSelect={this.weaknessSelect}>Water</MenuItem>
                               <MenuItem eventKey="Grass" onSelect={this.weaknessSelect}>Grass</MenuItem>
                               <MenuItem eventKey="Electric" onSelect={this.weaknessSelect}>Electric</MenuItem>
                               <MenuItem eventKey="Ice" onSelect={this.weaknessSelect}>Ice</MenuItem>
                               <MenuItem eventKey="Ground" onSelect={this.weaknessSelect}>Ground</MenuItem>
                               <MenuItem eventKey="Flying" onSelect={this.weaknessSelect}>Flying</MenuItem>
                               <MenuItem eventKey="Poison" onSelect={this.weaknessSelect}>Poison</MenuItem>
                               <MenuItem eventKey="Fighting" onSelect={this.weaknessSelect}>Fighting</MenuItem>
                               <MenuItem eventKey="Psychic" onSelect={this.weaknessSelect}>Psychic</MenuItem>
                               <MenuItem eventKey="Dark" onSelect={this.weaknessSelect}>Dark</MenuItem>
                               <MenuItem eventKey="Rock" onSelect={this.weaknessSelect}>Rock</MenuItem>
                               <MenuItem eventKey="Bug" onSelect={this.weaknessSelect}>Bug</MenuItem>
                               <MenuItem eventKey="Ghost" onSelect={this.weaknessSelect}>Ghost</MenuItem>
                               <MenuItem eventKey="Steel" onSelect={this.weaknessSelect}>Steel</MenuItem>
                               <MenuItem eventKey="Dragon" onSelect={this.weaknessSelect}>Dragon</MenuItem>
                               <MenuItem eventKey="Fairy" onSelect={this.weaknessSelect}>Fairy</MenuItem>

                       </DropdownButton>
                        </label>

                        <label className="Search">
                            <h2 className="Title">Sort By</h2>
                            <DropdownButton id="typeDropdown" title={"Type"}>
                                <MenuItem eventKey="num" onSelect={this.sort}>Numerical</MenuItem>
                                <MenuItem eventKey="alph" onSelect={this.sort}>Alphabetical</MenuItem>
                            </DropdownButton>
                        </label>
                    </div>

               </div>
               <List className="List" items={this.props.items.sort(this.state.sort).filter(this.filterItem)} />
           </div>
       );
   }
}
export default FilteredList;
