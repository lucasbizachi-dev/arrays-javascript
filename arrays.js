//Somando elementos de um array
let array = [1, 2, 3, 4, 5];
let soma = 0;

for (let i = 0; i < array.length; i++) {
    soma += array[i];
}

console.log("A soma dos elementos do array é: ", soma)

// Encontrando o maior elemento de um array
let array1 = [10, 7, 3, 21, 15];
let maior = array1[0];

for (let i = 1; i < array1.length; i++) { 
    if (array1[i] > maior) {
        maior = array1[i];
    }
}

console.log("O maior elemento do array é: ", maior); 

//Invertendo um array
let array2 = [1, 2, 3, 4, 5];
let arrayInvertido = [];

for (let i = array2.length - 1; i >= 0; i--) {
    arrayInvertido.push(array2[i]);
}

console.log("Array invertido: ", arrayInvertido);

//Removendo elementos duplicados de um array
let array3 = [1, 2, 2, 3, 4, 4, 5, 5];
let arraySemDuplicatas = [];

for (let i = 0; i < array.length; i++) {
    if (arraySemDuplicatas.indexOf(array[i]) === -1) {
        arraySemDuplicatas.push(array[i]);
    }
}

console.log("Array sem elementos duplicados:", arraySemDuplicatas);

//Filtrando elementos de um array
let array4 = [10, 20, 30, 40, 50];
let arrayFiltrado = array4.filter(function(elemento) {
    return elemento > 25;
});

console.log("Elementos maiores que 25:", arrayFiltrado);
