class FuncionariosDoHospital {
  #nome;
  #numeroRestantesDeFerias;

  constructor(nome) {
    this.#nome = nome;
    this.#numeroRestantesDeFerias = 20; 
  }

  get nome() {
    return this.#nome;
  }

  get numeroRestantesDeFerias() {
    return this.#numeroRestantesDeFerias;
  }

  tirarFerias(num_dias) {
    this.#numeroRestantesDeFerias -= num_dias;
  }
}

class Medico extends FuncionariosDoHospital {
  #cpf;

  constructor(nome, cpf) {
    super(nome);
    this.#cpf = cpf;
  }
}

class Enfermeira extends FuncionariosDoHospital {
  #certificados;

  constructor(nome, certificados) {
    super(nome);
    this.#certificados = certificados; 
  }

  adicionarCertificado(certificado) {
    this.#certificados.push(certificado);
  }
}