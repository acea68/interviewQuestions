"use strict";
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

// ----- SOLUTION ----- //

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
