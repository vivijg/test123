
import { baseUrl } from "./settings/api.js";



const productsUrl = baseUrl + "products";

(async function () {
    const container = document.querySelector(".product-container");

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        container.innerHTML = "";

        json.forEach(function (product) {
            container.innerHTML += `<div class="product" href="detail.html?id=${product.id}">
            <div class="products">
            <img class="product-img"src="http://localhost:1337${product.image.url}" />
            </div>
            <div class="info">
            <h4>${product.title}</h4>
            <p></p>
             <h5 class="price-p">NOK ${product.price}</h5>
             <p ">NOK ${product.description}</p>
          
           
             <a class="btn " href="details.html?id=" id="products">Buy Now</a>
            </div>
        </div>`;
        
      
    });
    
    } catch (error) {
        console.log(error);
       
    }

  
})();




