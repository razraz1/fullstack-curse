// function isString(val){
//     return typeof val ==="string"
// }
// console.log(isString(1))
// console.log(isString('1'))
// console.log(isString(true))
// console.log(isString(null))
// console.log(isString(new String ("1")))


// function isBlank(val){
//    return val ===''
// }
// console.log(isBlank(''))
// console.log(isBlank('1'))


// function stringToArray(str) {
//     let newArr = str.split(' ');
//     return newArr;
// }
// console.log(stringToArray("dob bibi"));


// /**
//  * 
//  * @param {} fn 
//  */

// function not(fn){
//     console.log("wait")
//     setTimeout(fn, 8000)
// }

// function alert(){
//     console.log("go to mamad")
// }
// not(alert)




// function map(transform, collection){
//     const result = [];

//     for(let item of collection){
//         result.push(transform(item))
//     }
//     return result
// }

// const addOne = number => number + 1;

// const result = map(addOne,[1,2,3]);
// console.log(result);


// const addTwo = num => {
//     return num + 2;
//   }
  
// const checkConsistentOutput = (func, val) => {
//   let checkA = val + 2
//   let checkB = func(val)
//   if(checkA==checkB){
//     return checkB
//   }else{
//     return "inconsistent results"
//   }
// }
// console.log(checkConsistentOutput(addTwo,7));
  

//חותך מחרוזת

// const cutString = (str,num) =>{
//     return str.substring(0,num)
// }
// console.log(cutString("razi ras",6));
