function or(expression1, expression2) {
  return (!(!expression1 && !expression2))

}

//alternativas segun gpt

/* 
function or(expression1, expression2) {
  if (expression1) {
    return true;
  } else {
    return expression2;
  }
}

// Ejemplos de uso
console.log(or(true, true));   // true
console.log(or(true, false));  // true
console.log(or(false, true));  // true
console.log(or(false, false)); // false
*/