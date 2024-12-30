function foo(x){
  if (x === null) {
    return 0; // Handle null case
  }
  return x.length; // Assume x is an array or string
}