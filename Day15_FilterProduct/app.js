// var mokData = 
// [{
//     img: './image/bmw.png',
//     name: 'BMW',
//     price: '$1000'
// },
// {
//     img: './image/bugatti.png',
//     name: 'bugatti',
//     price: '$2000'
// },
// {
//     img: './image/ferrari.png',
//     name: 'ferrari',
//     price: '$5000'
// },
// {
//     img: './image/ford.png',
//     name: 'ford',
//     price: '$3000'
// },
// {
//     img: './image/porsche.png',
//     name: 'porsche',
//     price: '$4000'
// }]

// var products = document.querySelector('.products');
// mokData.forEach(item=>{
//     var newProduct = document.createElement('div');
//     newProduct.classList.add('product')
//     newProduct.innerHTML = `<img src="${item.img}" alt="">
//                             <div class="info">
//                                 <div class="name">${item.name}</div>
//                                 <div class="price">${item.price}</div>
//                             </div>`
//     products.appendChild(newProduct);

// })

fetch('https://fakestoreapi.com/products').then(res=>res.json())
.then(data=>{
    console.log(data);
    var products = document.querySelector('.products');
    products.innerHTML = '';
    data.forEach(item=>{
    var newProduct = document.createElement('div');
    newProduct.classList.add('product')
    newProduct.innerHTML = `<img src="${item.image}" alt="">
                            <div class="info">
                                <div class="name">${item.title}</div>
                                <div class="price">${item.price}</div>
                            </div>`
    products.appendChild(newProduct);
    })
})

var searchInput = document.querySelector('.search input');
searchInput.addEventListener('input', function(e){
    console.log(e.target.value.trim());
    let txtsearch = e.target.value.trim().toLowerCase();
    var listProduct = document.querySelectorAll('.product');
    listProduct.forEach(item=>{
        if(item.innerText.toLowerCase().includes(txtsearch)){
            item.classList.remove('hiden');
        }else{
            item.classList.add('hiden');
        }
    })
    
})