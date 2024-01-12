function fibonacci(number) {
  let x = 0;
  let y = 1;

  //iterate from 2 to number
  for (let i = 2; i <= number; i++) {
    //calculate the next fibonacci number
    const z = x + y;

    //update the previous and current fibonacci numbers
    x = y; //change 0 to 1
    y = z; //change number 1 to the cooler 1
    console.log(y);
  }
  return Y;
}

fibonacci(10);

//for loop (accepts 3 inputs)
for (let i = 0; i < 7; i++) {
  console.log(i);
}

//while loop (runs until number reaches 0)
let money = 100;
while (money > 0) {
  console.log("let it ride", money);
  money--;
}

//linearSearch list
const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29,
];

function linearSearch(num, arr) {
  let found;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      found = arr[1];
      break;
    } else {
      console.log("Still looking");
    }
  }
  if (!found) {
    console.log("sorry I couldn't find that");
  }
  console.log(found);
  return found;
}
linearSearch(701, numsArr);

//
const Gabe = {
  name: "Gabe", //string
  age: 15, //number
  isCool: false, //boolean
};
/* console.log(Gabe.name[0]) //console.logs the letter "G" */
//for loop good for casino question
for (let i = 0; i < Gabe.name.length; i++) {
  //can cycle through characters of a string
  console.log(Gabe.name[i]);
}

while (i < Gabe.name.length) {
  console.log(Gabe.name[i]);
  i++;
}

function needle(name, search) {
  /*     if(name.includes(search)){ */
  if (name === search) {
    ///always use 3x =
    return true;
  } else {
    return false;
  }
}
console.log(needle(Gabe.name, "Gabe")); //result is true if correct letters, size, + order
console.log(needle(1, "1"));
console.log(1 + "1");
/* 
  function sortString(name){
      let x = [...Gabe.name].sort(); //... is a spread operator
      console.log(x)
       let x = [1, 2, 3]
      let y = [4, 5, 6]
      /let z = [...x, ...y] /
  let z = { ...x };
  console.log(z);
  }  */
sortString(Gabe.name);
function remove(name) {
  let x = [...name];
  x.splice(5); //removes element -  everything after 5 gets cut off // "(-1)" cuts off only last digit
  x.pop(); //removes last element, same as (-1)
  x.splice(0, 1); //removes just the first one
  x.splice(start, deleteCount, item1, item2); //
  console.log(x);
}
remove(Gabe.name);

// answers
//#1 two strings s + t

let findDiff = function (s, t) {
  let sortS = [...s].sort();
  let sortT = [...t].sort();
  for (let i = 0; i < sortT.length; i++) {
    /*       if (sortT[i] i != ) */
  }
};

//
let mergeFun = function (str1, str2) {
  let merged = "";
  let distance = Math.max(str1.length, str2.length);
  for (let i = 0; i < distance; i++) {
    if (i < str1.length) {
      merged = merged + str2[i];
    }
  }
  return merged;
};

//monotonic
let isMono = function (arr) {
  let direction = 0;
  for (let i = 1; i < arr.lenght; i++) {
    if (arr[i] > arr[i - 1]) {
      if (direction === 0) {
        direction = 1;
      } else if (direction === -1) {
        return dalse;
      }
    } else if (arr[i] < arr[i - 1]) {
      if (direction === 0) {
        direction = -1;
      } else if (direction === 1) {
        return false;
      }
    }
  }
  return true;
};
