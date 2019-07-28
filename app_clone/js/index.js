//Register / Login
let formSignUp = document.querySelector('#sign-up');
let formSignIn = document.querySelector('#sign-in');
let API = 'https://intern-staging.herokuapp.com/api';

// Img Fragment
// let fragImg = document.createDocumentFragment(); 
// let imgFile = document.createElement('img'); 
// imgFile.className = 'imgFile'; 
// fragImg.appendChild(imgFile); 

// //Comment Fragment
// let fragComment = document.createDocumentFragment();
// let commentDiv = document.createElement('div');
// commentDiv.className = 'commentDiv';
// fragComment.appendChild(commentDiv);

//Register
formSignUp.addEventListener('submit', function(event){
    event.preventDefault();
    let url = '/identification';
    let formData = formToJson(formSignUp);
    console.log(formData);
    let headers = {'Content-Type': 'application/json'};
    doRequest(url, 'POST', formData, headers, 'signUp');
});

//Login
formSignIn.addEventListener('submit', function(event){
    event.preventDefault();
    let urlAct = '/identification/sign_in';
    let formData = formToJson(formSignIn);
    console.log(formData);
    let headers = {'Content-Type': 'application/json'};
    doRequest(urlAct, 'POST', formData, headers, 'login')
});

//Main function
function doRequest(url, method, formData, headers, options) {
    fetch(API+url, {
        method: method,
        body: formData,
        headers: headers
    }).then(
        resp => resp.json()
    ).then(
        json => {
            console.log(json);
            if(options == 'signUp'){ 
                if(json._id) { 
                let formId = JSON.stringify({'id': json._id}); 
                doRequest('/identification/activate', 'POST', formId, headers, 'activate'); 
                } else alert('Такой пользователь уже зарегистрирован'); 
                }
            if (options == 'activate') {
                if (json.error) checkSignUp = json.error;
                else alert('Пароль выслан на почту');
            };
            if(options == 'login'){
                if(json.token){
                    tokenStr = json.token;
                    alert('Вы вошли!');
                    console.log('Токен записан');
                }
            }
            if(options == 'getimg') {
                console.log(json.length);
                console.log(json[0]);
                for (let i = 0; i < json.length; i++){
                    getImg(json[i].url)
                }
            }
            if(options == 'file'){
                getImg(json.url)
            }
            if(options == 'comment'){
                if(json.message){
                    getComment(json.message)
                }
            }
        }
    );
}

// doRequest('/file', 'GET', null, {'token': tokenStr}, 'getimg');

let tokenStr;

// //Comment
// let comment = document.forms.namedItem('comments');
// comment.addEventListener('submit', function(event){
//     event.preventDefault();
//     let formC = formToJson(comment);
//     console.log(formC);
//     doRequest('/comment', 'POST', formC, {'token': tokenStr, 'Content-Type': 'application/json'}, 'comment');
    
// })

// //Img loading
// let form = document.forms.namedItem('img_load');
// form.addEventListener('submit', function(event){
//     let formD = new FormData(form);
//     formD.append('parentEntityId', 'id');
//     doRequest('/file', 'POST', formD, {'token': tokenStr}, 'file');
//     event.preventDefault();
// })

// //Comment create
// function getComment(msg){
//     let frg = fragComment.cloneNode(true); 
//     frg.lastChild.innerText = msg; 
//     document.querySelector('#cmnt').appendChild(frg);
// }

// //Img clone
// function getImg(url){
//     let frg = fragImg.cloneNode(true); 
//     frg.lastChild.src = url; 
//     document.body.appendChild(frg);
// }

//Convertation
function formToJson(event) { 
    let formData = new FormData(event); 
    let object = {}; 
    formData.forEach((value, key) => { object[key] = value }); 
    let data = JSON.stringify(object); 
    return data; 
}
