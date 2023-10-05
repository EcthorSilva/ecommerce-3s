var produtos = [
    {
        categoria: "Games",
        nome: "Console Sony Playstation 5",
        preco: "R$ 3.719,90",
        imagemSrc: "assets/images/products/p1.jpg"
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

// Selecione todas as divs com a classe containerProducts
var containers = document.querySelectorAll(".containerProducts");

// interage sobre o array de containers e adicione os produtos a cada um deles
containers.forEach(function (container) {
    // interage sobre o array de produtos e crie dinamicamente os elementos HTML para cada produto
    produtos.forEach(function (produto) {
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

        // Adicione os elementos HTML ao DOM
        divFoot.appendChild(divLeft);
        divFoot.appendChild(btnAddToCart);
        divDetalhes.appendChild(pCategoria);
        divDetalhes.appendChild(h4Nome);
        divDetalhes.appendChild(divFoot);
        divProduto.appendChild(img);
        divProduto.appendChild(divDetalhes);

        // Adicione o produto ao container
        container.appendChild(divProduto);
    });
});