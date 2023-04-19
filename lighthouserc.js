module.exports = {
    ci: {
      collect: {
        startServerCommand: "npm run start",
        numberOfRuns: 1,
        // Agregar todas las urls a las que se le aplicarán las pruebas
        url: [
          "https://the-internet.herokuapp.com/login",
          "https://the-internet.herokuapp.com/checkboxes",
          "https://the-internet.herokuapp.com/dropdown",
        ],
      },
      upload: {
        target: "temporary-public-storage",
      },
    },
  };