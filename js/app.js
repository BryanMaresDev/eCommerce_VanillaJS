const productData = [
    {
        index: '01',
        name: 'yellow tracksuit',
        image: 'img1.jpg',
        des: 'yellow tracksuit'
    },
    {
        index: '02',
        name: 'designer outfit',
        image: 'img2.jpg',
        des: 'designer outfit'
    },
    {
        index: '03',
        name: 'chilling mood',
        image: 'img3.jpg',
        des: 'chilling mood'
    },
    {
        index: '04',
        name: 'sweater yellow',
        image: 'img4.jpg',
        des: 'sweater yellow'
    },
    {
        index: '05',
        name: 'blazer white',
        image: 'img5.jpg',
        des: 'blazer white'
    },
    {
        index: '06',
        name: 'young mode',
        image: 'img6.jpg',
        des: 'young mode'
    },
    {
        index: '07',
        name: 'love is love',
        image: 'img7.jpg',
        des: 'love is love'
    },
    {
        index: '08',
        name: 'sport mode',
        image: 'img8.jpg',
        des: 'sport mode'
    },
    {
        index: '09',
        name: 'office mode',
        image: 'img9.jpg',
        des: 'office mode'
    },
    {
        index: '10',
        name: 't-shirt white',
        image: 'img10.jpg',
        des: 't-shirt white'
    }
]

const nxtBtn = document.querySelector('.nxt-btn')
let smImgContainer = document.querySelector('.sm-product-img-container')
let smImg = document.querySelector('.sm-product-img')
let productIndex = document.querySelector('.product-index')
let smProductDes = document.querySelector('.sm-product-des')

let productImgContainer = document.querySelector('.product-img-container')
let productImg = document.querySelector('.product-img')
let backdropImg = document.querySelector('.backdrop-img')

let productDetail = document.querySelector('.product-detail')
let productName = document.querySelector('.product-name')
let productDes = document.querySelector('.product-des')

let currentProduct = 0

nxtBtn.addEventListener('click', () => {
    if(currentProduct >= productData.length - 1){
        currentProduct = 0
    }
    else{
        currentProduct++
    }

    productIndex.innerHTML = productData[currentProduct].index
    smProductDes.innerHTML = productData[currentProduct].des.slice(0, 80)
    
    smImgContainer.classList.add('slide')
    productImgContainer.classList.add('slide')
    backdropImg.classList.add('fade')
    productDetail.classList.add('fade')

    setTimeout( () => {
        productName.innerHTML = productData[currentProduct].name
        productDes.innerHTML = productData[currentProduct].des
        smImg.src = productImg.src = backdropImg.src = `img/${productData[currentProduct].image}`
    }, 1000) 

    setTimeout( () => {
        smImgContainer.classList.remove('slide')
        productImgContainer.classList.remove('slide')
        backdropImg.classList.remove('fade')
        productDetail.classList.remove('fade')
    }, 1000)
})
