const images = [
    { img: './assets/download.jpeg', title: 'Product 1', price: 10.99, quantity: 1 },
    { img: './assets/download (1).jpeg', title: 'Product 2', price: 19.99, quantity: 1 },
    { img: './assets/download (2).jpeg', title: 'Product 3', price: 29.99, quantity: 1 }


];

const loop = document.getElementById('products'),
    price = document.getElementById('price'),
    qty = document.getElementById('qty'),
    totan = document.getElementById('total'),
    button = document.getElementById('btn-estimate');


const createProductElement = (image) => {
    return `
            <div class="bg-white w-80 p-5 rounded-md flex flex-col gap-3 justify-start items-center">
                <img class="w-44 h-44" src="${image.img}" alt="">
                <h3 class="text-3xl">${image.title}</h3>
                <div class="flex justify-between items-center w-44">
                    <p id="price">price: ${image.price} $</p>
                    <input id="qty" class="bg-slate-600 w-14 rounded-md p-1 outline-0 text-white font-bold" type="number" value="${image.quantity}">
                    
                </div>
                <button class="py-1 px-3 bg-green-600 hover:bg-green-700 rounded-md text-white">in card</button>
            </div>
            `;
};

const productElements = images.map((image) => {
    return createProductElement(image);
});

loop.innerHTML = productElements.join('');

