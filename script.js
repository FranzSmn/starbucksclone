const solution = (start, finish , diference = finish - start) =>{  
        return Math.floor((diference/3) + diference % 3);
  }

  const modulo =(num) => num % 3;

  console.log(solution(2,4));
  console.log(modulo(394));
