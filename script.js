const nombres = ["NovaTech", "InnovaCorp", "SkyNet", "BlueWave", "FutureTech", "SmartVision"];

function generarNombre() {
    const randomIndex = Math.floor(Math.random() * nombres.length);
    document.getElementById("nombre").innerText = nombres[randomIndex];
}
