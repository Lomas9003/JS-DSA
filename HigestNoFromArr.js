// simple way 

function formLargestNumber(arr) {
  //write your implementation here 
  const num = arr.map(num => num.toString())


  let  val = num.sort((a, b) => {
    return (b + a).localeCompare(a + b)
  })

  console.log(val)
  // -1 if 1st < 2nd , 0 if Equla , 1 if 1st > 2nd we are doing in decending order

  if (num[0] === '0') {
    return '0'
  }

  
 

  return num.join("")

}
const input1 = [3, 30, 34, 5, 9];
console.log(formLargestNumber(input1)); //  9534330







// old scholl way 

function compare(a, b) {
  // Custom comparator: returns true if a+b is greater than b+a
  let ab = "" + a + b;
  let ba = "" + b + a;
  return ab > ba;
}

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (!compare(arr[j], arr[j + 1])) {
        // Swap arr[j] and arr[j+1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

function formLargestNumber(arr) {
  // Step 1: Sort the array using custom comparator
  bubbleSort(arr);

  // Step 2: Concatenate manually
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  // Edge case: If the number starts with '0', all are zeros
  if (result[0] === '0') return '0';

  return result;
}

const input = [3, 30, 34, 5, 9];
console.log(formLargestNumber(input)); // Output: 9534330
