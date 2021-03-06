///**********EJERCICIO 1************/////////
let invertirArray = arrayAInverir => {
  let arrayInvertido = [];

  arrayInvertido.push(arrayAInverir.pop());
  arrayInvertido.push(arrayAInverir.pop());
  arrayInvertido.push(arrayAInverir.pop());

  return arrayInvertido;
}

console.log("---------EJERCICIO1---------");
console.log(invertirArray([1, 2, 7]));
console.log(invertirArray(["a", "h", "t"]));

//***********EJERCICIO 2**********************//

let arrayPares = array => {
  arrayConPares = [];
  if (array[0] % 2 == 0) {
    arrayConPares.push(array[0]);
  }
  if (array[1] % 2 == 0) {
    arrayConPares.push(array[1]);
  }
  if (array[2] % 2 == 0) {
    arrayConPares.push(array[2]);
  }
  return arrayConPares;
}
console.log("---------EJERCICIO2---------");
console.log(arrayPares([2, 7, 9]));
console.log(arrayPares([7, 5, 3]));

//***********EJERCICIO 3***********//
let tipoArray= (tipoDato, array) => {
  return tipoDato === typeof array[0]
  ? tipoDato === typeof array[1]
  ? tipoDato === typeof array[2]
  ? true
  : false
  : false
  : false;
}

console.log("---------EJERCICIO3---------");
console.log(tipoArray("string", ["b", "a", "3"]));
console.log(tipoArray("number", ["a", 1, 3]));
console.log(tipoArray("number", [1, "a", 3]));
console.log(tipoArray("number", [1, 3, "a"]));

//************EJERCICIO 4***************//
let sumaArray= array => {
  let arraySumaAcumulada = [];
  
  if (tipoArray("number", array)) {
    arraySumaAcumulada.push(array[0]);
    arraySumaAcumulada.push(array[0] + array[1]);
    arraySumaAcumulada.push(array[0] + array[1] + array[2]);
    console.log(arraySumaAcumulada);
    return arraySumaAcumulada;
    
  } else console.log("Error: array corrupto");
}


console.log("---------EJERCICIO4---------");
sumaArray([2, 7, 3]);
sumaArray([3, 5, "a"]);

//**********EJERCICIO 5***************//

function todasLasFunciones(array) {
  
  if(tipoArray("number", array)){
    array=invertirArray(array);
    array = arrayPares(array);
  }
  sumaArray(array);
}


console.log("---------EJERCICIO5---------");
todasLasFunciones(["a", "b", "c"]);
todasLasFunciones([1,7,3]);
todasLasFunciones([4,6,2]);