import React, { Component } from 'react';
import Pokedex from '../Pokedex';

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'fire', exp: 62 },
      { id: 7, name: 'Squirtle', type: 'water', exp: 63 },
      { id: 11, name: 'Metapod', type: 'bug', exp: 72 },
      { id: 12, name: 'Buterfree', type: 'flying', exp: 178 },
      { id: 25, name: 'Pickachu', type: 'electric', exp: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', exp: 95 },
      { id: 94, name: 'Gengar', type: 'poison', exp: 225 },
      { id: 133, name: 'Eevee', type: 'normal', exp: 65 },
    ],
  };

  totalExp = hand => {
    let sum = 0;
    for (let i = 0; i < hand.length; i++) {
      sum += hand[i].exp;
    }

    return sum;
  };
  render() {
    let hand1 = [];

    let hand2 = [...this.props.pokemon];

    while (hand1.length < hand2.length) {
      const randIndex = Math.floor(Math.random() * hand2.length);
      const randPokemon = hand2.splice(randIndex, 1)[0];
      hand1 = [...hand1, randPokemon];
      // hand2 = [...hand2.slice(0, randIndex), ...hand2.slice(randIndex + 1)];
    }

    const exp1 = this.totalExp(hand1);
    const exp2 = this.totalExp(hand2);

    return (
      <div>
        <Pokedex pokemon={hand1} totalExp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} totalExp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default Pokegame;
