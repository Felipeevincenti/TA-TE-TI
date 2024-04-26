
// todo ---------- DECALRACION DE VARIABLES ---------- //

let casillas = document.querySelectorAll("[casilla]");
let h2Turno = document.querySelector("#h2-turno");
let turno = document.querySelector(".turno");
let turnoX = true;
let turnoO = false;
let ganador = false;
let borde = document.querySelector("#borde");

let casilla1 = document.querySelector("[casilla1]");
let casilla2 = document.querySelector("[casilla2]");
let casilla3 = document.querySelector("[casilla3]");
let casilla4 = document.querySelector("[casilla4]");
let casilla5 = document.querySelector("[casilla5]");
let casilla6 = document.querySelector("[casilla6]");
let casilla7 = document.querySelector("[casilla7]");
let casilla8 = document.querySelector("[casilla8]");
let casilla9 = document.querySelector("[casilla9]");





// todo ---------- OBTENER CADA CASILLA Y CUMPLIR FUNCIONES ---------- //

casillas.forEach(casilla => {

    casilla.addEventListener("click", () => {

        if (casilla.innerHTML === '' && ganador != true) {

            if (turnoX === true) {
                casilla.innerHTML = "X";
                turno.innerHTML = "O";
                turnoX = false;
                turnoO = true;
                if (casilla.innerHTML = "X") {
                    casilla.style.color = "red"
                }
            }

            else if (turnoO === true) {
                casilla.innerHTML = "O";
                turno.innerHTML = "X";
                turnoO = false;
                turnoX = true;
            };





            // todo ---------- GANA EL EQUIPO "X" ---------- //

            ganarX(casilla1, casilla2, casilla3);
            ganarX(casilla4, casilla5, casilla6);
            ganarX(casilla7, casilla8, casilla9);
            ganarX(casilla1, casilla4, casilla7);
            ganarX(casilla2, casilla5, casilla8);
            ganarX(casilla3, casilla6, casilla9);
            ganarX(casilla1, casilla5, casilla9);
            ganarX(casilla3, casilla5, casilla7);





            // todo ---------- GANA EL EQUIPO "O" ---------- //

            ganarO(casilla1, casilla2, casilla3);
            ganarO(casilla4, casilla5, casilla6);
            ganarO(casilla7, casilla8, casilla9);
            ganarO(casilla1, casilla4, casilla7);
            ganarO(casilla2, casilla5, casilla8);
            ganarO(casilla3, casilla6, casilla9);
            ganarO(casilla1, casilla5, casilla9);
            ganarO(casilla3, casilla5, casilla7);





            // todo ---------- EMPATE ---------- //

            if (
                ganador != true &&
                casilla1.innerHTML != "" &&
                casilla2.innerHTML != "" &&
                casilla3.innerHTML != "" &&
                casilla4.innerHTML != "" &&
                casilla5.innerHTML != "" &&
                casilla6.innerHTML != "" &&
                casilla7.innerHTML != "" &&
                casilla8.innerHTML != "" &&
                casilla9.innerHTML != ""
            ) {
                h2Turno.innerHTML = "EMPATE"
            }

        };
    });
});





// todo ---------- FUNCION GANA "X" ---------- //

function ganarX(uno, dos, tres) {
    if (
        uno.innerHTML === "X" &&
        dos.innerHTML === "X" &&
        tres.innerHTML === "X"
    ) {
        ganador = true;
        h2Turno.innerHTML = "Ganador: ";
        let a = h2Turno.appendChild(document.createElement("a"));
        a.textContent = "X";
        a.classList.add("ganador")

        casillas.forEach(casilla => {
            casilla.style.background = "#8ec313";
            casilla.style.border = "#8ec313";
        });
    }
}





// todo ---------- FUNCION GANA "O" ---------- //

function ganarO(uno, dos, tres) {
    if (
        uno.innerHTML === "O" &&
        dos.innerHTML === "O" &&
        tres.innerHTML === "O"
    ) {
        ganador = true;
        h2Turno.innerHTML = "Ganador: ";
        let a = h2Turno.appendChild(document.createElement("a"));
        a.textContent = "O";
        a.classList.add("ganador");

        casillas.forEach(casilla => {
            casilla.style.background = "#8ec313";
            casilla.style.border = "#8ec313";
        });
    }
}





// todo ---------- REINICIAR ---------- //

let reiniciar = document.querySelector(".reiniciar");

reiniciar.addEventListener("click", () => {
    location.reload();
})