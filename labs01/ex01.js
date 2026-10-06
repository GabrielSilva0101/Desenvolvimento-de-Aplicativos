class VideoGame {
  constructor(marca, nControles, tipoMidia) {
    this.marca = marca;
    this.nControles = nControles;
    this.tipoMidia = tipoMidia;
    this.ligado = false; 
  }

  ligar(estado) {
    this.ligado = estado;
  }

  jogar() {
    if (this.ligado) {
      console.log(`Jogando no videogame da marca ${this.marca}...`);
    } else {
      console.log("Ligue o videogame primeiro.");
    }
  }

  salvarJogo() {
    console.log("Progresso salvo com sucesso!");
  }
}

const playstation = new VideoGame('sony', '2', 'dvd');
console.log(playstation);