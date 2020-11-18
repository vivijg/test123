
import { baseUrl } from "./settings/api.js";


const homeUrl = baseUrl + "home";

(async function () {
    const indexContainer = document.querySelector(".home-container");

    try {
        const response = await fetch(homeUrl);
        const json = await response.json();

        indexContainer.innerHTML = "";

            indexContainer.innerHTML = `<div class="banner" href="detail.html?id=${json.id}">                
            <img class="hero-banner" src="http://localhost:1337${json.hero_banner.url}" />
            <div class="quote-container">
            
  </div>
</div>`;
        
    } catch (error) {
        console.log(error);
       
    }
})();




