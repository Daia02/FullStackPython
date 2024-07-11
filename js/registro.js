const { createApp } = Vue;

createApp({
    data() {
        return {
            usuarios: [],
            url: 'https://daiana2024.pythonanywhere.com/usuarios',
            error: false,
            cargando: true,
            nombreUsuario: "",
            nombre: "",
            apellido: "",
            contrasenia: "",
            repetirContrasenia: "",
            email: "",
            edad: null,
            imagenData: null,
        };
    },
    methods: {
        cargarImagen(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                this.imagenData = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        grabar() {
            if (this.contrasenia !== this.repetirContrasenia) {
                alert("Las contraseñas no coinciden");
                return;
            }

            let usuario = {
                nombreUsuario: this.nombreUsuario,
                nombre: this.nombre,
                apellido: this.apellido,
                contrasenia: this.contrasenia,
                edad: this.edad,
                email: this.email,
                imagen: this.imagenData,
            };

            console.log(email);  // Verificar los datos antes de enviar

            var options = {
                body: JSON.stringify(usuario),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow',
            };

            fetch(this.url, options)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Error al grabar el usuario");
                    }
                    alert("Registro grabado exitosamente");
                    window.location.href = "./usuarios.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al grabar el usuario. Por favor, inténtelo de nuevo más tarde.");
                });
        }
    }
}).mount('#app');

