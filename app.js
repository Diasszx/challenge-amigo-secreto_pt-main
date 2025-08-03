//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
 //<button class="button-add" onclick="adicionarAmigo()">Adicionar</button>

$nomeAmigo = document.getElementById("amigo").value;

$listaNomes = [];

function adicionarAmigo()
{
    let nomeAmigo = document.getElementById("amigo").value;
    $listaNomes.push(nomeAmigo);
    console.log($listaNomes);
}

