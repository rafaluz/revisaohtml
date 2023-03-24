// ####### INTRODUÇÃO A JAVASCRIPT #######

// ####### VARIAVEIS E TIPOS DE DADOS (let e const)

// var nome = "Rafael Luz Araújo";
// const pi = 3.14;

// Let cria uma variavel que pode ter seu valor alterado e const cria uma variavel constante



// ####### OPERAÇÕES MATEMÁTICAS


// var m1 = 9;
// var m2 = 7;

// var media = (m1 + m2) / 2
// console.log("A média é ", media)


// ####### Estrutura Condicional (IF)

// if (media >= 7){
//     console.log("Aprovado")
// }else{
//     console.log("Aprovado")
// }

// ####### Estrutura de repetição 
    // FOR

    
    // for para percorrer uma lista de itens

    // alunos = ['Kedna', 'Daniele', 'Claudina', 'Tiago', 'Pedro', 'Luis']

    // for (item in alunos){
    //     console.log("Nome: ", alunos[item])
    // }


    // for para fazer um laço de tamanho determinado

    // for (let i = 0; i < 10; i++){
    //     console.log(i)
    // }

    // WHILE

    // let contador = 0
    // while (contador < 10){
    //     console.log(contador)
    //     contador++;
    // }


// ####### DOM (Modelo de Objeto de Documento)
    // document.getElementById("IdDoElemento")
    // document.querySelector("Elemento");

// O Javascript mapeia todos os elementos html em objetos que podem ser manipulados
// Quando um elemento possui um id, podemos chamar ele pelo seu id diretamente e fazer alguma ação, como alterar seu conteúdo:

// console.log(userName.textContent)

// nome = document.getElementById("userName")
// userName.textContent = "Luis"

// Alterar o conteudo de um elemento (textContent)


// ####### EVENTOS
    // onclick, onmouseover, etc...
// ####### FUNÇÕES

    // function nomeDaFuncao(let argumentos){
    //     // code
    // }

    
    // chamar a função
    // nomeDaFuncao()

    // Alterar cor

    // function changeColor(cor){
    //     userName.style.color = cor
    // }

    
    // Função para mostrar alert, sendo chamada com um clique de botão


//Arrow functions 
    // argumentos => {
    // }

    // (arg1, arg2) => {
    // }

    // () => {
    // }

// ####### CONSUMINDO API DO GITHUB (api.github.com)


function getProfileInfosGitHub(){
    const url = `https://api.github.com/users/rafaluz`
    fetch(url) // acessando a rota
    .then(response => response.json()) //pega o resultado e transforma em json
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        fotoperfil.src = data.avatar_url
    })
}

getProfileInfosGitHub()