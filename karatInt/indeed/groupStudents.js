/*
You are a developer for a university. Your current project is to develop a system for students to find courses they share with friends. The university has a system for querying courses students are enrolled in, returned as a list of (ID, course) pairs.

Write a function that takes in a collection of (student ID number, course name) pairs and returns, for every pair of students, a collection of all courses they share.

Sample Input:
*/
// enrollments1 = [
//   ["58", "Linear Algebra"],
//   ["94", "Art History"],
//   ["94", "Operating Systems"],
//   ["17", "Software Design"],
//   ["58", "Mechanics"],
//   ["58", "Economics"],
//   ["17", "Linear Algebra"],
//   ["17", "Political Science"],
//   ["94", "Economics"],
//   ["25", "Economics"],
//   ["58", "Software Design"],
// ]

// // {Linear Algebra: [58, 17]}


// // Sample Output (pseudocode, in any order):

// find_pairs(enrollments1) =>
// {
//   "58,17": ["Software Design", "Linear Algebra"]
//   "58,94": ["Economics"]
//   "58,25": ["Economics"]
//   "94,25": ["Economics"]
//   "17,94": []
//   "17,25": []
// }
/*


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




// console.time('groupStudents1');
// function find_pairs1(enrollments) {

//   // obtain all unique student iDs from input array with corresponding courses
//   let studentMap = {};
//   for (let enrollment of enrollments) {
//     if (!studentMap[enrollment[0]]) {
//       studentMap[enrollment[0]] = [enrollment[1]];
//     } else {
//       studentMap[enrollment[0]].push(enrollment[1]);
//     }
//   }
//   // console.log('🚀 ~ studentMap', studentMap);

//   // obtain all combos of unique student iD pairs
//   // create array
//   // iterate thru mapObj keys and create unique pairs
//   let pairs = {};
//   for (let i = 0; i < Object.keys(studentMap).length; i++) {
//     for (let j = i + 1; j < Object.keys(studentMap).length; j++) {
//       let stId1 = String(Object.keys(studentMap)[i]);
//       let stId2 = String(Object.keys(studentMap)[j]);
//       let stuPair = stId1 + ',' + stId2;

//       let student1Courses = studentMap[stId1];
//       let student2Courses = studentMap[stId2];
//       let matchingCourses = [];
//       for (let i = 0; i < student1Courses.length; i++) {
//         for (let j = 0; j < student2Courses.length; j++) {
//           if (student1Courses[i] === student2Courses[j]) {
//             matchingCourses.push(student2Courses[j]);
//           }
//         }
//       }
//       pairs[stuPair] = matchingCourses;
//     }
//   }
//   // console.log('🚀 ~ pairs', pairs);

//   // find shared courses for each pair of students in pairs Obj
//   // for every stuPair
//   // first, obtain all courses from one of the stu in pair
//   // second, obtain all courses from 2nd stu in pair
//   // compare both courses arrays and find courses in common
//   // take stuPair and append common courses array and assign to it as a value to current stuPair
//   return pairs
// }

// console.timeEnd('groupStudents1');

////////////////////////////////////

// console.time('groupStudents2');
// function find_pairs2(enrollments) {

//   // obtain all unique student iDs from input array with corresponding courses
//   let studentMap = {};
//   for (let enrollment of enrollments) {
//     if (!studentMap[enrollment[0]]) {
//       studentMap[enrollment[0]] = [enrollment[1]];
//     } else {
//       studentMap[enrollment[0]].push(enrollment[1]);
//     }
//   }

//   // obtain all combos of unique student iD pairs
//   let pairs = {};
//   for (let i = 0; i < Object.keys(studentMap).length; i++) {
//     for (let j = i + 1; j < Object.keys(studentMap).length; j++) {

//       // map smaller of the two stu courses list to an obj
//       let smallerObj = {};
//       let stId1 = String(Object.keys(studentMap)[i]);
//       let stId2 = String(Object.keys(studentMap)[j]);
//       let stuPair = stId1 + ',' + stId2;

//       // create array of common courses from each student pair
//       let student1Courses = studentMap[stId1];
//       let student2Courses = studentMap[stId2];

//       // check for smaller student course list and get that studentID
//       let smaller, larger;
//       student1Courses.length <= student2Courses.length ?
//         (smaller = student1Courses,
//           larger = student2Courses) :
//         (smaller = student2Courses,
//           larger = student1Courses);
//       for (let i = 0; i < smaller.length; i++) {
//         if (!smallerObj[smaller[i]]) {
//           smallerObj[smaller[i]] = smaller[i];
//         }
//       }
//       // iterate thru larger and compare elem to keys of smallerObj to create combined classes array
//       let matchingCourses = [];
//       for (let course of larger) {
//         if (!!smallerObj[course]) {
//           matchingCourses.push(course);
//         }
//       }
//       pairs[stuPair] = matchingCourses;
//     }
//   }

//   return pairs
// }

// console.timeEnd('groupStudents2');

////////////////////////////////////

console.time('groupStudents3');
function find_pairs3(enrollments) {
  // create map of courses and corresponding students enrolled in each course
  let courseMap = {};
  let studentMap = {};
  for (let enrollment of enrollments) {
    if (!courseMap[enrollment[1]]) {
      courseMap[enrollment[1]] = new Set();
    }
    courseMap[enrollment[1]].add(enrollment[0]);
    if (!studentMap[enrollment[0]]) {
      studentMap[enrollment[0]] = new Set();
    }
    studentMap[enrollment[0]].add(enrollment[1]);
  }

  // create all combos of studentPairs
  let studentPairs = {};
  for (let i = 0; i < Object.keys(studentMap).length - 1; i++) {
    let stu1 = Object.keys(studentMap)[i];
    for (let j = i + 1; j < Object.keys(studentMap).length; j++) {
      let stu2 = Object.keys(studentMap)[j];
      let currPair = stu1 + ',' + stu2;
      if (!studentPairs[currPair]) { // if stuPair does not exist
        // create new student pair
        studentPairs[currPair] = new Set();
      }
      // iterate thru first student's classes and compare to 2nd students'
      for (let course of studentMap[stu1]) {
        // add to stuPairs set if class is found in stu2's classes
        if (courseMap[course].has(stu2)) {
          studentPairs[currPair].add(course);
        }
      }
    }
  }
  return studentPairs
}

console.timeEnd('groupStudents3');

// console.log('🚀 ~ find_pairs ~ find_pairs(enrollments)', find_pairs1(enrollments1));
// console.log('🚀 ~ find_pairs ~ find_pairs(enrollments)', find_pairs2(enrollments1));
console.log('🚀 ~ find_pairs ~ find_pairs(enrollments)', find_pairs3(enrollments1));
// console.log('🚀 ~ find_pairs ~ find_pairs(enrollments)', find_pairs(enrollments2));
// console.log('🚀 ~ find_pairs ~ find_pairs(enrollments)', find_pairs(enrollments3));


























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
