function validaArray(arr, num) {
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros.");

        if(typeof arr !== 'object') throw new TypeError("Array precisa de ser do tipo object.");
    
        if(typeof num !== 'number') throw new TypeError("Num preicsa ser do tipo number.");
    
        if(arr.length !== num) throw new RangeError('Tamanho é Inválido.');

        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este errpr é um ReferenceError.")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Este errpr é um TyprError.")
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log("Este errpr é um RangeError.")
            console.log(e.message)
        } else {
            console.log("tipo de erro não esperado: " + e)
        }
    }
}

// console.log(validaArray())
// console.log(validaArray(2, 5))
// console.log(validaArray([], 'v'))
console.log(validaArray(['a', 'b', 'c', 'd', 'e'], 5))