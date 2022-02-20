// Crea una función que pida números por teclado y mételos en un array. Cuando el usuario meta un 0,dejaremos de insertar. Por último, ordena los números ordenados de menor a mayor y devuelve el array


function pideNums() {
    let aSort = [];
  
    do {
      numTeclado = parseInt(prompt("Dime un número: "));
      aSort.push(numTeclado);
    } while (numTeclado !== 0);
  
    console.log(ordenaArray(aSort));
  }
  
  let ordenaArray = aNums => aNums.sort();
  
  pideNums();