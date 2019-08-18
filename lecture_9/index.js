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

