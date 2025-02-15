// 📌 Implementación de la clase PilaLimitada con un tamaño máximo
class PilaLimitada {
    constructor(maxSize) {
        this.items = []; // Arreglo para almacenar los elementos de la pila
        this.maxSize = maxSize; // Tamaño máximo permitido
    }

    // Método para agregar un elemento a la pila (PUSH)
    push(elemento) {
        if (this.items.length >= this.maxSize) {
            console.log("Error: La pila está llena");
            return;
        }
        this.items.push(elemento);
    }

    // Método para eliminar y retornar el último elemento de la pila (POP)
    pop() {
        if (this.isEmpty()) {
            console.log("Error: La pila está vacía");
            return null;
        }
        return this.items.pop();
    }

    // Método para ver el último elemento de la pila sin eliminarlo (PEEK)
    peek() {
        if (this.isEmpty()) {
            console.log("Error: La pila está vacía");
            return null;
        }
        return this.items[this.items.length - 1];
    }

    // Método para verificar si la pila está vacía
    isEmpty() {
        return this.items.length === 0;
    }

    // Método para verificar si la pila está llena
    isFull() {
        return this.items.length >= this.maxSize;
    }

    // Método para obtener el tamaño actual de la pila
    size() {
        return this.items.length;
    }

    // Método para mostrar el estado actual de la pila
    print() {
        console.log("Pila:", this.items);
    }
}

// 📌 Prueba de la clase PilaLimitada
let miPila = new PilaLimitada(3); // Definimos una pila con límite de 3 elementos

miPila.push("A");
miPila.push("B");
miPila.push("C");

miPila.print(); // Mostrará: Pila: [ 'A', 'B', 'C' ]

// Intentamos agregar otro elemento cuando ya está llena
miPila.push("D"); // Mostrará: Error: La pila está llena

// Sacamos un elemento y volvemos a intentar agregar "D"
miPila.pop();
miPila.push("D");

miPila.print(); // Mostrará: Pila: [ 'A', 'B', 'D' ]
