function foo(x) {
  if (x === null || x === undefined || typeof x !== 'object') {
    return 0; // Handle null, undefined, or non-object cases
  }
  return x.length; // Access length property safely
}