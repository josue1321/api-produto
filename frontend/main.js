const apiUrl = 'https://localhost:7019/api/Produto/';

document.addEventListener('DOMContentLoaded', carregarProdutos);

const modal = document.getElementById('edit-modal');
const closeModal = document.querySelector('.close');
const editForm = document.getElementById('edit-form');

document.getElementById('product-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('name').value;
    const descricao = document.getElementById('description').value;
    const quantidade = document.getElementById('quantity').value;
    const preco = document.getElementById('price').value;

    const produto = { nome, descricao, quantidade, preco };

    criarProduto(produto);
});

function carregarProdutos() {
    fetch(apiUrl)
        .then(res => res.json())
        .then(produtos => {
            const listaProdutos = document.getElementById('product-items');
            listaProdutos.innerHTML = '';
            produtos.forEach(produto => {
                const elementoProduto = document.createElement('div');
                elementoProduto.className = 'product';
                elementoProduto.innerHTML = `
                    <div class="product-details">
                        <h3>${produto.nome}</h3>
                        <p>${produto.descricao}</p>
                        <p>Quantidade: ${produto.quantidade}</p>
                        <p>Preço: R$${produto.preco.toFixed(2)}</p>
                    </div>
                    <div class="product-actions">
                        <button onclick="abrirModal('${produto.id}')">Editar</button>
                        <button onclick="deletarProduto('${produto.id}')">Excluir</button>
                    </div>
                `;
                listaProdutos.appendChild(elementoProduto);
            });
        });
}

function criarProduto(produto) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(produto),
    })
        .then(() => {
            document.getElementById('product-form').reset();
            carregarProdutos();
        });
}

function atualizarProduto(produto) {
    fetch(`${apiUrl}${produto.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify(produto),
    })
        .then(() => {
            fecharModal();
            carregarProdutos();
        });
}

function deletarProduto(id) {
    fetch(`${apiUrl}${id}`, {
        method: 'DELETE',
    })
        .then(() => carregarProdutos());
}

function abrirModal(id) {
    fetch(`${apiUrl}${id}`)
        .then(res => res.json())
        .then(produto => {
            document.getElementById('edit-product-id').value = produto.id;
            document.getElementById('edit-name').value = produto.nome;
            document.getElementById('edit-description').value = produto.descricao;
            document.getElementById('edit-quantity').value = produto.quantidade;
            document.getElementById('edit-price').value = produto.preco;
            modal.style.display = 'block';
        });
}

function fecharModal() {
    modal.style.display = 'none';
}

closeModal.addEventListener('click', fecharModal);

editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const id = document.getElementById('edit-product-id').value;
    const nome = document.getElementById('edit-name').value;
    const descricao = document.getElementById('edit-description').value;
    const quantidade = document.getElementById('edit-quantity').value;
    const preco = document.getElementById('edit-price').value;

    const produto = { id, nome, descricao, quantidade, preco };

    atualizarProduto(produto);
});
