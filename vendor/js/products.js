// localStorage.clear();

var produtos = [
    {
        categoria: "Games",
        nome: "Console Sony Playstation 5",
        preco: "R$ 3.719,90",
        imagemSrc: "/assets/images/products/p1.jpg"
    },
    {
        categoria: "Hardware",
        nome: "Processador AMD Ryzen 5 5600G",
        preco: "R$ 779,31",
        imagemSrc: "/assets/images/products/p2.jpg"
    },
    {
        categoria: "Periféricos",
        nome: "Headset Gamer HyperX Cloud II",
        preco: "R$ 699,99",
        imagemSrc: "/assets/images/products/p3.jpg"
    },
    {
        categoria: "Hardware",
        nome: "Processador AMD Ryzen 9 5900X",
        preco: "R$ 3.599,99",
        imagemSrc: "/assets/images/products/p4.jpg"
    },
    {
        categoria: "Hardware",
        nome: "Placa Mãe MSI, Intel LGA 1700",
        preco: "R$ 769,99",
        imagemSrc: "/assets/images/products/p5.jpg"
    },
    {
        categoria: "Computadores",
        nome: "Notebook Asus VivoBook 15 Intel Core i5-1135G7",
        preco: "R$ 3.443,99",
        imagemSrc: "/assets/images/products/p6.jpg"
    },
    {
        categoria: "Hardware",
        nome: "Fonte Corsair CV750 750W",
        preco: "R$ 599,99",
        imagemSrc: "/assets/images/products/p7.jpg"
    },
    {
        categoria: "Computadores",
        nome: "SSD 1 TB Kingston NV2, M.2 2280 PCIe",
        preco: "R$ 259,99",
        imagemSrc: "/assets/images/products/p8.jpg"
    },
    {
        categoria: "Hardware",
        nome: "Teclado Mecânico Gamer HyperX Alloy MKW100",
        preco: "R$ 239,99",
        imagemSrc: "/assets/images/products/p9.jpg"
    },
    {
        categoria: "Periféricos",
        nome: "Teclado Mecânico Gamer HyperX Alloy MKW100",
        preco: "R$ 239,99",
        imagemSrc: "/assets/images/products/p10.jpg"
    },
];

/* HOMEPAGE */

// Selecione todas as divs com a classe containerProducts
var containers = document.querySelectorAll(".containerProducts");

// Interage sobre o array de containers e adicione os produtos a cada um deles
containers.forEach(function (container) {
    // Interage sobre o array de produtos e crie dinamicamente os elementos HTML para cada produto
    produtos.forEach(function (produto, index) {
        // Crie elementos HTML para o produto
        var divProduto = document.createElement("div");
        divProduto.className = "product";

        var img = document.createElement("img");
        img.src = produto.imagemSrc;
        img.alt = produto.nome;

        var divDetalhes = document.createElement("div");
        divDetalhes.className = "product-details";

        var pCategoria = document.createElement("p");
        pCategoria.textContent = produto.categoria;

        var h4Nome = document.createElement("h4");
        h4Nome.textContent = produto.nome;

        var divFoot = document.createElement("div");
        divFoot.className = "product-foot";

        var divLeft = document.createElement("div");
        divLeft.className = "left";
        divLeft.innerHTML = produto.preco;

        var btnAddToCart = document.createElement("button");
        btnAddToCart.className = "add-to-cart";
        btnAddToCart.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';

        // Adicione um evento de clique ao botão de adicionar ao carrinho
        btnAddToCart.addEventListener("click", function () {
            // Adiciona o produto ao carrinho
            adicionarAoCarrinho(produto, 1);
        });

        // Adicione os elementos HTML ao DOM
        divFoot.appendChild(divLeft); // Preço do produto
        divFoot.appendChild(btnAddToCart);
        divDetalhes.appendChild(pCategoria); // Categoria do produto
        divDetalhes.appendChild(h4Nome); // Nome do produto
        divDetalhes.appendChild(divFoot);
        divProduto.appendChild(img);
        divProduto.appendChild(divDetalhes);

        // Adicione o produto ao container
        container.appendChild(divProduto);
    });
});

// Função para adicionar ao carrinho
function adicionarAoCarrinho(produto, quantidade) {
    // Obtém o carrinho do localStorage ou cria um novo array vazio
    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Verifica se o produto já está no carrinho
    var produtoNoCarrinho = carrinho.find(item => item.nome === produto.nome);

    if (produtoNoCarrinho) {
        // Atualiza a quantidade se o produto já estiver no carrinho
        produtoNoCarrinho.quantidade += quantidade;
    } else {
        // Adiciona o produto ao carrinho
        carrinho.push({
            nome: produto.nome,
            categoria: produto.categoria,
            preco: produto.preco,
            imagemSrc: produto.imagemSrc, // Adiciona a imagemSrc
            quantidade: quantidade
        });
    }

    // Salva o carrinho no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // Log para verificar os itens no console
    console.log("Itens no carrinho:", carrinho);
}