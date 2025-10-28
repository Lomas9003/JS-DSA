function nextGreaterElement(arr) {
  const stack = [];
  const result = new Array(arr.length).fill(-1);

  for (let i = arr.length - 1; i >= 0; i--) {
    // Pop all smaller elements from stack
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    // If stack still has elements, top is the next greater
    if (stack.length > 0) {
      result[i] = stack[stack.length - 1];
    }

    // Push current element for next iteration
    stack.push(arr[i]);
  }

  return result;
}
stack = [25, 5]
arr = [4, 5, 2, 25]