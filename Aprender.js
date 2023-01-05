const mongoose = require('mongoose');

// Configurando o Mongoose
mongoose.connect('mongodb://0.0.0.0:27017/aprendendo').then(()=> {
    console.log('MongoDB conectado')
}).catch((err)=> {
    console.log('Erro ao se conectar: ' + err)
})