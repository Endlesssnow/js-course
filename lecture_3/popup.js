var fragPopup = document.createDocumentFragment();

var overlay = document.createElement('div');
overlay.id = 'overlay';

var sectionPopup = document.createElement('section');
sectionPopup.id = 'section';

    var buttonPopup = document.createElement('button');
    buttonPopup.id = 'button';
    buttonPopup.innerText = 'Popup';

    var  containerPopup = document.createElement('div');
    containerPopup.id = 'container';
        var closeButton = document.createElement('span');
        closeButton.id = 'close';
        closeButton.innerText = "Х";
        
        var contentPopup = document.createElement('p');
        contentPopup.id = 'content';
        contentPopup.innerText = 'Text should be here...';

fragPopup.appendChild(sectionPopup);
sectionPopup.appendChild(buttonPopup);
sectionPopup.appendChild(overlay);
overlay.appendChild(containerPopup);
containerPopup.appendChild(closeButton);
containerPopup.appendChild(contentPopup);

document.body.appendChild(fragPopup);

closeButton.style.display = 'none';
containerPopup.style.display = 'none';
overlay.style.display = 'none'; 

var click = 0;

buttonPopup.addEventListener('click', function (){
    if (click === 0){
        overlay.style.display = 'block';
        containerPopup.style.display = 'block';
        click = 1;
        closeButton.style.display = 'block';
        
    }
})

closeButton.addEventListener('click', function(){
    if (click === 1){
        overlay.style.display = 'none';
        containerPopup.style.display = 'none';
        click = 0;
        closeButton.style.display = 'none';
        
    }
})

window.onclick = function(event) {
    if (event.target == overlay) {
        overlay.style.display = "none";
        containerPopup.style.display = "none";
        click = 0;
    }
}

