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
        return new Promise((resolve, _reject) => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(Geolocation.getPos);
        }
        resolve();
        }
    )}  

    static watchPos(position) {
        console.log(position);
    }
    watchPos(){
        return new Promise((resolve, _reject) => {
        if(navigator.geolocation){
            navigator.geolocation.watchPosition(Geolocation.watchPos);
        }
        resolve();
        } 
    )}
}

class Media {

    constructor(selector, audio = false, video = true) {
        this.selector = selector;
        this.constraints = {
            audio: audio,
            video: video
        }
        this.video = document.createElement('video');
        this.video.width = 640;
        this.video.height = 480;
    }

    getMedia() {
        return new Promise((resolve, reject) => {
            let media;
            const selector = this.selector;
            const video = this.video;
            navigator.mediaDevices.getUserMedia(this.constraints)
                .then((stream) => {
                    if (selector === undefined) media = document.body;
                    else media = document.querySelector(selector);
                    media.appendChild(video);
                    video.style.display = 'block';
                    video.srcObject = stream;
                    video.onloadedmetadata = () => video.play();
                    resolve()
                })
                .catch((err) => {
                    console.log(err);
                    reject();
                });
        });
    }
}