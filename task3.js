function example (num) {
    return function (number){
      return num+number;
    }
  }
  console.log(example(2)(3));