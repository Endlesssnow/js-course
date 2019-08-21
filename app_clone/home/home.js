// Img Fragment
let fragImg = document.createDocumentFragment(); 
let imgFile = document.createElement('img'); 
imgFile.className = 'imgFile'; 
fragImg.appendChild(imgFile); 

//Img loading
let form = document.forms.namedItem('img_load');
form.addEventListener('submit', function(event){
    event.preventDefault();
    let formD = new FormData(form);
    formD.append('parentEntityId', 'id');
    doRequest('/file', 'POST', formD, {'token': tokenStr}, 'file')
        .then(json => {
            getImg(json.url)
        })
});


//Img clone
function getImg(url){
    let frg = fragImg.cloneNode(true); 
    frg.lastChild.src = url; 
    document.querySelector('#imgload').appendChild(frg);
}