// 📌 Implementación de la clase Pila
class Pila {
    constructor() {
        this.items = []; // Arreglo para almacenar los elementos de la pila
    }

    // Método para agregar un elemento a la pila (PUSH)
    push(elemento) {
        this.items.push(elemento);
    }

    // Método para eliminar y retornar el último elemento de la pila (POP)
    pop() {
        if (this.isEmpty()) {
            throw new Error("La pila está vacía");
        }
        return this.items.pop();
    }

    // Método para ver el último elemento de la pila sin eliminarlo (PEEK)
    peek() {
        return this.items[this.items.length - 1];
    }

    // Método para verificar si la pila está vacía
    isEmpty() {
        return this.items.length === 0;
    }

    // Método para obtener el tamaño de la pila
    size() {
        return this.items.length;
    }
}

// 📌 Función para evaluar una expresión en notación postfija
function evaluarPostfija(expresion) {
    const pila = new Pila(); // Creamos una nueva pila
    const tokens = expresion.split(" "); // Separamos los elementos de la expresión por espacio

    // Recorremos la expresión token por token
    for (let token of tokens) {
        if (!isNaN(token)) { 
            // Si el token es un número, lo convertimos a número y lo apilamos
            pila.push(Number(token));
        } else {
            // Si el token es un operador, sacamos los dos últimos operandos de la pila
            const b = pila.pop();
            const a = pila.pop();
            let resultado;

            // Aplicamos la operación correspondiente
            switch (token) {
                case "+":
                    resultado = a + b;
                    break;
                case "-":
                    resultado = a - b;
                    break;
                case "*":
                    resultado = a * b;
                    break;
                case "/":
                    if (b === 0) {
                        throw new Error("Error: División por cero");
                    }
                    resultado = a / b;
                    break;
                default:
                    throw new Error(`Operador desconocido: ${token}`);
            }

            // Apilamos el resultado de la operación
            pila.push(resultado);
        }
    }

    // Al final, el único elemento en la pila es el resultado final
    if (pila.size() !== 1) {
        throw new Error("Error: La expresión es inválida");
    }

    return pila.pop(); // Retornamos el resultado final
}

// 📌 Probamos la función con una expresión de ejemplo
const expresionPostfija = "3 7 + 5 *"; // Equivalente a (3 + 7) * 5
const resultado = evaluarPostfija(expresionPostfija);

console.log(`Expresión postfija: ${expresionPostfija}`);
console.log(`Resultado: ${resultado}`);

