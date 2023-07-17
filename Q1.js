function sort_asc(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

      for (let j = 0; j < arr.length - i - 1; j++) {

        if (arr[j] > arr[j + 1]) {
            
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  

console.log(sort_asc([4,5,1,2,6]))
console.log(sort_asc([8,9,5,7,2]))