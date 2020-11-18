

import { renderFilter } from "./filter/renderFilter.js";
import { searchFilter } from "./filter/searchFilter.js";
import { displayMessage } from "./filter/displayMessage.js";

const url = "http://localhost:1337/products";

async function getProducts() {
    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json.data);

        const product = json.data;

        renderFilter(product);
        searchFilter(product);
    } catch (error) {
        
        console.log(error);
        displayMessage("error", error, ".product-container");
    }
}

getProducts();