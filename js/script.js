document.addEventListener("DOMContentLoaded", function() {
  // Cargar el contenido del header
  document.querySelector("header").innerHTML = `
  <div class="main-header">
      <a class="main-logo" href="https://inquiet.empretienda.com.ar/">
          <strong>Inquiet</strong>
      </a>
      <nav id="nav" class="main-nav">
          <div class="nav-links">
              <a class="link-item" href="index.html">Home</a>
              <a class="link-item" href="carrito.html">Productos</a>
              <div class="dropdown" id="admin-dropdown">
                  <a class="link-item dropbtn" id="admin-link" href="#">Administrador <i class="fas fa-caret-down"></i></a>
                  <div class="dropdown-content">
                      <a class="dropdown-item" href="productos.html">Productos</a>
                      <a class="dropdown-item" href="usuarios.html">Registrados</a>
                      <a class="dropdown-item" id="logout-link" href="#">Cerrar sesión</a>
                  </div>
              </div>
              <a class="link-item" id="auth-link" href="login.html">Acceder</a>
          </div>
      </nav>
      <button id="button-menu" class="button-menu">
          <span></span>
          <span></span>
          <span></span>
      </button>
  </div>
`;

// Verificar si el usuario es admin
var isAdmin = localStorage.getItem('isAdmin');

// Mostrar u ocultar el enlace CRUD y cambiar el enlace de autenticación
if (isAdmin === 'true') {
  document.getElementById('auth-link').style.display = 'none';
  document.getElementById('logout-link').addEventListener('click', function() {
      // Limpiar el localStorage y redirigir al login
      localStorage.removeItem('isAdmin');
      window.location.href = 'login.html';
  });
} else {
  document.getElementById('admin-dropdown').style.display = 'none';
}

// Mostrar el menú al hacer clic en el botón
document.getElementById('button-menu').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('show');
});



    document.querySelector("footer").innerHTML = 
`

    <div class="footer">
    <div class="footer__addr">
      <h1 class="footer__logo"></h1>
          
      <h2>Contacto</h2>
      
      <address>
       Telefono : +54 1112547895<br>
            
        <a class="footer__btn" href="mailto:example@gmail.com">Enviar email</a>
      </address>
    </div>
    
    <ul class="footer__nav">
      <li class="nav__item">
        <h2 class="nav__title">Conocenos</h2>
  
        <ul class="nav__ul">
          <li>
            <a href="https://inquiet.empretienda.com.ar/">Tienda Online</a>
          </li>
  
          <li>
            <a href="https://Whatsapp.com">Whatsapp</a>
          </li>
              
          <li>
            <a href="https://Instagram.com">Instagram</a>
          </li>
        </ul>
      </li>
      
      <li class="nav__item nav__item--extra">
        <h2 class="nav__title">Servicios</h2>
        
        <ul class="nav__ul nav__ul--extra">
          <li>
            <a href="#">Registro</a>
          </li>
          
          <li>
            <a href="#">Reportar  un problema</a>
          </li>
          
          <li>
            <a href="#">Preguntas frecuentes</a>
          </li>
          
        </ul>
      </li>
      
      <li class="nav__item">
        <h2 class="nav__title">Legal</h2>
        
        <ul class="nav__ul">
          <li>
            <a href="#">Politicas de privacidad</a>
          </li>
          
          <li>
            <a href="#">Condiciones</a>
          </li>
          
          <li>
            <a href="https://maps.app.goo.gl/1gjY42d5dRyfASgQA">Mapa</a>
          </li>
        </ul>
      </li>
    </ul>
    
    <div class="legal">
      <p>&copy; 2024 Codo a codo. Derechos Reservados.</p>
      
      <div class="legal__links">
      
    </div>
    </div>
    </div>
    `;
    


    const toggleButton = document.getElementById('button-menu');
    const navWrapper = document.getElementById('nav');

    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('close');
        navWrapper.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!navWrapper.contains(e.target) && e.target !== toggleButton) {
            navWrapper.classList.remove('show');
            toggleButton.classList.remove('close');
        }
    });
});




function getResult() {
    // Obtener las respuestas seleccionadas
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    // Contadores para cada tipo de respuesta
    let countA = 0, countB = 0, countC = 0, countD = 0;

    // Contar respuestas
    answers.forEach(answer => {
        switch(answer.value) {
            case 'A':
                countA++;
                break;
            case 'B':
                countB++;
                break;
            case 'C':
                countC++;
                break;
            case 'D':
                countD++;
                break;
        }
    });

    // Determinar el tipo de piel basado en la mayoría
    let skinType = '';
    if (countA > countB && countA > countC && countA > countD) {
        skinType = "Piel normal";
    } else if (countB > countA && countB > countC && countB > countD) {
        skinType = "Piel seca";
    } else if (countC > countA && countC > countB && countC > countD) {
        skinType = "Piel grasa";
    } else {
        skinType = "Piel mixta";
    }

    // Mostrar resultado
    const resultDiv = document.getElementById('result');
   
    
    // Redirigir a la página correspondiente según el tipo de piel
    switch (skinType) {
  case "Piel seca":
      window.location.href = './Piel_Seca/index.html';
      break;
  case "Piel normal":
      window.location.href = './Piel_Normal/index.html';
      break;
  case "Piel grasa":
      window.location.href = './Piel_Grasa/index.html';
      break;
 case "Piel mixta":
        window.location.href = './Piel_Mixta/index.html';
        break;
  default:
      // En caso de un resultado desconocido, redirigir a una página de error
      window.location.href = 'error.html';
}
}

/*
document.getElementById('submitBtn').addEventListener('click', function(event) {
  event.preventDefault(); // Evitar que el enlace funcione como un enlace normal

  // Obtener los valores del formulario
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Verificar las credenciales
  if (username === 'admin' && password === 'admin123') {
      // Redirigir al usuario a la página de administrador u otra página segura
      window.location.href = 'index.html'; // Cambiar a la página adecuada
  } else {
      alert('Credenciales incorrectas. Inténtalo de nuevo.'); // Mostrar mensaje de error
  }
});*/

document.getElementById('submitBtn').addEventListener('click', function(event) {
  event.preventDefault(); // Evitar que el enlace funcione como un enlace normal

  // Obtener los valores del formulario
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Verificar las credenciales
  if (username === 'admin' && password === 'admin123') {
      // Guardar la información del usuario en localStorage
      localStorage.setItem('isAdmin', 'true');

      // Redirigir al usuario a la página principal
      window.location.href = 'index.html';
  } else {
      alert('Credenciales incorrectas. Inténtalo de nuevo.'); // Mostrar mensaje de error
  }
});