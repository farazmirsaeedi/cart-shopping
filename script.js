const images = [
    { img: './assets/download.jpeg', title: 'Product 1', price: 10.99, quantity: 1 },
    { img: './assets/download (1).jpeg', title: 'Product 2', price: 19.99, quantity: 1 },
    { img: './assets/download (2).jpeg', title: 'Product 3', price: 29.99, quantity: 1 }

    // Add more image objects as needed
];

        const loop = document.getElementById('products');

        const createProductElement = (image) => {
            return `
            <div class="bg-white w-80 p-5 rounded-md flex flex-col gap-3 justify-start items-center">
                <img class="w-44 h-44" src="${image.img}" alt="">
                <h3 class="text-3xl">${image.title}</h3>
                <div class="flex justify-between items-center w-44">
                    <p>price: ${image.price} $</p>
                    <input class="bg-slate-600 w-14 rounded-md p-1 outline-0 text-white font-bold" type="number" value="${image.quantity}">
                </div>
            </div>
            `;
        };

        const productElements = images.map((image) => {
            return createProductElement(image);
        });

        loop.innerHTML = productElements.join('');