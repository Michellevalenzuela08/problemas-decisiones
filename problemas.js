function verificar() {
    let edad = parseInt(document.getElementById("edad").value);
    let res = document.getElementById("resultado");

    if (isNaN(edad) || edad < 0) {
        res.textContent = "Por favor, introduce una edad válida.";
    } else if (edad >= 18) {
        res.textContent = "Puedes votar.";
    } else {
        res.textContent = "No puedes votar.";
    }
}

function calcularSueldo() {
    let horas = parseFloat(document.getElementById("horas").value);
    let pago = parseFloat(document.getElementById("pago").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(horas) || isNaN(pago) || horas < 0 || pago < 0) {
        resultado.textContent = "Por favor, introduce valores válidos.";
        return;
    }

    let sueldo;
    if (horas <= 40) {
        sueldo = horas * pago;
    } else {
        let extras = horas - 40;
        sueldo = (40 * pago) + (extras * pago * 2);
    }

    resultado.textContent = "Tu sueldo semanal es: $" + sueldo.toFixed(2);
}

function elegirRegalo() {
    let dinero = parseFloat(document.getElementById("dinero").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(dinero) || dinero < 0) {
        resultado.textContent = "Introduce una cantidad válida de dinero.";
        return;
    }

    let regalo;
    if (dinero <= 10) {
        regalo = "Tarjeta";
    } else if (dinero <= 100) {
        regalo = "Chocolates";
    } else if (dinero <= 250) {
        regalo = "Flores";
    } else {
        regalo = "Anillo";
    }

    resultado.textContent = "Puedes regalar: " + regalo;
}

function calcularTarifa() {
    let horas = parseInt(document.getElementById("horas").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(horas) || horas <= 0) {
        resultado.textContent = "Introduce una cantidad válida de horas.";
        return;
    }

    let costo = 0;

    if (horas <= 2) {
        costo = horas * 5;
    } else if (horas <= 5) {
        costo = (2 * 5) + ((horas - 2) * 4);
    } else if (horas <= 10) {
        costo = (2 * 5) + (3 * 4) + ((horas - 5) * 3);
    } else {
        costo = (2 * 5) + (3 * 4) + (5 * 3) + ((horas - 10) * 2);
    }

    resultado.textContent = "Total a pagar: $" + costo.toFixed(2);
}

function menorEdad() {
    let n1 = document.getElementById("nombre1").value;
    let e1 = parseInt(document.getElementById("edad1").value);
    let n2 = document.getElementById("nombre2").value;
    let e2 = parseInt(document.getElementById("edad2").value);
    let n3 = document.getElementById("nombre3").value;
    let e3 = parseInt(document.getElementById("edad3").value);
    let res = document.getElementById("resultado");

    if (!n1 || !n2 || !n3 || isNaN(e1) || isNaN(e2) || isNaN(e3)) {
        res.textContent = "Completa todos los campos correctamente.";
        return;
    }

    let menorNombre = n1;
    let menorEdad = e1;

    if (e2 < menorEdad) {
        menorEdad = e2;
        menorNombre = n2;
    }

    if (e3 < menorEdad) {
        menorEdad = e3;
        menorNombre = n3;
    }

    res.textContent = `La persona más joven es ${menorNombre} con ${menorEdad} años.`;
}

function calcularDescuento() {
    let precio = parseFloat(document.getElementById("precio").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(precio) || precio <= 0) {
        resultado.textContent = "Ingresa un precio válido.";
        return;
    }

    let descuento = 0;

    if (precio >= 200) {
        descuento = precio * 0.15;
    } else if (precio > 100) {
        descuento = precio * 0.12;
    } else {
        descuento = precio * 0.10;
    }

    let total = precio - descuento;

    resultado.textContent = `Descuento: $${descuento.toFixed(2)}\nTotal a pagar: $${total.toFixed(2)}`;
}

function asignarBeca() {
    let edad = parseInt(document.getElementById("edad").value);
    let promedio = parseFloat(document.getElementById("promedio").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(edad) || isNaN(promedio)) {
        resultado.textContent = "Por favor, ingresa edad y promedio válidos.";
        return;
    }

    let beca = 0;

    if (edad > 18) {
        if (promedio >= 9) {
            beca = 2000;
        } else if (promedio >= 7.5) {
            beca = 1000;
        } else if (promedio >= 6) {
            beca = 500;
        }
    } else {
        if (promedio >= 9) {
            beca = 3000;
        } else if (promedio >= 8) {
            beca = 2000;
        } else if (promedio >= 6) {
            beca = 100;
        }
    }

    if (beca > 0) {
        resultado.textContent = `Beca asignada: $${beca}`;
    } else {
        resultado.textContent = "Se enviará carta de invitación a estudiar más.";
    }
}

function asignarBeca() {
    let edad = parseInt(document.getElementById("edad").value);
    let promedio = parseFloat(document.getElementById("promedio").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(edad) || isNaN(promedio)) {
        resultado.textContent = "Por favor, ingresa edad y promedio válidos.";
        return;
    }

    let beca = 0;

    if (edad > 18) {
        if (promedio >= 9) {
            beca = 2000;
        } else if (promedio >= 7.5) {
            beca = 1000;
        } else if (promedio >= 6) {
            beca = 500;
        }
    } else {
        if (promedio >= 9) {
            beca = 3000;
        } else if (promedio >= 8) {
            beca = 2000;
        } else if (promedio >= 6) {
            beca = 100;
        }
    }

    if (beca > 0) {
        resultado.textContent = `Beca asignada: $${beca}`;
    } else {
        resultado.textContent = "Se enviará carta de invitación a estudiar más.";
    }
}

function calcularBono() {
  let sueldo = parseFloat(document.getElementById("sueldo").value);
  let antiguedad = parseFloat(document.getElementById("antiguedad").value);
  let resultado = document.getElementById("resultado");

  if (isNaN(sueldo) || isNaN(antiguedad) || sueldo <= 0 || antiguedad < 0) {
    resultado.textContent = "Por favor, ingresa datos válidos.";
    return;
  }

  let bonoAnt = 0;
  if (antiguedad > 2 && antiguedad < 5) {
    bonoAnt = sueldo * 0.20;
  } else if (antiguedad >= 5) {
    bonoAnt = sueldo * 0.30;
  }

  let bonoSueldo = 0;
  if (sueldo < 1000) {
    bonoSueldo = sueldo * 0.25;
  } else if (sueldo <= 3500) {
    bonoSueldo = sueldo * 0.15;
  } else {
    bonoSueldo = sueldo * 0.10;
  }

  let bonoFinal = Math.max(bonoAnt, bonoSueldo);
  resultado.textContent = `El bono asignado es: $${bonoFinal.toFixed(2)}`;
}


function calcularBono() {
  let sueldo = parseFloat(document.getElementById("sueldo").value);
  let antiguedad = parseFloat(document.getElementById("antiguedad").value);
  let resultado = document.getElementById("resultado");

  if (isNaN(sueldo) || isNaN(antiguedad) || sueldo <= 0 || antiguedad < 0) {
    resultado.textContent = "Datos inválidos. Intenta de nuevo.";
    return;
  }

  let bonoAnt = 0;
  if (antiguedad > 2 && antiguedad < 5) {
    bonoAnt = sueldo * 0.20;
  } else if (antiguedad >= 5) {
    bonoAnt = sueldo * 0.30;
  }

  let bonoSueldo = 0;
  if (sueldo < 1000) {
    bonoSueldo = sueldo * 0.25;
  } else if (sueldo <= 3500) {
    bonoSueldo = sueldo * 0.15;
  } else {
    bonoSueldo = sueldo * 0.10;
  }

  let bonoFinal = Math.max(bonoAnt, bonoSueldo);

  resultado.textContent = `Bono asignado: $${bonoFinal.toFixed(2)}`;
}

function calcularDestino() {
  const dinero = parseFloat(document.getElementById("dinero").value);
  const costoKm = parseFloat(document.getElementById("costo").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(dinero) || isNaN(costoKm) || dinero <= 0 || costoKm <= 0) {
    resultado.textContent = "Por favor, introduce valores válidos.";
    return;
  }

  const costoMexico = 1500 * costoKm;
  const costoPV = 1600 * costoKm;
  const costoAcapulco = 2400 * costoKm;
  const costoCancun = 3600 * costoKm;

  let destino = "Lo siento, tendrás que quedarte en casa.";

  if (dinero >= costoCancun) {
    destino = "Puedes ir a Cancún.";
  } else if (dinero >= costoAcapulco) {
    destino = "Puedes ir a Acapulco.";
  } else if (dinero >= costoPV) {
    destino = "Puedes ir a Puerto Vallarta.";
  } else if (dinero >= costoMexico) {
    destino = "Puedes ir a Ciudad de México.";
  }

  resultado.textContent = destino;
}

function calcularBono() {
  const antiguedad = parseInt(document.getElementById("antiguedad").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(antiguedad) || antiguedad < 0) {
    resultado.textContent = "Por favor, introduce un número válido de años.";
    return;
  }

  let bono = 0;

  if (antiguedad === 1) {
    bono = 100;
  } else if (antiguedad === 2) {
    bono = 200;
  } else if (antiguedad === 3) {
    bono = 300;
  } else if (antiguedad === 4) {
    bono = 400;
  } else if (antiguedad === 5) {
    bono = 500;
  } else if (antiguedad > 5) {
    bono = 1000;
  }

  resultado.textContent = "El bono asignado es: $" + bono;
}

function calcularSueldo() {
  const horas = parseInt(document.getElementById("horas").value);
  const pago = parseFloat(document.getElementById("pago").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(horas) || isNaN(pago) || horas < 0 || pago <= 0) {
    resultado.textContent = "Por favor, ingresa valores válidos.";
    return;
  }

  if (horas > 50) {
    resultado.textContent = "No está permitido trabajar más de 50 horas.";
    return;
  }

  let sueldo = 0;

  if (horas <= 40) {
    sueldo = horas * pago;
  } else if (horas <= 45) {
    sueldo = (40 * pago) + ((horas - 40) * pago * 2);
  } else {
    sueldo = (40 * pago) + (5 * pago * 2) + ((horas - 45) * pago * 3);
  }

  resultado.textContent = "El sueldo semanal es: $" + sueldo.toFixed(2);
}

function calcularCosto() {
  const numAlumnos = parseInt(document.getElementById("numAlumnos").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(numAlumnos) || numAlumnos < 1) {
    resultado.textContent = "Por favor, ingresa un número válido de alumnos.";
    return;
  }

  let costo = 0;

  if (numAlumnos > 100) {
    costo = 20;
  } else if (numAlumnos >= 50 && numAlumnos <= 100) {
    costo = 35;
  } else if (numAlumnos >= 20 && numAlumnos <= 49) {
    costo = 40;
  } else {
    costo = 70;
  }

  resultado.textContent = `El costo del pasaje por alumno es: $${costo}`;
}
