/*Elabora un programa que permita averiguar si una persona debe sacar su CUIL, sabiendo 
su fecha de nacimiento. El Código Único de Identificación Laboral (CUIL) es el número
que se otorga a todo trabajador al inicio de su actividad laboral en relación de 
dependencia (mayores de 17 años) que pertenezca al Sistema Integrado de Jubilaciones
y Pensiones (SIJP), y a toda otra persona que gestione alguna prestación o servicio
de la Seguridad Social en la República Argentina

Nota:   Se debe comparar con la fecha actual y no tener en cuenta los años bisiestos.*/

//calcular la edad de una persona
function calcularEdad() {
  var hoy = prompt("Introduce la fecha de hoy (dd/mm/yyyy): ");
  var fecha_nacimiento = prompt(
    "Introduce tu fecha de nacimiento (dd/mm/yyyy): "
  );
  var hoy_array = [];
  var fecha_nacimiento_array = [];
  var posicionInicio1 = 0;
  var posicionInicio2 = 0;

  for (let i = 0; i < hoy.length; i++) {
    if (hoy[i] == "/") {
      hoy_array.push(hoy.substring(posicionInicio1, i));
      posicionInicio1 = i + 1;
    }
  }
  hoy_array.push(hoy.substring(posicionInicio1, hoy.length));

  for (let i = 0; i < fecha_nacimiento.length; i++) {
    if (fecha_nacimiento[i] == "/") {
      fecha_nacimiento_array.push(
        fecha_nacimiento.substring(posicionInicio2, i)
      );
      posicionInicio2 = i + 1;
    }
  }
  fecha_nacimiento_array.push(
    fecha_nacimiento.substring(posicionInicio2, fecha_nacimiento.length)
  );

  //console.log(hoy_array);
  //console.log(fecha_nacimiento_array);

  var dd;
  dd = parseInt(hoy_array[0]);

  var mm;
  mm = parseInt(hoy_array[1]);

  var yyyy;
  yyyy = parseInt(hoy_array[2]);

  var dd2;
  dd2 = parseInt(fecha_nacimiento_array[0]);

  var mm2;
  mm2 = parseInt(fecha_nacimiento_array[1]);

  var yyyy2;
  yyyy2 = parseInt(fecha_nacimiento_array[2]);

  var edad = yyyy - yyyy2;

  //alert(edad);

  if (mm < mm2) {
    edad -= 1;
  } else if (mm == mm2 && dd < dd2) {
    edad -= 1;
  }

  // alert(edad);

  if (edad >= 18) {
    alert(
      "Ya te puedes sacar tu Código Único de Identificación Laboral (CUIL)"
    );
  } else {
    alert(
      "Todavia eres menor de edad, no te puedes sacar tu Código Único de Identificación Laboral (CUIL)"
    );
  }
}

calcularEdad();
