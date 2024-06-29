document.addEventListener('DOMContentLoaded', function () {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});

document.getElementById('compareButton').addEventListener('click', function() {
    const jugadorUno = {
        nombre: "Marce",
        habilidades: {
            ataque: 70,
            velocidad: 30,
            vida: 60,
            magia: 120,
        },
        articulos: ["espada", "escudo", "varita"],
    };

    const jugadorDos = {
        nombre: "Flor",
        habilidades: {
            ataque: 73,
            velocidad: 30,
            vida: 80,
            magia: 100,
        },
        articulos: ["escudo", "varita", "capa", "pocion"],
    };

    let contadorPuntosJug1 = 0;
    let contadorPuntosJug2 = 0;
    let ganador;

    const habilidades = ["ataque", "velocidad", "vida", "magia"];
    habilidades.forEach(habilidad => {
        if (jugadorUno.habilidades[habilidad] > jugadorDos.habilidades[habilidad]) {
            contadorPuntosJug1++;
        } else if (jugadorUno.habilidades[habilidad] < jugadorDos.habilidades[habilidad]) {
            contadorPuntosJug2++;
        } else {
            contadorPuntosJug1++;
            contadorPuntosJug2++;
        }
    });

    if (jugadorUno.articulos.length > jugadorDos.articulos.length) {
        contadorPuntosJug1++;
    } else if (jugadorUno.articulos.length < jugadorDos.articulos.length) {
        contadorPuntosJug2++;
    }

    if (contadorPuntosJug1 > contadorPuntosJug2) {
        ganador = jugadorUno.nombre;
    } else if (contadorPuntosJug1 < contadorPuntosJug2) {
        ganador = jugadorDos.nombre;
    } else {
        ganador = "empate";
    }

    const resultado = {
        [jugadorUno.nombre]: contadorPuntosJug1,
        [jugadorDos.nombre]: contadorPuntosJug2,
        ganador: ganador,
    };
    console.log(resultado);

    document.getElementById('puntos1').textContent = contadorPuntosJug1;
    document.getElementById('puntos2').textContent = contadorPuntosJug2;
    document.getElementById('ganador').textContent = ganador;
});
