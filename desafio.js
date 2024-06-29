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
  
    // Attack
    if (jugadorUno.habilidades.ataque > jugadorDos.habilidades.ataque) {
      contadorPuntosJug1++;
    } else if (jugadorUno.habilidades.ataque < jugadorDos.habilidades.ataque) {
      contadorPuntosJug2++;
    } else {
      contadorPuntosJug1++;
      contadorPuntosJug2++;
    }
  
    // Velocity
    if (jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad) {
      contadorPuntosJug1++;
    } else if (jugadorUno.habilidades.velocidad < jugadorDos.habilidades.velocidad) {
      contadorPuntosJug2++;
    } else {
      contadorPuntosJug1++;
      contadorPuntosJug2++;
    }
  
    // Life
    if (jugadorUno.habilidades.vida > jugadorDos.habilidades.vida) {
      contadorPuntosJug1++;
    } else if (jugadorUno.habilidades.vida < jugadorDos.habilidades.vida) {
      contadorPuntosJug2++;
    } else {
      contadorPuntosJug1++;
      contadorPuntosJug2++;
    }
  
    // Magic
    if (jugadorUno.habilidades.magia > jugadorDos.habilidades.magia) {
      contadorPuntosJug1++;
    } else if (jugadorUno.habilidades.magia < jugadorDos.habilidades.magia) {
      contadorPuntosJug2++;
    } else {
      contadorPuntosJug1++;
      contadorPuntosJug2++;
    }
  
    // Articles
    if (jugadorUno.articulos.length > jugadorDos.articulos.length) {
      contadorPuntosJug1++;
    } else if (jugadorUno.articulos.length < jugadorDos.articulos.length) {
      contadorPuntosJug2++;
    } else {
      contadorPuntosJug1++;
      contadorPuntosJug2++;
    }
  
    // Winner
    if (contadorPuntosJug1 > contadorPuntosJug2) {
      ganador = jugadorUno.nombre;
    } else if (contadorPuntosJug1 < contadorPuntosJug2) {
      ganador = jugadorDos.nombre;
    } else {
      ganador = "empate";
    }
  
    document.getElementById('puntos1').textContent = contadorPuntosJug1;
    document.getElementById('puntos2').textContent = contadorPuntosJug2;
    document.getElementById('ganador').textContent = ganador;
  });
  