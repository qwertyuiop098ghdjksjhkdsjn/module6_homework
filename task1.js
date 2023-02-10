function number(){
    let arr = [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null];
    let countEven = 0; //чётное
    let countOdd = 0;  //нечётное
    let countOther = 0; //не число
    let countZero = 0; //ноль
    for (let i = 0; i < arr.length; i++){
        if (isNaN(arr[i]) || (typeof(arr[i]) !== 'number')) {
            countOther++;
        } else {
            if (arr[i]===0) {
                        countZero++
                    }
                    else if (arr[i] % 2 === 0) {
                countEven++;
            } 
              else {
                countOdd++;
            }
        }
    }
    console.log("чётных чисел " + countEven);
    console.log("нечётных чисел " + countOdd);
    console.log("не число " + countOther);
    console.log("ноль элементов " + countZero)
    }
    number();