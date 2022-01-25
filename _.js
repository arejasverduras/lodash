const _ = {
  clamp (number,lower,upper) {
     let lowerbound = Math.max(number,lower);
     let clampedValue = Math.min(lowerbound,upper);
     return clampedValue;
  },
  inRange (number,start,end){
    let newStart;
    let newEnd;
    if (!end){
      newEnd = start;
      newStart = 0;
      //console.log([newStart,newEnd]);
      } else if 
        (start > end) {
          newEnd = start;
          newStart = end;
        } else {
          newStart = start;
          newEnd = end;
        };
      if (number < newStart || number >= newEnd){
          return false;
      } else {
        return true;
      }
      
  },
  words (string,pattern) {
    if (pattern) {
      p = pattern;
    } else {
      p = " ";
    }
    let array = string.split(`${p}`);
    return array;
  },
  pad(string, length){
    if (length <= string.length) {
      return string;
    }
    let char = " ";
    let firstHalveN = Math.floor((length-string.length)/2); 
    let secondHalveN = Math.ceil((length-string.length)/2);
    let paddedString = `${char.repeat(firstHalveN)}${string}${char.repeat(secondHalveN)}`
    return paddedString;
  },
  has (object,key){

    if (object[key] !== undefined){
      return true; 
    } else {
      return false;
    };
   
    return hasValue(object,key);
  },
  invert(object){
    let invertedObject = {};
    for (let key in object){
      let newKey = object[key]
      invertedObject[newKey] = key;
    }
    return invertedObject;
  },
  findKey (object, func){
    
    for (let key in object){
      if (func(object[key])){
        return key;
      };
    }
  },
  drop (array,number){
    let newArray;
    if (!number) {
      number = 1;
    } 
      newArray = array.slice(number);
    return newArray;
  },
  dropWhile(array, func){
    const cb = (element, index) =>{
      return !func(element, index, array);
    }
    let dropNumber = array.findIndex(cb)
    let droppedArray = this.drop(array,dropNumber);
    return droppedArray;
  },
  chunk(array, size){
    let chunkArray = [];
    if (!size) {
      size = 0;
  } console.log(array.length)
    for (let i = 0;i < array.length; i = i + size){
      const chunk = array.slice(i, i + size);
      chunkArray.push(chunk);
    }
    return chunkArray;

}
};
//console.log(_.words("hallo liefde"));
//console.log(_.clamp(3,4,5));
//console.log(_.inRange(2,2,4));
//console.log(_.inRange(2,3,4));
//console.log(_.inRange(1,3))
//console.log(_.pad("abc",30));
//console.log(_.has({lekker: "dier"}, "lekker"));
console.log(_.chunk([1,2,3,4,5,6,7,8],3));



// Do not write or modify code below this line.
module.exports = _;