const { createApp } = Vue;

createApp({
  data() {
    return {
      url: "https://daiana2024.pythonanywhere.com/usuarios",
      datos: [],
      error: false,
    };
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
  },
  created() {
    this.fetchData(this.url);
  },
}).mount('#app');

