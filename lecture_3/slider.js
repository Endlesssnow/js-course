var fragSlider = document.createDocumentFragment();

var sliderContainer = document.createElement('div');
sliderContainer.id = 'slider-conteiner';

    var slide1 = document.createElement('div');
    slide1.className = 'slide';
    var img1 = document.createElement('img');
    img1.src = 'https://source.unsplash.com/640x480/?sun,sky';

    var slide2 = document.createElement('div');
    slide2.className ='slide';
    var img2 = document.createElement('img');
    img2.src = 'https://source.unsplash.com/640x480/?water,sea';

    var slide3 = document.createElement('div');
    slide3.className='slide';
    var img3 = document.createElement('img');
    img3.src = 'https://source.unsplash.com/640x480/?sand,desert';

    var prevButton = document.createElement('a');
    prevButton.className = 'prevButton';
    prevButton.innerText = '\u25c4';
    
    var nextButton = document.createElement('a');
    nextButton.className = 'nextButton';
    nextButton.innerText = '\u25ba';

var spanContainer = document.createElement('div');
spanContainer.className = 'spanContainer';

    var position1 = document.createElement('span');
    position1.className = 'position';

    var position2 = document.createElement('span');
    position2.className = 'position';

    var position3 = document.createElement('span');
    position3.className = 'position';

fragSlider.appendChild(sliderContainer);
sliderContainer.appendChild(slide1);
slide1.appendChild(img1);
sliderContainer.appendChild(slide2);
slide2.appendChild(img2);
sliderContainer.appendChild(slide3);
slide3.appendChild(img3);
sliderContainer.appendChild(prevButton);
sliderContainer.appendChild(nextButton);
sliderContainer.appendChild(spanContainer);
spanContainer.appendChild(position1);
spanContainer.appendChild(position2);
spanContainer.appendChild(position3);
document.body.appendChild(fragSlider);

nextButton.addEventListener('click', function() {
    slideNext(1);
});
prevButton.addEventListener('click', function() {
    slideNext(-1);
});

position1.addEventListener('click', function() {
    slideTo(1);
});
position2.addEventListener('click', function() {
    slideTo(2);
});
position3.addEventListener('click', function() {
    slideTo(3);
});

var currentSlideNum = 1;
showSlideNum(currentSlideNum);

function slideNext(value) {
    showSlideNum(currentSlideNum += value);
}

function slideTo(value) {
    showSlideNum(currentSlideNum = value);
}

function showSlideNum(value) {
    var i;
    var slides = document.querySelectorAll('.slide');
    var positions = document.querySelectorAll('.position');
    
    if (value > slides.length) {
        currentSlideNum = 1;
    }    
    if (value < 1) {
        currentSlideNum = slides.length;
    }
    for (i = 1; i <= slides.length; i++) {
        slides[i].style.display = "none";  
        positions[i].className = positions[i].className.replace("active", "");
    }
    // for (i = 1; i <= positions.length; i++) {
        
    // }
    slides[currentSlideNum].style.display = "block";  
    positions[currentSlideNum-0].className += "active";
}
