// recursion drills checkpoint

// recursion is a concept
// recursive algorith has two parts (base/general case)
// base case is when to stop
// general case is the function calling itself

//counting sheep
function countingSheep(num){
  //base case
  if (num === 0){
    console.log('All sheep jumped over the fence');
    return;
  }
  //general case
  console.log(`${num}: Another sheep jumps over the fence`);
  countingSheep(num - 1);
}

countingSheep(3);

//power calculator
function powerCalculator(base, exponent){
  if (exponent < 0){
    console.log('exponent should be >= 0');
    return;
  }

  console.log(Math.pow(base, exponent));
  return;
}
powerCalculator(10,2);
powerCalculator(10, -1);

//reverse string
function reverseString(string){
  let splitString = string.split('');
  let reverseArray = splitString.reverse();

  let joinArray = reverseArray.join('');
  console.log(joinArray);
  return;
}

reverseString('hello');

//nth Triangular Number
function triNumber(num){
  return num + triNumber(num-1);
}
triNumber(4);