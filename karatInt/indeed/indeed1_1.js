"use strict";
// -----------------
// PROMPT #1
// -----------------

/*
You are in charge of a display advertising program. Your ads are displayed on websites all over the internet. You have some CSV input data that counts how many times that users have clicked on an ad on each individual domain. Every line consists of a click count and a domain name, like this:

counts = [ "900,google.com",
     "60,mail.yahoo.com",
     "10,mobile.sports.yahoo.com",
     "40,sports.yahoo.com",
     "300,yahoo.com",
     "10,stackoverflow.com",
     "20,overflow.com",
     "5,com.com",
     "2,en.wikipedia.org",
     "1,m.wikipedia.org",
     "1,mobile.sports",
     "1,google.co.uk"]

Write a function that takes this input as a parameter and returns a data structure containing the number of clicks that were recorded on each domain AND each subdomain under it. For example, a click on "mail.yahoo.com" counts toward the totals for "mail.yahoo.com", "yahoo.com", and "com". (Subdomains are added to the left of their parent domain. So "mail" and "mail.yahoo" are not valid domains. Note that "mobile.sports" appears as a separate domain near the bottom of the input.)

Sample output (in any order/format):

calculateClicksByDomain(counts) =>
com:                     1345
google.com:              900
stackoverflow.com:       10
overflow.com:            20
yahoo.com:               410
mail.yahoo.com:          60
mobile.sports.yahoo.com: 10
sports.yahoo.com:        50
com.com:                 5
org:                     3
wikipedia.org:           3
en.wikipedia.org:        2
m.wikipedia.org:         1
mobile.sports:           1
sports:                  1
uk:                      1
co.uk:                   1
google.co.uk:            1

n: number of domains in the input
(individual domains and subdomains have a constant upper length)
*/

const counts = [
  "900,google.com",
  "60,mail.yahoo.com",
  "10,mobile.sports.yahoo.com",
  "40,sports.yahoo.com",
  "300,yahoo.com",
  "10,stackoverflow.com",
  "20,overflow.com",
  "5,com.com",
  "2,en.wikipedia.org",
  "1,m.wikipedia.org",
  "1,mobile.sports",
  "1,google.co.uk"
];

// i: array with string elements representing pair: number of clicks and domain name
// o: data structure presenting # clicks for each domain and subdomain
// c: symbols allowed, no negative # of clicks provided
// e: valid domains and subdomains only, check for empty input array

// let domainClicks = (arr) => {
//   // iterate thru arr
//   // create map obj containing subdomains and keys & aggregate clicks as values
//   // split each element into parsed # and domain
//   // nested: iterate thru each (sub)domain create map for each (sub)domain
//   // cumulatively add # to each (sub)domain encountered
//   // continue process for each element in input arr
//   // return data structure containing # of aggregate clicks and subdomain
//   let totalClicks = {};
//   arr.forEach(elem => {
//     let website = elem.split(',');
//     let clicks = parseInt(website[0]);
//     let subdomains = website[1].split('.');
//     let domainName = '';
//     for (let i = subdomains.length - 1; i >= 0; i--) {
//       domainName = subdomains[i] + domainName;
//       if (!totalClicks[domainName]) {
//         totalClicks[String(domainName)] = clicks;
//       } else {
//         totalClicks[String(domainName)] += clicks;
//       }
//       if (i - 1 >= -1) {
//         domainName = '.' + domainName
//       }
//     }
//   })
//   console.log(Object.keys(totalClicks))
//   return totalClicks;
// }

// console.log(domainClicks(counts));
// time: 30 minutes even (30:03)

// -----------------
// PROMPT #2
// -----------------

/*

Suppose we have an unsorted log file of accesses to web resources. Each log entry consists of an access time, the ID of the user making the access, and the resource ID.

The access time is represented as seconds since 00:00:00, and all times are assumed to be in the same day.

Return an object with the earliest time and latest time a user accessed any resource (max and min time)

const logs1 = [
  ["58523", "user_1", "resource_1"],
  ["62314", "user_2", "resource_2"],
  ["54001", "user_1", "resource_3"],
  ["200", "user_6", "resource_5"],
  ["215", "user_6", "resource_4"],
  ["54060", "user_2", "resource_3"],
  ["53760", "user_3", "resource_3"],
  ["58522", "user_22", "resource_1"],
  ["53651", "user_5", "resource_3"],
  ["2", "user_6", "resource_1"],
  ["100", "user_6", "resource_6"],
  ["400", "user_7", "resource_2"],
  ["100", "user_8", "resource_6"],
  [ "54359", "user_1", "resource_3"],
];

// const logs2 = [
//     ["300", "user_1", "resource_3"],
//     ["599", "user_1", "resource_3"],
//     ["900", "user_1", "resource_3"],
//     ["1199", "user_1", "resource_3"],
//     ["1200", "user_1", "resource_3"],
//     ["1201", "user_1", "resource_3"],
//     ["1202", "user_1", "resource_3"],
// ];

// const logs3 = [
//     ["300", "user_10", "resource_5"],
// ];

      Example Output with logs1 as input:

      {
  user_1: [ 54001, 58523 ],
  user_2: [ 54060, 62314 ],
  user_6: [ 2, 215 ],
  user_3: [ 53760, 53760 ],
  user_22: [ 58522, 58522 ],
  user_5: [ 53651, 53651 ],
  user_7: [ 400, 400 ],
  user_8: [ 100, 100 ]
}

*/

const logs1 = [
  ["58523", "user_1", "resource_1"],
  ["62314", "user_2", "resource_2"],
  ["54001", "user_1", "resource_3"],
  ["200", "user_6", "resource_5"],
  ["215", "user_6", "resource_4"],
  ["54060", "user_2", "resource_3"],
  ["53760", "user_3", "resource_3"],
  ["58522", "user_22", "resource_1"],
  ["53651", "user_5", "resource_3"],
  ["2", "user_6", "resource_1"],
  ["100", "user_6", "resource_6"],
  ["400", "user_7", "resource_2"],
  ["100", "user_8", "resource_6"],
  ["54359", "user_1", "resource_3"],
];

// i: arrays of elements representing a user, time loged in using a specific resource
// o: object with user and their respective min & max time logged using a resource
// c: only positive values for time (in sec) from midnight (0000)
// e: inupt is single user only, input is empty, input only has one logged entry


function findTimesAnyResources(logs) {
  let logMap = {};
  for (let log of logs) {
    let time = parseInt(log[0]);
    let user = log[1]
    if (!logMap[user]) { // user does not exist
      logMap[user] = [time, time];
    } else { // user exists
      if (time >= logMap[user][1]) {
        logMap[user][1] = time;
      } else if (time < logMap[user][0]) {
        logMap[user][0] = time;
      }
    }
  }
  return logMap;
}

// function findTimesWithResources(logs) {
//   let logMap = {};
//   for (let log of logs) {
//     if (!logMap[log[1]]) { // user does not exists

//       logMap[log[1]] = { [log[2]] : [log[0], log[0]] };
//     } else { // user exists
//       if (!logMap[log[1]][log[2]]) { // user resource does not exist
//         logMap[log[1]][log[2]] = [log[0], log[0]];
//       } else { // resource exists corresponding to user
//         if (log[0] >= logMap[log[1]][log[2]][1]) {
//           logMap[log[1]][log[2]][1] = log[0];
//         } else if (log[0] < logMap[log[1]][log[2]][0]) {
//           logMap[log[1]][log[2]][0] = log[0];
//         }
//       }
//     }
//   }
//   return logMap;
// }

// console.log(findTimesAnyResources(logs1));

// --- SOLUTION ---

// function findTimes (times) {
//   let result = {};

//   for(let i = 0; i < times.length; i++) {
//     let currentUser = times[i][1];
//     let currentTime = parseInt(times[i][0]);

//     // console.log('currentUser:', currentUser);

//     if(result[currentUser] === undefined) {
//       result[currentUser] = [currentTime, currentTime];
//     } else {
//       let lowestTime = result[currentUser][0];
//       let highestTime = result[currentUser][1];

//       if(currentTime > highestTime) {
//         result[currentUser][1] = currentTime;

//       } else if(currentTime < lowestTime) {
//         result[currentUser][0] = currentTime;
//       }
//     }
//   }

//   // console.log(result)


//   return result;
// }

// console.log(findTimes(logs1));

// -----------------
// PROMPT #3
// -----------------

/*
You are a developer for a university. Your current project is to develop a system for students to find courses they share with friends. The university has a system for querying courses students are enrolled in, returned as a list of (ID, course) pairs.

Write a function that takes in a collection of (student ID number, course name) pairs and returns, for every pair of students, a collection of all courses they share.


Sample Input:

enrollments1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],
]

{Linear Algebra: [58, 17]}


Sample Output (pseudocode, in any order):

find_pairs(enrollments1) =>
{
  "58,17": ["Software Design", "Linear Algebra"]
  "58,94": ["Economics"]
  "58,25": ["Economics"]
  "94,25": ["Economics"]
  "17,94": []
  "17,25": []
}



Additional test cases:

Sample Input:

enrollments2 = [
  ["0", "Advanced Mechanics"],
  ["0", "Art History"],
  ["1", "Course 1"],
  ["1", "Course 2"],
  ["2", "Computer Architecture"],
  ["3", "Course 1"],
  ["3", "Course 2"],
  ["4", "Algorithms"]
]



Sample output:

find_pairs(enrollments2) =>
{
  "1,0":[]
  "2,0":[]
  "2,1":[]
  "3,0":[]
  "3,1":["Course 1", "Course 2"]
  "3,2":[]
  "4,0":[]
  "4,1":[]
  "4,2":[]
  "4,3":[]
}

Sample Input:
enrollments3 = [
  ["23", "Software Design"],
  ["3", "Advanced Mechanics"],
  ["2", "Art History"],
  ["33", "Another"],
]


Sample output:

find_pairs(enrollments3) =>
{
  "23,3": []
  "23,2": []
  "23,33":[]
  "3,2":  []
  "3,33": []
  "2,33": []
}

All Test Cases:
find_pairs(enrollments1)
find_pairs(enrollments2)
find_pairs(enrollments3)

Complexity analysis variables:

n: number of student,course pairs in the input
s: number of students
c: total number of courses being offered (note: The number of courses any student can take is bounded by a small constant)
*/

const enrollments1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"]
];

const enrollments2 = [
  ["0", "Advanced Mechanics"],
  ["0", "Art History"],
  ["1", "Course 1"],
  ["1", "Course 2"],
  ["2", "Computer Architecture"],
  ["3", "Course 1"],
  ["3", "Course 2"],
  ["4", "Algorithms"]
];

const enrollments3 = [
  ["23", "Software Design"],
  ["3", "Advanced Mechanics"],
  ["2", "Art History"],
  ["33", "Another"]
];





// --- SOLUTION ---

// //helper function to group students inside the classNames
// function groupStudentsWithCourses(enrollments) {
//   let classesAndStudents = {};


//   for(let i = 0; i < enrollments.length; i++) {
//     let currentClass = enrollments[i][1];
//     let currentStudent = enrollments[i][0];

//     if(classesAndStudents[currentClass] === undefined) {
//       classesAndStudents[currentClass] = [currentStudent];
//     } else {
//       classesAndStudents[currentClass].push(currentStudent);
//     }
//   }


//   return classesAndStudents;

// }

// function groupStudentsWithMultipleCourses(enrollments) {
//   let coursesAndStudents = groupStudentsWithCourses(enrollments);
//   let coursesAndStudentsKeys = Object.keys(coursesAndStudents);


//   for(let i = 0; i < coursesAndStudentsKeys.length; i++) {
//     let currentCourse = coursesAndStudentsKeys[i];
//     let currentStudents = coursesAndStudents[currentCourse];

//     for(let j = 0; i < currentStudents.length; j++) {

//     }


//     console.log(currentCourse);
//     console.log(currentStudents);
//   }
// }

// groupStudentsWithMultipleCourses(enrollments1);

// console.log('ran')

// -----------------
// PROMPT #4
// -----------------

// Given a list of separated words, make every third word uppercase and make the rest of the words lower case

// i: list of separated words
// o: return list of words with every third word in uppercase
// e: empty list
// c: input list in array format? ...args format? string?

function upperCaseThirdWord(listOfWords) {
  // assume input is string
  let input = listOfWords.split(' ');
  for (let i = 2; i < input.length; i += 3) {
    input[i] = input[i].toUpperCase();
  }
  return input.join(' ');
}

// console.log(upperCaseThirdWord('this is An Input STRING thing.. poop'));

// ----- SOLUTION ----- //

// const makeThirdUpperCase = function (inputString) {
//   let stringArray = inputString.split(' ');

//   for (let i = 0; i < stringArray.length; i++) {
//     if ((i + 1) % 3 === 0 && i !== 0) {
//       stringArray[i] = stringArray[i].toUpperCase();
//     } else {
//       stringArray[i] = stringArray[i].toLowerCase();
//     }
//   }

//   return stringArray.join(' ');
// };

// console.log(makeThirdUpperCase('this is An Input STRING thing.. poop'));

// -----------------
// PROMPT #5
// -----------------

/* Given an input string s, return the number of times there are 3 unique characters in a row without repeats.
For example:
s='abcaa'
output = 2
reason: abc are unique and non-repeating. bca are unique and non-repeating. caa has a repeating a.
*/

// ----- SOLUTION ----- //

// i: string
// o: integer representing number of times a unique substring of characters are encountered
// c: symbols, spaces and numbers included (not only letters)
// e: empty string, repeated chars,

function threeUniques(string) {
  // create counter
  // iterate with two pointers
  // left pointer starts main iteration until last three chars
  // right pointer iterates three chars are a time from left pointer
  // when right char iterates, create new map
  // if map length is three, increment counter, otherwise, continue outside loop
  // return counter
  let counter = 0;
  for (let left = 0; left < string.length - 2; left++) {
    let map = {};
    for (let right = left; right < left + 3; right++) {
      if (!map[string[right]]) map[string[right]] = 1;
      else map[string[right]] += 1;
    }
    if (Object.keys(map).length === 3) counter += 1;
  }
  return counter
}

// console.log(threeUniques('abcaa'))

// -----------------
// PROMPT #6
// -----------------

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