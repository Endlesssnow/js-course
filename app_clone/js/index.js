
//Register / Login
let formSignUp = document.querySelector('#sign-up');
let formSignIn = document.querySelector('#sign-in');
let API = 'https://intern-staging.herokuapp.com/api';

// Img Fragment
let fragImg = document.createDocumentFragment(); 
let imgFile = document.createElement('img'); 
imgFile.className = 'imgFile'; 
fragImg.appendChild(imgFile); 

//Comment Fragment
// let fragComment = document.createDocumentFragment();
// let commentDiv = document.createElement('div');
// commentDiv.className = 'commentDiv';
// fragComment.appendChild(commentDiv);

// //Get Comment
// let getComNew = document.forms.namedItem('getCom');

// let fragGetCom = document.createDocumentFragment();
// let getComDiv = document.createElement('div');
// getComDiv.className = 'getComDiv';
// fragGetCom.appendChild(getComDiv);

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
    doRequest(urlAct, 'POST', formData, headers, 'login');
});

//Get comment
// getComNew.addEventListener('submit', function(event){
//     event.preventDefault();
//     // let formD = new FormData(form);
//     // formD.append('parentEntityId', 'id');
//     // doRequest('/file', 'POST', formD, {'token': tokenStr}, 'file');

//     let urlGetComment = '/comment';
//     let formData = null;
//     let headers = {'token': tokenStr};
//     doRequest(urlGetComment, 'GET', formData, headers, 'getComNew');
// });

// var arr1 = [];
// var arr2 = [];

//Main function
function doRequest(url, method, formData, headers, options) {
    return new Promise((resolve, _reject) => {
        resolve(
            fetch(API+url, {
                method: method,
                body: formData,
                headers: headers
            }).then(
                resp => resp.json()
            ).then(
                json => {
                    console.log(json);
                    if(json._id) {
                        let formId = JSON.stringify({'id': json._id});
                        if(options == 'signUp') {
                            doRequest('/identification/activate', 'POST', formId, headers, 'activate');
                        }
                    }
                    if(options == 'login'){
                        if(json.token){
                            tokenStr = json.token;
                            console.log('Токен записан');
                        }
                    }
                    // if(options == 'getimg') {
                    //     console.log(json.length);
                    //     console.log(json[0]);
                    //     for (let i = 0; i < json.length; i++){
                    //         getImg(json[i].url)
                    //     }
                    // }
                    // if(options == 'file'){
                    //     getImg(json.url)
                    // }
                    // if(options == 'comment'){
                    //     if(json.message){
                    //         getComment(json.message)
                    //     }
                    // }
                    // if(options == 'getComNew'){
                    //     var arrayID = [];
                    //     var arrayMessage = [];
                        
                        
                    //     for(let obj of json) { 
                    //         arrayID.push(`${obj._id}`) 
                    //     }
                    //     for(let obj of json) { 
                    //         arrayMessage.push(`${obj.message}`) 
                    //     }
                        
                    //     createComment(arrayMessage);
                        
                    //     //console.log(arrayID);
                    //     //console.log(arrayMessage);
                    // }
                    return json;
                }
            )
        )
    })

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
// });

//Img loading
// let form = document.forms.namedItem('img_load');
// form.addEventListener('submit', function(event){
//     let formD = new FormData(form);
//     formD.append('parentEntityId', 'id');
//     doRequest('/file', 'POST', formD, {'token': tokenStr}, 'file');
//     event.preventDefault();
// });

//Comment create
// function getComment(msg){
//     let frg = fragComment.cloneNode(true); 
//     frg.lastChild.innerText = msg; 
//     document.querySelector('#cmnt').appendChild(frg);
// }

//Img clone
// function getImg(url){
//     let frg = fragImg.cloneNode(true); 
//     frg.lastChild.src = url; 
//     document.body.appendChild(frg);
// }
// Get Comment
// function createComment(message){
//     let frg = document.createElement('div');
//     message.reverse();

//     for(let value of message){
//         let clone = frg.cloneNode(true);
//         clone.innerHTML = value;
//         document.querySelector('#gcf').appendChild(clone);
//     }
// }

//Convertation
function formToJson(event) { 
    let formData = new FormData(event); 
    let object = {}; 
    formData.forEach((value, key) => { object[key] = value }); 
    let data = JSON.stringify(object); 
    return data; 
}