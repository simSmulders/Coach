import { useState, useEffect } from 'react';
import { Flex, Button, Heading, ListItem, List } from '@chakra-ui/react';
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
    <Flex direction="column" alignItems="center">
      <Flex direction="column" alignItems="center">
        <Heading>Team A:</Heading>
          {teamA.map(player => (
            <List>
              <ListItem key={player.id}>{player.firstName} {player.lastName}</ListItem>
            </List>
          ))}
        <Heading>Team B:</Heading>
        {teamB.map(player => (
          <List>
            <ListItem key={player.id}>{player.firstName} {player.lastName}</ListItem>
          </List>
        ))}
      </Flex>
      <br></br>
      <Flex direction="column" alignItems="center">
          <Button onClick={onChangeTeams}>Randomize Teams</Button>
      </Flex>
    </Flex>
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