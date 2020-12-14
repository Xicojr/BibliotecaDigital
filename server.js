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
    editora: 'Globo',
    autor: 'Monteiro Lobato'
},
{
    titulo: 'O picapau Amarelo',
    ano: 1939,
    n_paginas: 147,
    edicao: 3,
    editora: 'Globo',
    autor: 'Monteiro Lobato'
},
{
    titulo: 'Sagarana',
    ano: 1946,
    n_paginas: 268,
    edicao: 7,
    editora: 'Abril',
    autor: 'Guimarães Rosa'
}
]

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('autor', function (req, res){
    const autor = req.body;

    for (var i = 0; i< autores.length; i++)  {
        if (autor === autores[i].nome){
            res.send("Autor já registrado");
            break;
        };
    };

    autores.push(autor);

    res.send("Autor registrado com sucesso!");
});

app.post('/livro', function (req, res){
    const livro = req.body;

    console.log(livro);

    livros.push(livro);
    
    res.send("Livro registrado com sucesso!");
});

app.put('/autor', function (req, res){
    const autor = req.body;

    for (var i =0; i< autores.length; i++)  {
        if (autor.nome === autores[i].nome){
            autores[i] = autor;
        };
    };

    res.send(autor.nome + " atualizado com sucesso!");
});

app.put('/livro', function (req, res){
    const livro = req.body;

    for (var i =0; i< livros.length; i++)  {
        if (livro.titulo === livros[i].titulo){
            livros[i] = livro;
        };
    };

    res.send(livro.titulo + " atualizado com sucesso!");
});

app.delete('/autor', function (req, res){
    const autor = req.body;

    for (var i =0; i< autores.length; i++)  {
        if (autor.nome === autores[i].nome){
            autores.splice(i, 1);
        };
    };

    res.send(autor.nome + " deletado com sucesso!");
});

app.delete('/livro', function (req, res){
    const livro = req.body;

    for (const i =0; i< livros.length; i++)  {
        if (livro.titulo === livros[i].titulo){
            livros.splice(i, 1);
        };
    };

    res.send(livro.titulo + " deletado com sucesso!");
});

app.get('/biblioteca', function(req, res){
    res.send(livros);
})

app.get('/autores', function(req, res){
    res.send(autores);
})

app.listen(PORT, function(){
    console.log("Servidor inicializado!")
});