export function randomizeNames(players) {

  const namesWithLuckyNumber = players.map(name => ({
    ...name,
    luckyNumber: Math.floor(Math.random() * 1000)
  }))

  const luckyNumbers = namesWithLuckyNumber.map(name => name.luckyNumber).sort();

  return luckyNumbers.map(number => namesWithLuckyNumber
     .find(name => name.luckyNumber === number));
}