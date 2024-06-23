
// Calculadora de serie fibonacci

function calcularFibonacci() {
    let num = parseInt(prompt("Ingrese un número positivo para la serie Fibonacci"));

    if (isNaN(num) || num < 0 ) {
        console.log("El valor ingresado no es un numero o es un valor negativo, ingrese un valor válido");
        return calcularFibonacci();

    } else if (num === 0) {
        console.log(0);

    } else if (num === 1) {
        console.log(1);

    } else {
        let a = 0
        let b = 1
        let c;
        console.log(a)
        console.log(b)

        for (i = 3; i = num; i++) {
            c = a + b;
            a = b;
            b = c;
            console.log(b);
        }
    }
}

calcularFibonacci();

// Velenni De La Hoz.
