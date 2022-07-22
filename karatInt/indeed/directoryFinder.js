"use strict";
/* Given an array of input strings of:

cd ..
cd .
cd /
cd (directory)

pretend those are inputs into a terminal and you are the terminal. Return the directory you would be in after executing the commands.

For example: ['cd poop', 'cd /', 'cd coolFolder', 'cd secretProjects', 'cd ..', cd evenMoreSecretProjects ]

output: /coolFolder/evenMoreSecretProjects

reason: cd poop goes into the poop directory, cd / returns you to root, cd coolFolder goes into the coolFolder directory, cd secretProjects goes into secretProjects, cd .. moves you up one level, cd evenMoreSecretProjects moves you into evenMoreSecretProjects. */

// ----- SOLUTION ----- //

// i: array of strings representing terminal change directory commands
// o: directory of current folder directory
// c: all commands are valid cd commands only (cd (name), cd /, cd ., cd ..), no invalid filenames provided
// e: empty array

function directoryFinder(commands) {
  // iterate thru input array of stirng commands
  // filter out invalid commands not starting with 'cd'
  // check valid command
  // return to root if '/'
  // return up one level if '..'
  // stay at current level if '.' or same name
  // travel to new directory otherwise
  // return directory
  let cmdArrays = commands.map(command => command.split(' '));
  let validCmds = cmdArrays.filter(cmd => cmd[0] === 'cd');
  let directory = [''];
  // validCmds.forEach(cmd => {
  for (let cmd of validCmds) {
    if (cmd[1] === '/') {
      directory = [''];
    } else if (cmd[1] === '..') {
      directory.pop();
    } else if (cmd[1] === '.' || cmd[1] === directory[directory.length - 1]) {
      continue;
    } else directory.push('/' + cmd[1]);
  }
  return directory.join('');
}

// let folderTraversals = ['cd poop', 'cd /', 'cd coolFolder', 'cd secretProjects', 'cd ..', 'cd evenMoreSecretProjects' ];
// // let folderTraversals = [];
// let result = directoryFinder(folderTraversals);
// console.log('🚀 ~ result', result);