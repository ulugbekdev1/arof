// async function getProducts() {
//     try {
//         const response = await fetch('http://localhost:3000/new_products');  
//         const data = await response.json();
        
        
//         const productsContainer = document.getElementById("products");

//         data.forEach(product => {
//             const productCard = document.createElement("div");
//             productCard.className = "bg-white p-4 rounded-lg shadow-lg";

//             productCard.innerHTML = `
//                 <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover rounded-lg">
//                 <h2 class=" font-normal mt-2">${product.name}</h2>
//                 <p class="font-bold">${product.price} ${product.currency}</p>
//                 <p class="${product.stars}${product.rating}${product.reviews}"></p>
//                 <p class="${product.popular}">${product.popular ? 'Mashhur' : 'Oddiy'}</p>
//                 <p class="${product.new}">${product.new ? 'Yangi' : 'Eski'}</p>
//                 <button class="w-12/12 h-10 rounded-lg text-white bg-green-500">Savatga</button>
//             `;

//             productsContainer.appendChild(productCard);
//         });
//     } catch (error) {
//         console.error("Xatolik:", error);
//     }
// }

// getProducts();

// listContainer.addEventListener("click", function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         saveData();
//     }
// },false);


const  WrapperUsb  = document.querySelector('.usb-product')
const  Wrappernews  = document.querySelector('.news-product')
const  button = document.querySelector('#usb')

async function getnewsData() {
    try {
        const response = await fetch('http://localhost:3000/new_products'); // API dan ma'lumot olish
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // JSON formatga o‘girish
        console.log(data);
        data.map( item => {
            const newsCard = document.createElement('div');
            newsCard.className = 'card';
            newsCard.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <a href="#" class="btn btn-primary">Batafsil ma'lumot</a>
                </div>
            `;
            Wrappernews.appendChild(newsCard);
        })

    } catch (error) {
        console.error('Xatolik yuz berdi:', error);
    }
}


getnewsData()









button.addEventListener('click', () => {
 console.log('sss');
 Wrappernews.style.display = 'none'

 getUsbData()


 
})


async function getUsbData() {
    try {
        const response = await fetch('http://localhost:3000/USB-cabels'); // API dan ma'lumot olish
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // JSON formatga o‘girish
        console.log(data);
        data.map( item => {
            const usbCard = document.createElement('div');
            usbCard.className = 'card';
            usbCard.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <a href="#" class="btn btn-primary">Batafsil ma'lumot</a>
                </div>
            `;
            WrapperUsb.appendChild(usbCard);
        })

    } catch (error) {
        console.error('Xatolik yuz berdi:', error);
    }
}
