function calcularNota() {
    const nota1 = parseFloat(document.getElementById("nota1".value));
    const nota2 = parseFloat(document.getElementById("nota2".value));
    const nota3 = parseFloat(document.getElementById("nota3".value));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        Swal.fire("Error", "Todos los campos deben tener un valor.", "error");
        return;
    }

    if(nota1 < 0 || nota1 > 30 || nota2 < 0 || nota2 > 30 || nota3 < 0 || nota3 > 40) {
        Swal.fire("Error", "Las notas deben estar dentro del rango", "error");
        return;
    }

    const total = nota1 + nota2 + nota3;
    let mensaje = "";

    if(total < 60) {
        mensaje = "Reprobado";}
    else if (total < 80) {
        mensaje = "Bueno";}
    else if (total < 90){
        mensaje = "Muy bueno"}
    else {
        mensaje = "Sobresaliente";
    }

    Swal.fire({
        title: "Resultado",
        text: `Nota final: ${total.toFixed(2)}% - ${mensaje}`,
        icon: "success"
    });
}

function limpiarFormulario() {
    document.getElementById("formNotas").reset();
}
