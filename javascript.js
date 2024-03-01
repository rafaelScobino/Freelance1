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
            aboutImg.setAttribute('class','img1');
            aboutImgsTitle.innerText = 'Projetos Especializados'
                break;;
    }
    if(index > 4){
        imgIndex = 1
    }else{
        imgIndex = index + 1
    }

}

setInterval(() => {changeAboutImg(imgIndex);},3000)

//ServicesDiv functions and translations
// var  element = document.getElementById('120')

// function trasnlateServiceCard(){
//     element = document.getElementById("120")
//     element.style.transform = 'translateX( 2px )';
//     element.style.transform = 'translateY( -2px )';
//     console.log('translatedCard')
// }

// element.ddEventListener("mouseover",trasnlateServiceCard);


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
    currentIndex = (currentIndex - 1 + totalCards) % totalCards; 
    carouselSlide(currentIndex);
}

function nextSlide(){
    if(window.innerWidth > 800 ){
        if(currentIndex >= totalCards - 4){
            currentIndex = 0
        }else{
            currentIndex = (currentIndex + 1 + totalCards) % totalCards;
        }
    }else{
        currentIndex = (currentIndex + 1 + totalCards) % totalCards;
    }


    console.log(totalCards);
    console.log(window.innerWidth);
    console.log(currentIndex)
    carouselSlide(currentIndex);
}

setInterval(() => {nextSlide();},4000);

//Adicionar feature que pare o carousel on mouse over carousel div