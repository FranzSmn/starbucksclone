//Codewars Cats and Shelves (7 Kyu)
const solution = (start, finish , diference = finish - start) =>{  
        return Math.floor((diference/3) + diference % 3);
  }

 
//Codewars Are the numbers in order? (7 Kyu)

const inAscOrder = (arr) => arr[0] < arr[1] ? true : false;


console.log(inAscOrder([1,2,3,4,5]));