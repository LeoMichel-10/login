// Función para validar la combinación introducida por el usuario
function validateCombination() {
  
    // Obtener el valor del campo de texto de la combinación
    var combination = document.getElementById("combination").value;
  
    // Comparar el valor con la contraseña única
    if (combination == "LmCopyStation793037498634+") {
  
      // Si son iguales, generar un PIN aleatorio de cuatro dígitos
      var pin = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  
      // Enviar el PIN al correo electrónico del usuario usando una API de correo electrónico
      // Aquí se usa SendGrid como ejemplo, pero se puede usar otra API
      // Se necesita una clave de API válida para usar SendGrid
      var apiKey = "SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
      var url = "https://api.sendgrid.com/v3/mail/send";
      var data = {
        "personalizations": [
          {
            "to": [
              {
                "email": "leomichellopezpuga@gmail.com"
              }
            ],
            "subject": "PIN de acceso"
          }
        ],
        "from": {
          "email": "noreply@bing.com"
        },
        "content": [
          {
            "type": "text/plain",
            "value": "Tu PIN de acceso es: " + pin
          }
        ]
      };
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Authorization", "Bearer " + apiKey);
      xhr.send(JSON.stringify(data));
  
      // Guardar el PIN en el almacenamiento local del navegador
      localStorage.setItem("pin", pin);
  
      // Mostrar un mensaje al usuario indicando que se ha enviado el PIN a su correo electrónico
      document.getElementById("message").innerHTML = "Se ha enviado el PIN a tu correo electrónico. Introdúcelo para acceder a la página web.";
  
      // Habilitar el campo de texto del PIN y deshabilitar el campo de texto de la combinación
      document.getElementById("pin").disabled = false;
      document.getElementById("combination").disabled = true;
  
      // Cambiar el evento onclick del botón de enviar para que llame a otra función
      document.getElementById("submit-button").setAttribute("onclick", "validatePin()");
  
    } else {
  
      // Si no son iguales, mostrar un mensaje de error y cancelar el envío del formulario
      document.getElementById("message").innerHTML = "La combinación es incorrecta. Inténtalo de nuevo.";
      event.preventDefault();
    }
  }
  
  // Función para validar el PIN introducido por el usuario
  function validatePin() {
  
    // Obtener el valor del campo de texto del PIN
    var pin = document.getElementById("pin").value;
  
    // Obtener el valor del PIN guardado en el almacenamiento local
    var storedPin = localStorage.getItem("pin");
  
    // Comparar los valores
    if (pin == storedPin) {
  
      // Si son iguales, redirigir al usuario a la página web que quiere editar
      window.location.href = "https://www.bing.com/..."; // Aquí se debe poner la URL de la página web que quieres editar
  
    } else {
  
      // Si no son iguales, mostrar un mensaje de error y cancelar el envío del formulario
      document.getElementById("message").innerHTML = "El PIN es incorrecto. Inténtalo de nuevo.";
      event.preventDefault();
    }
  }
  