const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

let autores = [{
    nome: 'Guimarães Rosa',
    nacionalidade: 'Brasileiro',
    nascimento: '27/06/1908',
    generos: ['Romance', 'Conto', 'Poesia']
},
{
    nome: 'Monteiro Lobato',
    nacionalidade: 'Brasileiro',
    nascimento: '18/04/1882',
    generos: ['Romance', 'Infantil']
},
{
    nome: 'Monteiro Lobato',
    nacionalidade: 'Brasileiro',
    nascimento: '18/04/1882',
    generos: ['Romance', 'Infantil']
}
]

let livros = [{
    titulo: 'Reinações de Narizinho',
    ano: 1931,
    n_paginas: 126,
    edicao: 2,
    editora: 'Globo'
},
{
    titulo: 'O picapau Amarelo',
    ano: 1939,
    n_paginas: 147,
    edicao: 3,
    editora: 'Globo'
},
{
    titulo: 'Sagarana',
    ano: 1946,
    n_paginas: 268,
    edicao: 7,
    editora: 'Abril'
}
]

biblioteca = []

app.get('/', function(req, res){
    res.send("<h1>Hello world!</h1>");
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
    console.log('Server iniciado na porta: ' + PORT);
});