const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

/*
1/ Generate random int between 0 and 100 (Math API MDN)
2/ Ask for a number and log smaller, bigger or found
3/ Ask the question again
4/ Store each try in an array and show the previous tries
before each question (check Array on MDN)
5/ Log an error if the answer is not a number
*/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const randomInt = getRandomIntInclusive(0, 100);
const tries = [];

function play() {
  if (tries.length) {
    console.log('You already tried : ' + tries.join(' - '));
  }

  rl.question('Which number is it ? ', (answer) => {
    const typedInt = Number.parseInt(answer);

    if (Number.isNaN(typedInt)) {
      console.log('Error : you have to type integers');
      return play();
    }

    tries.push(typedInt);

    if (typedInt < randomInt) {
      console.log('Too small');
      return play();
    }

    if (typedInt < randomInt) {
      console.log('Too big');
      return play();
    }

    console.log('Won');
    rl.close();
  });
}

play();


