let nomeAmigo = document.getElementById("amigo").value;

let listaNomes = [];

function adicionarAmigo()
{
    nomeAmigo = document.getElementById("amigo").value;
    $listaNomes.push(nomeAmigo);
    console.log($listaNomes);

    nomeAmigo = document.getElementById("amigo").value.trim;
    
    if(nomeAmigo == "")
    {
        alert("Digite um nome válido!");
        return;
    }

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

