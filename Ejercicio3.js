// 📌 Implementación de la clase UndoManager con funcionalidad de "Deshacer" y "Rehacer"
class UndoManager {
    constructor() {
        this.stack = JSON.parse(localStorage.getItem("undoStack")) || []; // Cargar historial desde localStorage
        this.redoStack = JSON.parse(localStorage.getItem("redoStack")) || []; // Pila para rehacer acciones
        this.updateHistory(); // Actualizar UI al cargar
    }

    // Agrega una acción a la pila y borra el redoStack
    addAction(action) {
        this.stack.push(action);
        this.redoStack = []; // Reiniciamos el redoStack cuando hay una nueva acción
        this.saveToLocalStorage();
        this.updateHistory();
    }

    // Deshace la última acción (mueve de undoStack a redoStack)
    undo() {
        if (this.stack.length === 0) {
            alert("No hay acciones para deshacer.");
            return;
        }
        const lastAction = this.stack.pop();
        this.redoStack.push(lastAction);
        this.saveToLocalStorage();
        this.updateHistory();
    }

    // Rehace la última acción (mueve de redoStack a undoStack)
    redo() {
        if (this.redoStack.length === 0) {
            alert("No hay acciones para rehacer.");
            return;
        }
        const action = this.redoStack.pop();
        this.stack.push(action);
        this.saveToLocalStorage();
        this.updateHistory();
    }

    // Guarda los estados de las pilas en localStorage
    saveToLocalStorage() {
        localStorage.setItem("undoStack", JSON.stringify(this.stack));
        localStorage.setItem("redoStack", JSON.stringify(this.redoStack));
    }

    // Devuelve el historial de acciones como un array
    getHistory() {
        return this.stack;
    }

    // Actualiza la lista de historial en la interfaz
    updateHistory() {
        const historyList = document.getElementById("historyList");
        historyList.innerHTML = ""; // Limpiar la lista

        this.stack.forEach(action => {
            let li = document.createElement("li");
            li.textContent = action;
            historyList.appendChild(li);
        });
    }
}

// 📌 Instancia de la clase UndoManager
const manager = new UndoManager();

// 📌 Elementos de la interfaz
const actionInput = document.getElementById("actionInput");
const addActionBtn = document.getElementById("addActionBtn");
const undoBtn = document.getElementById("undoBtn");
const redoBtn = document.getElementById("redoBtn");

// 📌 Evento para agregar una acción
addActionBtn.addEventListener("click", () => {
    const actionText = actionInput.value.trim();
    if (actionText === "") {
        alert("Por favor, escribe una acción.");
        return;
    }
    manager.addAction(actionText);
    actionInput.value = ""; // Limpiar el input después de agregar
});

// 📌 Evento para deshacer la última acción
undoBtn.addEventListener("click", () => {
    manager.undo();
});

// 📌 Evento para rehacer la última acción deshecha
redoBtn.addEventListener("click", () => {
    manager.redo();
});
