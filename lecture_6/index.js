var routes = {
	'': {
		html: '/home/home.html'
	},
	'content': {
		html: '/content/content.html',
	},
	'feed': {
		html: '/feed/feed.html'
	}
};

var requestTemplate = (function(){
    var cache = {};
    return function(url){
        if(cache.hasOwnProperty(url)){
            return Promise.resolve(cache[url]);
        } else {
            return fetch(url).then(function(res){
                return res.text();
            }).then(function(html){
                cache[url] = html;
                return html;
            })
        }
    }
})();

var heandleRouting = (function () {
    var previousHash;
    return function () {
        var hash = window.location.hash.split('#/')[1] || '';
        if (previousHash === hash){
            return;
        }
        if(routes.hasOwnProperty(hash)){
            previousHash = hash;
            var url = routes[hash];
            console.log(routes[hash]);
            requestTemplate(url).then( function (html){
                console.log(html);
            })
        }
    }    
})();

window.addEventListener('DOMContentLoader', heandleRouting);
window.addEventListener('hashchange', heandleRouting);