/* Ejercicio una función que permite mostrar el reloj
en el elemento HTML con id="reloj" al presionar el botón con id="mostrar" */
function reloj() {
    let fecha =new Date();
    let hora=fecha.getHours();
    let minuto=fecha.getMinutes();
    let segundos=fecha.getSeconds();
    document.getElementById("reloj").innerText=" "+hora+":"+minuto+":"+segundos;

}
reloj();
setInterval(reloj,1000);



// Agregar el evento click al botón
document.getElementById("mostrar").addEventListener("click", reloj);