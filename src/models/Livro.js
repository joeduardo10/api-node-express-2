import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
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
      enum:{
        values:["Casa do código", "Alura"],
        message: "A editora {VALUE} informada não é um valor permitido"
      }
    },
    numeroPaginas:
     {
      type: Number,
      min: [5,"Valor informado:{VALUE} - O numero de paginas deve estar entre 5 e 5000"],
      max: [5000,"Valor informado:{VALUE} - O numero de paginas deve estar entre 5 e 5000"]
    }
     
  }
);

const livros= mongoose.model('livros', livroSchema);

export default livros;