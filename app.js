var TIME_WAIT_1 = 2000;
var TIME_WAIT_2 = 3000;
var TIME_WAIT_3 = 3500;
var TIME_WAIT_4 = 4500;

//Peter Speeches

var Peterhello = "Qué onda man, soy Peter, o Pit si lo prefieres";
var PeterIwas = "Antes estaba totalmente metido en el hip-hop, pero ahora estoy en este bisne de progra!";
var PeterIlike = "Aún así, soy leal al rap y a veces al tecno, son lo mejor!";
var PeterWhoAreU = "Pero basta de mí, qué onda, quién eres?";
var PeterLongName = "No te pases!! soy de memoria corta, no tienes uno más corto ";
var PeterShortName = "Genial!!! de nombre chico para mi AlzHaimer decía mi viejita mi buen ";
var PeterNice2mtULong = "Ja Ja Ja no te creas we, pásatela chido!";
var PeterNice2mtUShort = "Jajaja sin pex, un gustazo bro!";

//Luisa Speeches

var Luisahello = "Hola, yo soy Luisa";
var LuisaIwas = "Solía estar en el coro de la escuela";
var LuisaIlike = "Me encanta la música clásica, es mi favorita, pero ahora me encanta desarrollar software";
var LuisaWhoAreU = "Pero dime, quién eres tú cómo te llamas";
var LuisaLongName = "Wow, así se llamaba un familiar, aunque me imagino que tendrás uno más corto ";
var LuisaShortName = "qué lindo nombre, fácil de recordar ";
var LuisaNice2mtULong = "no hay problema, lo recordaré, si necesitas ayuda, ya sabes...hasta la próxima!!";
var LuisaNice2mtUShort = "Un placer, lo que se te ofrezca, estamos en contacto, hasta luego!!";

//Cathy Speeches

var Cathyhello = "Hola, yo soy Cathy";
var CathyIwas = "Solía estar en el equipo de porristas en el instituto que estudiaba";
var CathyIlike = "Me encanta viajar y hacer deporte de aventuras, pero cuando no, la programación es mi pasión";
var CathyWhoAreU = "Oye pero dime, cómo te llamas?";
var CathyLongName = "En serio!?!?!?, wow, espero poder recordarlo ";
var CathyShortName = "MVQB, prefiero los nombres cortos, en serio, así te recordaré mejor ";
var CathyNice2mtULong = "Aún así es un lindo nombre, un placer, espero podamos hablar más después, byee";
var CathyNice2mtUShort = "estamos en contacto, besos!";

//Arnold Speeches

var Arnoldhello = "Buenas tardes, puedes llamarme simplemente Arnold";
var ArnoldIwas = "Solía ser ingeniero en petroquímica, ahora me dedico a desarrollo de tiempo completo";
var ArnoldIlike = "Me encanta viajar y estar con mi familia, mis hijos son mi mayor bendición";
var ArnoldWhoAreU = "Me gustaría conocer más de tí, cúal es tu nombre";
var ArnoldLongName = "Vaya, es un nombre largo, pero no hay problema, tengo excelente memoria ";
var ArnoldShortName = "Mucho gusto, fácil de recordar ";
var ArnoldNice2mtULong = "Estaremos en contacto, si necesitas más información, estoy a tu disposición";
var ArnoldNice2mtUShort = "Lo que necesites estamos en contacto, saludos!";

var personSelected = document.querySelectorAll(".listOfFriends button");
document.querySelector('.myNameIs').style.display = "none"

personSelected.forEach(function(selected) {

  selected.addEventListener('click', function(e) {


    console.log(e.currentTarget.value);
    if (e.currentTarget.value === 'Peter') {

      document.querySelector('.selectGuy').textContent = e.currentTarget.value;
      var image = "<img class='pictureOfGuy' src='./images/" + e.currentTarget.dataset.img + "' />"

      document.querySelector('#second-headder .imageSpace').innerHTML = image;

      setTimeout(function() {
        document.querySelector('.hello').textContent = Peterhello;
      }, TIME_WAIT_1);
      setTimeout(function() {
        document.querySelector('.iWas').textContent = PeterIwas;
      }, TIME_WAIT_2);
      setTimeout(function() {
        document.querySelector('.iLike').textContent = PeterIlike;
      }, TIME_WAIT_3);
      setTimeout(function() {
        document.querySelector('.whoRU').textContent = PeterWhoAreU;
        document.querySelector('.myNameIs').style.display = "block";
      }, TIME_WAIT_4);

      document.querySelector('.Iam').addEventListener('click', function(clicked){

        var enterMyName = document.querySelector('.thisIsMyName');
        var myName = enterMyName.value;

        //Peter

        if (myName.length <= 6) {
          var counter = 2;
          function running() {
            counter--;

            if (counter < 0) {
              clearInterval(time);
              document.querySelector('.longShortName').textContent = PeterShortName +myName;
              document.querySelector('.nice2mtU').textContent = PeterNice2mtUShort;
            }
          }
          var time = setInterval(running, 1000);

        } else {
          var counter = 2;
          function running() {
            counter--;

            if (counter < 0) {
              clearInterval(time);
              document.querySelector('.longShortName').textContent = PeterLongName + myName + "!?!?!?";
              document.querySelector('.nice2mtU').textContent = PeterNice2mtULong
            }
          }
          var time = setInterval(running, 1000);
        }
      })
    }

    // Luisa

    if (e.currentTarget.value === 'Luisa') {

      document.querySelector('.selectGuy').textContent = e.currentTarget.value;
      var image = "<img class='pictureOfGuy' src='./images/" + e.currentTarget.dataset.img + "' />"

      document.querySelector('#second-headder .imageSpace').innerHTML = image;

      setTimeout(function() {
        document.querySelector('.hello').textContent = Luisahello;
      }, TIME_WAIT_1);
      setTimeout(function() {
        document.querySelector('.iWas').textContent = LuisaIwas;
      }, TIME_WAIT_2);
      setTimeout(function() {
        document.querySelector('.iLike').textContent = LuisaIlike;
      }, TIME_WAIT_3);
      setTimeout(function() {
        document.querySelector('.whoRU').textContent = LuisaWhoAreU;
        document.querySelector('.myNameIs').style.display = "block";
      }, TIME_WAIT_4);

      document.querySelector('.Iam').addEventListener('click', function(clicked){

        var enterMyName = document.querySelector('.thisIsMyName');
        var myName = enterMyName.value;


        if (myName.length <= 6) {
          var counter = 1;
          function running() {
            counter--;

            if (counter < 0) {
              clearInterval(time);
              document.querySelector('.longShortName').textContent = LuisaShortName + myName;
              document.querySelector('.nice2mtU').textContent = LuisaNice2mtUShort;
            }
          }
          var time = setInterval(running, 1000);

        } else {
          var counter = 1;
          function running() {
            counter--;

            if (counter < 0) {
              clearInterval(time);
              document.querySelector('.longShortName').textContent = LuisaLongName + myName;
              document.querySelector('.nice2mtU').textContent = LuisaNice2mtULong;
            }
          }
          var time = setInterval(running, 1000);
        }
      })
    }
    // Cathy

    if (e.currentTarget.value === 'Cathy') {

      document.querySelector('.selectGuy').textContent = e.currentTarget.value;
      var image = "<img class='pictureOfGuy' src='./images/" + e.currentTarget.dataset.img + "' />"

      document.querySelector('#second-headder .imageSpace').innerHTML = image;

      setTimeout(function() {
        document.querySelector('.hello').textContent = Cathyhello;
      }, TIME_WAIT_1);
      setTimeout(function() {
        document.querySelector('.iWas').textContent = CathyIwas;
      }, TIME_WAIT_2);
      setTimeout(function() {
        document.querySelector('.iLike').textContent = CathyIlike;
      }, TIME_WAIT_3);
      setTimeout(function() {
        document.querySelector('.whoRU').textContent = CathyWhoAreU;
        document.querySelector('.myNameIs').style.display = "block";
      }, TIME_WAIT_4);

      document.querySelector('.Iam').addEventListener('click', function(clicked){

        var enterMyName = document.querySelector('.thisIsMyName');
        var myName = enterMyName.value;


        if (myName.length <= 6) {
          var counter = 1;
          function running() {
            counter--;

            if (counter < 0) {
              clearInterval(time);
              document.querySelector('.longShortName').textContent = CathyShortName + myName + "!!";
              document.querySelector('.nice2mtU').textContent = CathyNice2mtUShort;
            }
          }
          var time = setInterval(running, 1000);

        } else {
          var counter = 1;
          function running() {
            counter--;

            if (counter < 0) {
              clearInterval(time);
              document.querySelector('.longShortName').textContent = CathyLongName + myName + "...";
              document.querySelector('.nice2mtU').textContent = CathyNice2mtULong;
            }
          }
          var time = setInterval(running, 1000);
        }
      })
    }

    //Arnold

    if (e.currentTarget.value === 'Arnold') {

      document.querySelector('.selectGuy').textContent = e.currentTarget.value;
      var image = "<img class='pictureOfGuy' src='./images/" + e.currentTarget.dataset.img + "' />"

      document.querySelector('#second-headder .imageSpace').innerHTML = image;

      setTimeout(function() {
        document.querySelector('.hello').textContent = Arnoldhello;
      }, TIME_WAIT_1);
      setTimeout(function() {
        document.querySelector('.iWas').textContent = ArnoldIwas;
      }, TIME_WAIT_2);
      setTimeout(function() {
        document.querySelector('.iLike').textContent = ArnoldIlike;
      }, TIME_WAIT_3);
      setTimeout(function() {
        document.querySelector('.whoRU').textContent = ArnoldWhoAreU;
        document.querySelector('.myNameIs').style.display = "block";
      }, TIME_WAIT_4);

      document.querySelector('.Iam').addEventListener('click', function(clicked){

        var enterMyName = document.querySelector('.thisIsMyName');
        var myName = enterMyName.value;


        if (myName.length <= 6) {
          var counter = 1;
          function running() {
            counter--;

            if (counter < 0) {
              clearInterval(time);
              document.querySelector('.longShortName').textContent = ArnoldShortName + myName + ".";
              document.querySelector('.nice2mtU').textContent = ArnoldNice2mtUShort;
            }
          }
          var time = setInterval(running, 1000);

        } else {
          var counter = 1;
          function running() {
            counter--;

            if (counter < 0) {
              clearInterval(time);
              document.querySelector('.longShortName').textContent = ArnoldLongName + myName + ".";
              document.querySelector('.nice2mtU').textContent = ArnoldNice2mtULong;
            }
          }
          var time = setInterval(running, 1000);
        }
      })
    }
//fin Botones

  })
})

//función Botón reset

var resetButton = document.querySelector('.resetButton');

resetButton.addEventListener('click', function() {
  document.querySelector('.hello').textContent = "";
  document.querySelector('.iWas').textContent = "";
  document.querySelector('.iLike').textContent = "";
  document.querySelector('.whoRU').textContent = "";
  document.querySelector('.longShortName').textContent = "";
  document.querySelector('.nice2mtU').textContent = "";
  document.querySelector('.selectGuy').textContent = "";

  document.querySelector('.thisIsMyName').value ="";
  document.querySelector('.myNameIs').style.display = "none";

  document.querySelector('.imageSpace').innerHTML = "";

})
