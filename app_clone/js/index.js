
//Register / Login
let formSignUp = document.querySelector('#sign-up');
let formSignIn = document.querySelector('#sign-in');
let API = 'https://intern-staging.herokuapp.com/api';

// Img Fragment
let fragImg = document.createDocumentFragment(); 
let imgFile = document.createElement('img'); 
imgFile.className = 'imgFile'; 
fragImg.appendChild(imgFile); 

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
                    return json;
                }
            )
        )
    })

}

let tokenStr;

//Convertation
function formToJson(event) { 
    let formData = new FormData(event); 
    let object = {}; 
    formData.forEach((value, key) => { object[key] = value }); 
    let data = JSON.stringify(object); 
    return data; 
}