import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: {
      type: String,
      required: [true, "O título do livro é obrigatorio"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'autores',
      required: [true, "O(a) autor(a) é obrigatório"]
    },
    editora: {
      type: String,
      required: [true, " Campo a editora é obrigatório"],
      enum: {
        values: ["Casa do código", "Alura"],
        message: "A editora {VALUE} informada não é um valor permitido"
      }
    },
    numeroPaginas:
    {
      type: Number,
      validate: {
        validator: (valor) => {
          return valor >= 5 && valor <= 5000;
        },
        message: "O número de páginas deve estar entre 5 e 5000 - corrija o valor informado: {VALUE} e tente novamente"
      }
    }
  }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;
// min: [5,"Valor informado:{VALUE} - O numero de paginas deve estar entre 5 e 5000"],
// max: [5000,"Valor informado:{VALUE} - O numero de paginas deve estar entre 5 e 5000"]