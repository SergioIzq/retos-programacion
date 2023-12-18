/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const simbols = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
    '-', '_', '=', '+', '[', '{', ']', '}', '\\', '|',
    ';', ':', "'", '"', ',', '<', '.', '>', '/', '?'
];

function generatePassword(length, uppercase, numbers, symbols) {
    let contrasenia ="";
    if (length < 8 || length > 16) {
        throw new Error("Longitud incorrecta, debe estar entre 8 y 16");
    } else {
        for(let i=0; i<length; i++) {
            contrasenia = contrasenia + letters[Math.random()* letters.length()] ;
        }
    }

}


// Casos de uso
try {
    generatePassword(90, true, true, true);
} catch (error) {
    console.error(error.message);
}
