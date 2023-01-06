const { default: mongoose } = require('mongoose');
const mong = require('mongoose');

// Configurando o Mongoose
mong.connect('mongodb://0.0.0.0:27017/aprendendo', { useNewUrlParser: true }).then(()=> {
    console.log('MongoDB conectado')
}).catch((erro)=> {
    console.log('Erro ao se conectar: ' + erro)
})

const UserSchema = mong.Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    pais: {
        type: String
    }
});

// Collection
mong.model('usuarios', UserSchema);

const vik = mong.model('usuarios');

new vik({
    nome: "vik",
    sobrenome: "lex",
    idade: 12,
    pais:"gtland"
}).save().then(()=>{
    console.log("Cadastrado com sucesso!");
}).catch((err)=>{
    console.log("Infelizmente ocorreu o seguinte erro "+err);
});