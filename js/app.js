const { createApp } = Vue;
createApp({
  data() {
    return {
      url: "https://daiana2024.pythonanywhere.com/productos",
      datos: [],
      error: false,
      searchQuery: '', // Añadir el campo de búsqueda
    };
  },
  computed: {
    filteredDatos() {
      // Filtrar los productos basándose en el campo de búsqueda
      return this.datos.filter(producto => {
        return producto.nombre.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.datos = data;
        })
        .catch(error => {
          console.error("Error:" + error);
          this.error = true;
        });
    },
    agregarAlCarrito(producto) {
      if (producto.stock > 0) {
        // Reducir el stock del producto localmente
        producto.stock--;

        // Actualizar el stock del producto en la API
        fetch(`${this.url}/${producto.id}`, {
          method: 'PUT', // Método PUT para actualizar
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...producto,
          }),
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(`Stock actualizado en la API: ${producto.nombre}`);
          // Aquí podrías implementar lógica adicional, como actualizar los datos locales si fuera necesario
        })
        .catch(error => {
          console.error("Error al actualizar el stock en la API:", error);
          // Volver a aumentar el stock localmente si la solicitud falla
          producto.stock++;
          alert("Error al actualizar el stock en la API");
        });

        // No es necesario forzar la actualización de la vista
        // this.$forceUpdate();
      } else {
        alert("No hay suficiente stock disponible");
      }
    }
  },
  created() {
    this.fetchData(this.url);
  },
}).mount('#app');
