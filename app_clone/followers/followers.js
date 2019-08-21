export default function() {
console.log('export completed')
//Comment Fragment
let fragComment = document.createDocumentFragment();
let commentDiv = document.createElement('div');
commentDiv.className = 'commentDiv';
fragComment.appendChild(commentDiv);

//Get Comment
let getComNew = document.forms.namedItem('getCom');
window.getComNew = getComNew;

let fragGetCom = document.createDocumentFragment();
window.fragGetCom = fragGetCom;
let getComDiv = document.createElement('div');
window.getComDiv = getComDiv;
getComDiv.className = 'getComDiv';
fragGetCom.appendChild(getComDiv);

//Get comment
window.getComNew.addEventListener('submit', function(event){
    event.preventDefault();
    let urlGetComment = '/comment';
    let formData = null;
    let headers = {'token': tokenStr};
    doRequest(urlGetComment, 'GET', formData, headers, 'getComNew')
        .then(json => {
            console.log(json)
            var arrayID = [];
            var arrayMessage = [];
            for(let obj of json) { 
                arrayID.push(`${obj._id}`) 
            }
            for(let obj of json) { 
                arrayMessage.push(`${obj.message}`) 
            }
            createComment(arrayMessage);
            console.log(arrayID);
            console.log(arrayMessage);
        })
});

//Comment
let comment = document.forms.namedItem('comments');
comment.addEventListener('submit', function(event){
    event.preventDefault();
    let formC = formToJson(comment);
    console.log(formC);
    doRequest('/comment', 'POST', formC, {'token': tokenStr, 'Content-Type': 'application/json'}, 'comment')
    .then(json => {
        if(json.message){
            getComment(json.message)
        }
    })
});
// Comment create
function getComment(msg){
    let frg = fragComment.cloneNode(true); 
    frg.lastChild.innerText = msg; 
    document.querySelector('#cmnt').appendChild(frg);
}

// Get Comment
function createComment(message, id){
    let frg = document.createElement('div');
    frg.className = 'commDiv';
    message.reverse();

    for(let value of message){
        let clone = frg.cloneNode(true);
        clone.innerHTML = '\u2394: '+ value;
        document.querySelector('#gcf').appendChild(clone);
    }
}

//Convertation
function formToJson(event) { 
    let formData = new FormData(event); 
    let object = {}; 
    formData.forEach((value, key) => { object[key] = value }); 
    let data = JSON.stringify(object); 
    return data; 
}
}