import React, { Component } from 'react';
import Pokecard from '../Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  // static defaultProps = {
  //   pokemon: [
  //     { id: 4, name: 'Charmander', type: 'fire', exp: 62 },
  //     { id: 7, name: 'Squirtle', type: 'water', exp: 63 },
  //     { id: 11, name: 'Metapod', type: 'bug', exp: 72 },
  //     { id: 12, name: 'Buterfree', type: 'flying', exp: 178 },
  //     { id: 25, name: 'Pickachu', type: 'electric', exp: 112 },
  //     { id: 39, name: 'Jigglypuff', type: 'normal', exp: 95 },
  //     { id: 94, name: 'Gengar', type: 'poison', exp: 225 },
  //     { id: 133, name: 'Eevee', type: 'normal', exp: 65 },
  //   ],
  // };
  render() {
    const { pokemon, isWinner, totalExp } = this.props;
    const cards = pokemon.map(card => (
      <Pokecard
        key={card.id}
        id={card.id}
        name={card.name}
        type={card.type}
        exp={card.exp}
      />
    ));

    let title;

    if (isWinner) {
      title = <h2 className="Pokedex-winner">Winning Hand</h2>;
    } else {
      title = <h2 className="Pokedex-loser">Losing Hand</h2>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h4>Total Exp: {totalExp}</h4>
        <div className="Pokedex-cards">{cards}</div>
      </div>
    );
  }
}

export default Pokedex;
