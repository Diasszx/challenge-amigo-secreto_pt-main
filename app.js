let nomeAmigo = document.getElementById("amigo").value;

let listaNomes = [];

function verificarNome()
{
    if(nomeAmigo == "")
    {
        alert("Digite um nome válido!");
        return;
    }
}

function adicionarAmigo()
{
    nomeAmigo = document.getElementById("amigo").value;
    
    verificarNome(nomeAmigo);

    listaNomes.push(nomeAmigo);
    document.getElementById("amigo").value = "";
    
    atualizarLista();
}

function atualizarLista()
{
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    for(let i = 0; i < listaNomes.length; i++) 
    {
        let li = document.createElement("li");
        li.textContent = listaNomes[i];
        ul.appendChild(li);
    } 
}

function gerarNumeroAleatorio()
{
    let numeroEscolhido = Math.floor(Math.random() * listaNomes.length);
    return numeroEscolhido;
}

function sortearAmigo()
{
    let ul = document.getElementById("resultado");
    ul.innerHTML = "";

    ul.innerHTML = `O amigo secreto sorteado é: ${listaNomes[gerarNumeroAleatorio()]}`;
    console.log(gerarNumeroAleatorio());
}


