import { renderFilter } from "./renderFilter.js";

export function searchFilter(products) {
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {
        

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredProducts = products.filter(function (products) {
            if (products.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        renderFilter(filteredProducts);
    };
}