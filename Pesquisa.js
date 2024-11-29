document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const wishlistBtn = document.getElementById('wishlistBtn');
    const cartBtn = document.getElementById('cartBtn');

    wishlistBtn.addEventListener('click', function() {
        alert('Adicionado à lista de desejos!');
    });

    cartBtn.addEventListener('click', function() {
        alert('Adicionado ao carrinho!');
    });

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') { // Verifica se a tecla pressionada foi Enter
            const query = searchInput.value.trim().toLowerCase(); // Captura o valor da busca
            if (query === 'left 4 dead') {
                window.location.href = ''; // Altere para a URL que você deseja redirecionar
            } else {
                alert('Jogo não encontrado.'); // Mensagem para pesquisa não encontrada
            }
        }
    });
});

function updatePriceRange(value) {
    const priceMax = document.getElementById('price-max');
    priceMax.textContent = `R$ ${value}`;
}
