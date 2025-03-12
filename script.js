const nombres = ["NovaTech", "InnovaCorp", "SkyNet", "BlueWave", "FutureTech", "SmartVision", "NextGen", "AlphaTech", "Visionary", "HyperLab"];

function generarNombre() {
    const randomIndex = Math.floor(Math.random() * nombres.length);
    document.getElementById("nombre").innerText = nombres[randomIndex];
}

function copiarNombre() {
    const nombre = document.getElementById("nombre").innerText;
    if (nombre) {
        navigator.clipboard.writeText(nombre).then(() => {
            alert("Nombre copiado: " + nombre);
        }).catch(err => {
            console.error("Error al copiar el nombre", err);
        });
    }
}
