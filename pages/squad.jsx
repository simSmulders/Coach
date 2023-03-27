import { useState, useEffect } from 'react';
import { randomizeNames } from '../utils';
// import { names } from '../public/playerData/names';

export default function Squad({ players }) {

  const [ teamA, setTeamA ] = useState([]);
  const [ teamB, setTeamB ] = useState([]);

  const onChangeTeams = () => {;

    const namesRandomOrder = randomizeNames(players);

    setTeamA(namesRandomOrder.filter((_, index) => index < 3))
    setTeamB(namesRandomOrder.filter((_, index) => index >= 3))
  };

  return (
    <>
      <div>
        <h1>Team A:</h1>
          {teamA.map(player => (
            <li key={player.id}>{player.firstName} {player.lastName}</li>
          ))}
        <h1>Team B:</h1>
        {teamB.map(player => (
          <li key={player.id}>{player.firstName} {player.lastName}</li>
        ))}
      </div>
      <br></br>
      <div>
          <button onClick={onChangeTeams}>Randomize Teams</button>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3001/players')
  const { data: players } = await res.json();

  return {
    props: {
      players
    }
  }
}