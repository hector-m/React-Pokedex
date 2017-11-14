import React, { Component } from 'react';
/*
 The list component will take the list of items passed in as a property
 and create an HTML list with those item. In this example, we are passing in the
 filtered produce list, but this component can be used for other types of items
  as long as it has a name.
*/
class Typing extends Component {

    renderTyping() {
        /*
           Javascript map will let you iterate and modify each item in a list.
           In this example, we are changing each item
           (ex. {name: "Apple", type: "Fruit"}) into a HTML list element.
        */
        var color1;
        var types;
        if (this.props.type1 === "normal") {
                color1 = "#A8A77A";
            } else if (this.props.type1 === "fire") {
                color1 = "#EE8130";
            } else if (this.props.type1 === "water") {
                color1 = "#6390F0";
            } else if (this.props.type1 === "electric") {
                color1 = "#F7D02C";
            } else if (this.props.type1 === "grass") {
                color1 = "#7AC74C";
            } else if (this.props.type1 === "ice") {
                color1 = "#96D9D6";
            } else if (this.props.type1 === "fighting") {
                color1 = "#C22E28";
            } else if (this.props.type1 === "poison") {
                color1 = "#A33EA1";
            } else if (this.props.type1 === "ground") {
                color1 = "#E2BF65";
            } else if (this.props.type1 === "flying") {
                color1 = "#A98FF3";
            } else if (this.props.type1 === "psychic") {
                color1 = "#F95587";
            } else if (this.props.type1 === "bug") {
                color1 = "#A6B91A";
            } else if (this.props.type1 === "rock") {
                color1 = "#B6A136";
            } else if (this.props.type1 === "ghost") {
                color1 = "#735797";
            } else if (this.props.type1 === "dragon") {
                color1 = "#6F35FC";
            } else if (this.props.type1 === "dark") {
                color1 = "#705746";
            } else if (this.props.type1 === "steel") {
                color1 = "#B7B7CE";
            } else if (this.props.type1 === "fairy") {
                color1 = "#D685AD";
            }
        types = <div style={{backgroundColor: color1, color: "White", borderRadius: "10px"}} key={this.props.type1}>{this.props.type1}</div>;
        if (this.props.type2 !== undefined) {
            var color2;
            if (this.props.type2 === "normal") {
                    color2 = "#A8A77A";
                } else if (this.props.type2 === "fire") {
                    color2 = "#EE8130";
                } else if (this.props.type2 === "water") {
                    color2 = "#6390F0";
                } else if (this.props.type2 === "electric") {
                    color2 = "#F7D02C";
                } else if (this.props.type2 === "grass") {
                    color2 = "#7AC74C";
                } else if (this.props.type2 === "ice") {
                    color2 = "#96D9D6";
                } else if (this.props.type2 === "fighting") {
                    color2 = "#C22E28";
                } else if (this.props.type2 === "poison") {
                    color2 = "#A33EA1";
                } else if (this.props.type2 === "ground") {
                    color2 = "#E2BF65";
                } else if (this.props.type2 === "flying") {
                    color2 = "#A98FF3";
                } else if (this.props.type2 === "psychic") {
                    color2 = "#F95587";
                } else if (this.props.type2 === "bug") {
                    color2 = "#A6B91A";
                } else if (this.props.type2 === "rock") {
                    color2 = "#B6A136";
                } else if (this.props.type2 === "ghost") {
                    color2 = "#735797";
                } else if (this.props.type2 === "dragon") {
                    color2 = "#6F35FC";
                } else if (this.props.type2 === "dark") {
                    color2 = "#705746";
                } else if (this.props.type2 === "steel") {
                    color2 = "#B7B7CE";
                } else if (this.props.type2 === "fairy") {
                    color2 = "#D685AD";
                }
                types =
                    <div>
                        <div style={{backgroundColor: color1, color: "White", borderRadius: "10px", marginBottom: "10px"}} key={this.props.type1}>{this.props.type1}</div>
                        <div style={{backgroundColor: color2, color: "White", borderRadius: "10px"}} key={this.props.type2}>{this.props.type2}</div>
                    </div>;

                }
        return types;
    }



    render() {
        return (
            <ul style={{textAlign: "center", width: "75%"}}>
                {this.renderTyping()}
            </ul>
        );
    }

}


export default Typing;
