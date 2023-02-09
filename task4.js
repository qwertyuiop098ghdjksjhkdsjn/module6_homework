function number (a,b){
    let firstNumber = a
    let lastNumber = b
    const intervalId = setInterval(function (c, d){
      console.log(firstNumber);
      firstNumber++; 
      if (firstNumber>lastNumber){
        clearInterval(intervalId)
      }
    }, 1000)
  }
  
  number(1,10);