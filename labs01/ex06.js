class Data {
  constructor(dia, mes, ano) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }

  toString() {
    return `${this.dia}/${this.mes}/${this.ano}`;
  }
}

class Pessoa {
  constructor(nome, cpf, nascimento) {
    this.nome = nome;
    this.cpf = cpf;
    this.nascimento = nascimento; 
  }

  getNome() {
    return this.nome;
  }

  toString() {
    return `Nome: ${this.nome}, CPF: ${this.cpf}, Nascimento: ${this.nascimento.toString()}`;
  }
}

class Funcionario extends Pessoa {
  constructor(nome, cpf, nascimento, admissao, salario) {
    super(nome, cpf, nascimento);
    this.admissao = admissao; // Recebe instância da classe Data
    this.salario = salario;
  }

  getSalario() {
    return this.salario;
  }

  toString() {
    return `${super.toString()}, Admissão: ${this.admissao.toString()}, Salário: R$${this.salario}`;
  }
}

class Gerente extends Funcionario {
  constructor(nome, cpf, nascimento, admissao, salario, departamento, promocaoGerente) {
    super(nome, cpf, nascimento, admissao, salario);
    this.departamento = departamento;
    this.promocaoGerente = promocaoGerente; // Recebe instância da classe Data
  }

  getDepartamento() {
    return this.departamento;
  }

  toString() {
    return `${super.toString()}, Departamento: ${this.departamento}, Promovido em: ${this.promocaoGerente.toString()}`;
  }
}

// Testando a implementação do Exercício 6
const dataNasc = new Data(10, 5, 1980);
const dataAdm = new Data(1, 2, 2010);
const dataPromocao = new Data(15, 8, 2020);

const gerenteTeste = new Gerente("Roberto", 12345678900, dataNasc, dataAdm, 15000.0, 3, dataPromocao);
console.log(gerenteTeste.toString());