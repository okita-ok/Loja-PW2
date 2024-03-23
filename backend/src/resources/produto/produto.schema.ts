import Joi from 'joi';

const produtoSchema = Joi.object().keys({
  nome: Joi.string().min(3).max(40).required(),
  preco: Joi.number().required(),
  estoque: Joi.number().integer().required(),
});

// const produto = {
//     nome: "asdasdasd",
//     preco: 34.12,
//     estoque: 10,
// }

// produtoSchema.validate(produto);

export default produtoSchema;
