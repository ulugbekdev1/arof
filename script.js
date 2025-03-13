async function getProducts() {
    try {
        const response = await fetch('http://localhost:3000/new_products');  
        const data = await response.json();
        
        
        const productsContainer = document.getElementById("products");

        data.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "bg-white p-4 rounded-lg shadow-lg";

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover rounded-lg">
                <h2 class=" font-normal mt-2">${product.name}</h2>
                <p class="font-bold">${product.price} ${product.currency}</p>
                <p class="${product.stars}${product.rating}${product.reviews}"></p>
                <p class="${product.popular}">${product.popular ? 'Mashhur' : 'Oddiy'}</p>
                <p class="${product.new}">${product.new ? 'Yangi' : 'Eski'}</p>
                <button class="w-12/12 h-10 rounded-lg text-white bg-green-500">Savatga</button>
            `;

            productsContainer.appendChild(productCard);
        });
    } catch (error) {
        console.error("Xatolik:", error);
    }
}

getProducts();

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

