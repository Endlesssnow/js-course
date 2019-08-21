class LocalStorage {

    setItem(key, value){
        localStorage.setItem(key, value);
    }

    getItem(key){
        return localStorage.getItem(key);
    }

    removeItem(key){
        localStorage.removeItem(key);
    }
}

class SessionStorage {

    setItem(key, value){
        sessionStorage.setItem(key, value);
    }

    getItem(key){
        return sessionStorage.getItem(key);
    }

    removeItem(key){
        sessionStorage.removeItem(key);
    }
}

class Geolocation {

    static getPos(position) {
        console.log(position);
    }
    getPos(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(Geolocation.getPos);
        }
    }  

    static watchPos(position) {
        console.log(position);
    }
    watchPos(){
        if(navigator.geolocation){
            navigator.geolocation.watchPosition(Geolocation.watchPos);
        }
    } 
}

class List {
    constructor(listDiv) {
        if (listDiv === undefined) {
            listDiv = document.body;
        } else {
            listDiv = document.querySelector(listDiv);
        }
        const fragment = document.createDocumentFragment();
        this.list = document.createElement('ul');
        this.input = document.createElement('input');
        this.input.placeholder = 'Add list item';
        fragment.appendChild(this.input);
        fragment.appendChild(this.list);
        listDiv.appendChild(fragment);

        this.input.addEventListener('keydown', (event) => {
            if (event.key == 'Enter') {
                this.addItem(this.input.value);
                this.input.value = '';
            }
        })

        this.counter = 0;
        for (let i = 0, len = localStorage.length, index; i < len; ++i) {
            if (localStorage.key(i).includes('listItem')) {
                index = localStorage.key(i);
                const listItem = document.createElement('li');
                listItem.innerText = localStorage.getItem(index);
                this.list.appendChild(listItem);
                if(index.slice('listItem'.length) > this.counter + 1) this.counter = +index.slice('listItem'.length) + 1;
                console.log(index.slice('listItem'.length));
            };

        }
    }

    addItem(item) {
        localStorage.setItem('listItem' + this.counter, item);
        const listItem = document.createElement('li');
        listItem.innerText = item;

        this.list.appendChild(listItem);
        this.counter++;
    }

    attachTo(block) {
        if (block !== undefined) {
            block.appendChild(this.input);
            block.body.appendChild(this.list);
        }
    }

    attachBy(selector) {
        if (selector !== undefined) {
            const block = document.querySelector(selector);
            block.appendChild(this.input);
            block.body.appendChild(this.list);
        }
    }
}


const list = new List('#listDiv');