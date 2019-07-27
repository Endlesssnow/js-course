    
var routes = {
	'': {
		html: 'home/home.html'
	},
	'feed': {
		html: 'feed/feed.html',
	},
	'login': {
		html: 'login/login.html'
	}
};

var heandleRouting = (function () {
    var previousHash;
    return function () {
        var hash = window.location.hash.split('#/')[1] || '';
        if (previousHash === hash){
            return;
        }
        if(routes.hasOwnProperty(hash)){
            console.log(routes[hash]);
        }
    }    
})();

window.addEventListener('DOMContentLoader', heandleRouting);
window.addEventListener('hashchange', heandleRouting);