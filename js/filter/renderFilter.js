export function renderFilter(productsToRender) {
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = "";

    productsToRender.forEach(function (product) {
        productContainer.innerHTML += `<div class="filter">
                                        <h4>${product.title}</h4>
                                    </div>`;
    });
}