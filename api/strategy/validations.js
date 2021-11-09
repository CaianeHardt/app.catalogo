const { InvalidArgumentError } = require('./error');


module.exports = {
  campoStringNaoNulo: (valor, name) => {
    if (typeof valor !== 'string' || valor === 0)
      throw new InvalidArgumentError(`É necessário preencher o campo ${name}!`);
  },

  campoTamanhoMinimo: (valor, name, minimo) => {
    if (valor.length < minimo)
      throw new InvalidArgumentError(
        `O campo ${name} precisa ser maior que ${minimo} caracteres!`
      );
  },

  campoTamanhoMaximo: (valor, name, maximo) => {
    if (valor.length > maximo)
      throw new InvalidArgumentError(
        `O campo ${name} precisa ser menor que ${maximo} caracteres!`
      );
  }
};
