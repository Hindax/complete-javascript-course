'use strict';


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  //const players1 = ['gk', ...game.players[0]];
  //const players2 = ['gk', ...game.players[1]];
  //console.log(players1);


  // first
  const [players1, players2] = game.players;
  console.log(players1,players2);

  // set the first player as goalkeeper:

  const [gk , ...fieldplayers] = players1;
  console.log(gk);

  // create an appray with all players
  const allplayers = [...players1, ...players2];
  console.log(allplayers);

  //create a new team with substitute players.
  const players1Final = ['Thiago', 'Countinho', 'Perisic', ...players1];
  console.log(players1Final);

  //create variables from object team1, draw, team2
  // const { team1, x: draw, team2 } = game.odds;
  // console.log(team1, draw, team2 );

  // 2nd version
  const {
    odds: {team1, x: draw, team2},
  } = game;
  console.log(team1, draw, team2);

 //testing a destruction of an array
  const [, second, ...restOfPlayers ] = game.scored;
  console.log(second, restOfPlayers);

  //Write a function printGoald that receives and arbitrary number of
  // player name and prints each of themn to the console, along with the
  //number of goals that were scored in total



//console.log(`${players.length} goals were scored `);
//console.log(...game.scored);


//  printGoals('Davis', 'Muller', 'Lewandowski', 'Kimmich');
 // printGoals('me', 'you');


  // which team is more likely to win based on the odds
 team1 < team2 &&  console.log('Team 1 is more likely tro win');

 //challenge #2

 //1. loop goal number with player name

 for (const playerGoal of game.scored) console.log(playerGoal);

 for (const [i, GoalPlayer] of game.scored.entries())
 console.log(`Goal ${i + 1} : ${GoalPlayer}`);

 //2.
const odds = Object.values(game.odds);
 console.log(odds);
let average = 0;
for (const odd of odds)
average += odd;
average /= odds.length;
console.log(average);

//3. printing odds:

// game.name.team1 Bayern
// game.nema.team2 Dortmund
//game. odds { }
for ( const [team, odd] of Object.entries(game.odds)) {
const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
console.log(`Odd of victory ${teamStr}: ${odd}`)
};


/*
Let's continue with our football betting app! This time,
we have a map with a log of the events that happened during
 the game. The values are the events themselves, and the
 keys are the minutes in which each event happened
 (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events
 that happened (no duplicates)
2. After the game has finished, is was found that the yellow
 card from minute 64 was unfair. So remove this event from
 the game events log.
3. Print the following string to the console: "An event
happened, on average, every 9 minutes"
(keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console,
 marking whether it's in the first half or second half
 (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log('--------------------------------');

// Mqp to set to array

//let events = [...gameEvents]; // map to array
//let events = new Set([...gameEvents]);
//console.log(events);



//console.log([...gameEvents.values()]);
let events = new Set (
  [...gameEvents.values()]
);
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3

let size = gameEvents.size;
console.log(size);

let averageEvenets =  90 / size;

console.log(`An event happened, on average, every
${averageEvenets} minutes`);

// 4  Loop over the events and log them to the console,
//  marking whether it's in the first half or second half
//  (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// for (const [min, whaHappened] of gameEvents) {
// const half = min >= 45 ? 'FIRST' : 'SECOND';
// console.log(`[${half} HALF] ${min} : ${whaHappened}`);

// };
// console.log('what happened?');

// let minutes = gameEvents.keys();
// console.log(minutes);

//for (minutes <= 45)  console.log('[FIRST HALF]');
//for (minutes >= 45)  console.log('[SECOND HALF]');

for ( const [key, values] of [...gameEvents]) {
let Half = key <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
console.log(`${Half} ${key} : ${values}`
)};

//  let key = [...gameEvents[]];
//  key <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';

//  console.log(key);









//const allplayers = [...game.players];
//console.log(allplayers);
//console.log(allplayers);

//const players1Final = ['a', 'b', 'c', ...players1];
