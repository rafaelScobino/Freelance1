//aboutUs Img and Text changer
const aboutImg = document.getElementById('aboutImgs');
const aboutImgsTitle = document.getElementById('aboutImgsTitle');
var imgIndex = 0

function changeAboutImg (index){
    switch(index){
        case 1:
            aboutImg.setAttribute('class','img1');
            aboutImgsTitle.innerText = 'Projetos Especializados'
                break;
        case 2:
            aboutImg.setAttribute('class','img2');
            aboutImgsTitle.innerText = 'Excelência em Engenharia'
                break;
        case 3:
            aboutImg.setAttribute('class','img3');
            aboutImgsTitle.innerText = 'Qualificação em Mão de Obra'
                break;
        default:
            aboutImg.setAttribute('class','img2');
            aboutImgsTitle.innerText = 'Excelência em Engenharia'
                break;;
    }
    if(index > 3){
        imgIndex = 1
    }else{
        imgIndex = index + 1
    }
    console.log(imgIndex)
}

setInterval(() => {changeAboutImg(imgIndex);},3000)

//carousel variables and functions
var currentIndex = 0
const totalCards = document.querySelectorAll('.carousel-item').length;

function carouselSlide(index){
    const carouselInner = document.querySelector('.carousel-inner');
    const cardWidth = document.querySelector('.carousel-item').clientWidth;
    const newWidth = -index * cardWidth + 'px';

    carouselInner.style.transform = 'translateX('+ newWidth + ')';

    console.log('carouselSlide called with index:', index);
}

function prevSlide(){

    currentIndex = (currentIndex - 3 + totalCards) % totalCards; 
    carouselSlide(currentIndex);
}

function nextSlide(){
    currentIndex = (currentIndex + 3)  % totalCards;
    carouselSlide(currentIndex);
}

setInterval(() => {nextSlide();},3000);
