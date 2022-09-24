// Limpiar valores
function clearScreen() {
    document.getElementById("result").value = "";
}
   // Mostrar Valores
function display(value) {
    document.getElementById("result").value += value;
}
   // Calcular
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
