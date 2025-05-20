const persona = {
  nombre: "Artemio",
  edad: 21,
  direccion: {
    ciudad: "Qro",
    pais: "MX"
  }
};

const {nombre,edad,direccion: {ciudad} } = persona;

console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}`);
