// Array de produtos
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
        imagemSrc: "assets/images/products/p2.jpg"
    },
    {
        categoria: "Periféricos",
        nome: "Headset Gamer HyperX Cloud II",
        preco: "R$ 699,99",
        imagemSrc: "assets/images/products/p3.jpg"
    },
    {
        categoria: "Hardware",
        nome: "Processador AMD Ryzen 9 5900X",
        preco: "R$ 3.599,99",
        imagemSrc: "assets/images/products/p4.jpg"
    },
    {
        categoria: "Hardware",
        nome: "Placa Mãe MSI, Intel LGA 1700",
        preco: "R$ 769,99",
        imagemSrc: "assets/images/products/p5.jpg"
    },
    {
        categoria: "Computadores",
        nome: "Notebook Asus VivoBook 15 Intel Core i5-1135G7",
        preco: "R$ 3.443,99",
        imagemSrc: "assets/images/products/p6.jpg"
    },
    {
        categoria: "Hardware",
        nome: "Fonte Corsair CV750 750W",
        preco: "R$ 599,99",
        imagemSrc: "assets/images/products/p7.jpg"
    },
    {
        categoria: "Computadores",
        nome: "SSD 1 TB Kingston NV2, M.2 2280 PCIe",
        preco: "R$ 259,99",
        imagemSrc: "assets/images/products/p8.jpg"
    },
    {
        categoria: "Hardware",
        nome: "Teclado Mecânico Gamer HyperX Alloy MKW100",
        preco: "R$ 239,99",
        imagemSrc: "assets/images/products/p9.jpg"
    },
    {
        categoria: "Periféricos",
        nome: "Teclado Mecânico Gamer HyperX Alloy MKW100",
        preco: "R$ 239,99",
        imagemSrc: "assets/images/products/p10.jpg"
    },
];

/* HOMEPAGE */

// Selecione todas as divs com a classe containerProducts
var containers = document.querySelectorAll(".containerProducts");

// Itera sobre os containers e adiciona produtos a cada um deles
containers.forEach(function (container) {
    // Itera sobre os produtos e cria elementos HTML dinâmicos para cada produto
    produtos.forEach(function (produto) {
        // Cria um novo elemento div para representar o produto
        var divProduto = document.createElement("div");
        divProduto.className = "product";

        // Cria um elemento de imagem para o produto
        var img = document.createElement("img");
        img.src = produto.imagemSrc;
        img.alt = produto.nome;

        // Cria um elemento div para os detalhes do produto
        var divDetalhes = document.createElement("div");
        divDetalhes.className = "product-details";

        // Cria elementos para categoria, nome e preço do produto
        var pCategoria = document.createElement("p");
        pCategoria.textContent = produto.categoria;

        var h4Nome = document.createElement("h4");
        h4Nome.textContent = produto.nome;

        var divFoot = document.createElement("div");
        divFoot.className = "product-foot";

        var divLeft = document.createElement("div");
        divLeft.className = "left";
        divLeft.innerHTML = produto.preco;

        // Cria um botão para adicionar ao carrinho
        var btnAddToCart = document.createElement("button");
        btnAddToCart.className = "add-to-cart";
        btnAddToCart.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';

        // Adiciona os elementos HTML ao DOM
        divFoot.appendChild(divLeft); // Preço do produto
        divFoot.appendChild(btnAddToCart); // Botão de adicionar ao carrinho
        divDetalhes.appendChild(pCategoria); // Categoria do produto
        divDetalhes.appendChild(h4Nome); // Nome do produto
        divDetalhes.appendChild(divFoot); // Preço e botão de adicionar ao carrinho
        divProduto.appendChild(img); // Imagem do produto
        divProduto.appendChild(divDetalhes); // Detalhes do produto

        // Adiciona o produto ao container
        container.appendChild(divProduto);
    });
});

/* CARRINHO DE COMPRAS */

// Função para adicionar produto ao carrinho
function adicionarProdutoAoCarrinho(produto) {
    var carrinho = document.querySelector(".card-body");

    // Crie elementos HTML para o produto no carrinho
    var divRow = document.createElement("div");
    divRow.className = "row mb-4";

    var divCol1 = document.createElement("div");
    divCol1.className = "col-lg-3 col-md-12 mb-4 mb-lg-0";
    var img = document.createElement("img");
    img.src = produto.imagemSrc;
    img.className = "w-100";
    divCol1.appendChild(img);

    var divCol2 = document.createElement("div");
    divCol2.className = "col-lg-5 col-md-6 mb-4 mb-lg-0";
    var strongNome = document.createElement("strong");
    strongNome.textContent = produto.nome;
    var pCategoria = document.createElement("p");
    pCategoria.textContent = produto.categoria;
    divCol2.appendChild(strongNome);
    divCol2.appendChild(pCategoria);

    var divCol3 = document.createElement("div");
    divCol3.className = "col-lg-4 col-md-6 mb-4 mb-lg-0";
    var divQuantidade = document.createElement("div");
    divQuantidade.className = "d-flex-custom mb-4";
    var btnDiminuir = document.createElement("button");
    btnDiminuir.className = "btn-custum2 btn btn-primary px-3 me-2";
    btnDiminuir.innerHTML = '<i class="fas fa-minus"></i>';
    btnDiminuir.onclick = function () {
        var quantidadeInput = divQuantidade.querySelector('input[type=number]');
        quantidadeInput.stepDown();
    };
    var inputQuantidade = document.createElement("input");
    inputQuantidade.className = "form-control";
    inputQuantidade.type = "number";
    inputQuantidade.value = "1";
    inputQuantidade.min = "0";
    var btnAumentar = document.createElement("button");
    btnAumentar.className = "btn-custum2 btn btn-primary px-3 ms-2";
    btnAumentar.innerHTML = '<i class="fas fa-plus"></i>';
    btnAumentar.onclick = function () {
        var quantidadeInput = divQuantidade.querySelector('input[type=number]');
        quantidadeInput.stepUp();
    };
    divQuantidade.appendChild(btnDiminuir);
    divQuantidade.appendChild(inputQuantidade);
    divQuantidade.appendChild(btnAumentar);

    var pPreco = document.createElement("p");
    pPreco.className = "text-start text-md-center";
    var strongPreco = document.createElement("strong");
    strongPreco.textContent = produto.preco;
    pPreco.appendChild(strongPreco);

    // Adiciona um evento de clique ao botão de remoção
    btnRemover.addEventListener("click", function () {
        // Remove o item do carrinho
        carrinho.removeChild(divRow);
        carrinho.removeChild(hr);

        // Recalcular o valor total dos produtos após remover o item
        var totalProdutos = 0;
        var carrinhoProdutos = document.querySelectorAll(".card-body .row");
        carrinhoProdutos.forEach(function (produto) {
            var precoElement = produto.querySelector("div.col-lg-4.col-md-6.mb-4.mb-lg-0 p");
            if (precoElement) {
                var precoTexto = precoElement.textContent;
                var precoNumerico = parseFloat(precoTexto.replace("R$ ", "").replace(".", "").replace(",", "."));
                totalProdutos += precoNumerico;
            }
        });

        // Calcular novamente o valor à prazo, à vista e o valor das parcelas
        var valorPrazo = totalProdutos;
        var valorVista = totalProdutos * 0.7;
        var valorParcela = totalProdutos / 10;

        // Atualiza os elementos no HTML com os novos valores formatados
        document.querySelector("ul.list-group li:nth-child(1) span").textContent = "R$ " + formatarNumero(totalProdutos);
        document.querySelector("ul.list-group li:nth-child(3) span").textContent = "R$ " + formatarNumero(valorPrazo);
        document.querySelector("ul.list-group li:nth-child(5) span").textContent = "R$ " + formatarNumero(valorVista);
        document.querySelector("ul.list-group li:nth-child(7) div").textContent = "(em até 10x de R$ " + formatarNumero(valorParcela) + " sem juros)";
    });
}

// Função para formatar número com separador de milhares e decimais
function formatarNumero(numero) {
    return numero.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Função para atualizar o carrinho de compras
function atualizarCarrinho(produto) {
    // Adiciona o produto ao carrinho
    adicionarProdutoAoCarrinho(produto);

    // Calcula o valor total dos produtos no carrinho
    var totalProdutos = 0;
    var carrinhoProdutos = document.querySelectorAll(".card-body .row");
    carrinhoProdutos.forEach(function (produto) {
        var precoElement = produto.querySelector("div.col-lg-4.col-md-6.mb-4.mb-lg-0 p");
        if (precoElement) {
            var precoTexto = precoElement.textContent;
            var precoNumerico = parseFloat(precoTexto.replace("R$ ", "").replace(".", "").replace(",", "."));
            totalProdutos += precoNumerico;
        }
    });

    // Calcula valores relacionados aos pagamentos (à prazo, à vista, parcelas)
    var valorPrazo = totalProdutos; // Calcular o valor à prazo (mesmo que o total dos produtos)
    var valorVista = totalProdutos * 0.7; // Calcular o valor à vista com desconto de 30%
    var valorParcela = totalProdutos / 10; // Calcular o valor de cada parcela em 10 vezes sem juros

    // Atualiza os elementos no HTML com os novos valores formatados
    document.querySelector("ul.list-group li:nth-child(1) span").textContent = "R$ " + formatarNumero(totalProdutos);
    document.querySelector("ul.list-group li:nth-child(3) span").textContent = "R$ " + formatarNumero(valorPrazo);
    document.querySelector("ul.list-group li:nth-child(5) span").textContent = "R$ " + formatarNumero(valorVista);
    document.querySelector("ul.list-group li:nth-child(7) div").textContent = "(em até 10x de R$ " + formatarNumero(valorParcela) + " sem juros)";
}
