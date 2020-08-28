import React, { Component } from 'react';
import './Pokecard.css';

// const POKE_API =
//   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail';

class Pokecard extends Component {
  padToThree = num => {
    let numString = num.toString();
    while (numString.length < 3) {
      numString = '0' + numString;
    }
    return numString;
  };

  render() {
    const { id, name, type, exp } = this.props;
    const imageSrc = `${POKE_API}/${this.padToThree(id)}.png`;
    const card = (
      <div className="Pokecard" key={id}>
        <h2 className="Pokecard-name">{name}</h2>
        <div className="Pokecard-image">
          <img src={imageSrc} alt={name} />
        </div>
        <div className="Pokecard-data">Type: {type}</div>
        <div className="Pokecard-data">EXP: {exp}</div>
      </div>
    );
    return <div>{card}</div>;
  }
}

export default Pokecard;
