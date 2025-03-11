// Datos de usuario simulados (esto NO es seguro en un entorno real)
const usuarios = [
    { username: "admin", password: "admin123" },
    { username: "usuario", password: "clave123" }
];

// Obtener referencias a los elementos del DOM
const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');
const imageContainer = document.getElementById('imageContainer');

// Manejar el envío del formulario
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores ingresados por el usuario
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Buscar el usuario en la lista de usuarios
    const usuario = usuarios.find(user => user.username === username);

    // Verificar si el usuario existe y si la contraseña coincide
    if (usuario && usuario.password === password) {
        // Mostrar mensaje de éxito
        message.textContent = "¡Inicio de sesión exitoso! Redirigiendo...";
        message.style.color = "green";
        setTimeout(() => {
        window.location.href = "compras.html";
    }, 2000); // Redirigir después de 2 segundos

        // Mostrar el contenedor de imágenes
        imageContainer.style.display = "block";

        // Llamar a la función para mostrar imágenes
        mostrarImagenes();
    } else {
        // Mostrar mensaje de error si las credenciales son incorrectas
        message.textContent = "Usuario o contraseña incorrectos.";
        message.style.color = "red";
    }
});

// Función para mostrar imágenes de forma creativa
function mostrarImagenes() {
    // Lista de imágenes (rutas relativas o absolutas)
    const imagenes = [
        "tienda.jpg",
        "frutas_y_verduras.jpg",
        "cereales.jpg",
        "semillas.jpg"
    ];

    // Limpiar el contenedor de imágenes (por si ya había contenido)
    imageContainer.innerHTML = "";

    // Recorrer la lista de imágenes y agregarlas al contenedor
    imagenes.forEach((imagen) => {
        const imgElement = document.createElement('img');
        imgElement.src = imagen;
        imgElement.alt = "Imagen";
        imageContainer.appendChild(imgElement);
    });
}