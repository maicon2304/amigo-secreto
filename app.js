let listaAmigoSecreto = [];

function adicionarAmigo() {
    let nomeAmigoSecreto = document.getElementById('amigo').value.trim();

    // Verifica se o campo está vazio
    if (nomeAmigoSecreto === '') {
        alert('Por favor, insira pelo menos um nome.');
        return;
    }

    // Verifica se o nome já está na lista
    if (listaAmigoSecreto.includes(nomeAmigoSecreto)) {
        alert('Este nome já está na lista!');
        return;
    }

    // Adiciona o nome à lista e atualiza a exibição
    listaAmigoSecreto.push(nomeAmigoSecreto);
    atualizarLista();
    limparCampo();
}

function limparCampo() {
    document.getElementById('amigo').value = '';
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de recriá-la

    // Adiciona cada nome da lista como um item (<li>) na tela
    listaAmigoSecreto.forEach(nome => {
        let itemLista = document.createElement('li');
        itemLista.textContent = nome;
        lista.appendChild(itemLista);
    });
}

function sortearAmigo() {
    if (listaAmigoSecreto.length === 0) {
        alert('Lista vazia, adicione pelo menos um nome para sortear!');
        return;
    }

    // Sorteia um nome aleatório
    let amigoSorteado = Math.floor(Math.random() * listaAmigoSecreto.length);
    let nomeSorteado = listaAmigoSecreto[amigoSorteado];

    // Exibe o resultado do sorteio 
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: ${nomeSorteado}`;
}

// Adicionar o nome usando a tecla enter
document.getElementById('amigo').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});
