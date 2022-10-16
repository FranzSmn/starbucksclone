//Codewars Cats and Shelves (7 Kyu)
const solution = (start, finish , diference = finish - start) =>{  
        return Math.floor((diference/3) + diference % 3);
  }

 
//Codewars Are the numbers in order? (7 Kyu)
const inAscOrder = (arr) => {
    let res = true

    for(let i = 0;i<arr.length;i++){
        if(arr[i+1] < arr[i])res = false
    }
    return res;
}
