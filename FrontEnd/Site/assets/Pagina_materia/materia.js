document.addEventListener("DOMContentLoaded", function () {

    var reproduzirMateria = localStorage.getItem("materia");
    var reproduzirProfessor = localStorage.getItem("professor")

    console.log('Matéria: ' + reproduzirMateria + ' de' + reproduzirProfessor)

    document.getElementById("Materia").innerText = reproduzirMateria;
    document.getElementById('Prof').innerText = ('(Prof. ' + reproduzirProfessor + ')');


});

var biblioteca = document.getElementById('modal_da_biblioteca')

function abrir_modal_biblioteca() {
    var sla = window.getComputedStyle(biblioteca);
    const display = sla.getPropertyValue('display');

    if (display === 'none') {
        biblioteca.style.display = 'block';
        biblioteca.classList.add('abrir');
    }
    else if (display === 'block') {
        biblioteca.style.display = 'none';
    }
}