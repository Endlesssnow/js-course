var button = document.querySelector('.button');

button.addEventListener('click', function(event){
    var newUser = { email: 'alexandr.yerokhin.23@gmail.com' };
    var activeUser = { id: '5d35df3ebcc01e000494e293' };
    doRequest(activeUser);
})

function doRequest(data) {
    fetch('https://intern-staging.herokuapp.com/api/identification/activate', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(
        resp => resp.json()
    ).then(
        json => console.log(json)
    );
}


