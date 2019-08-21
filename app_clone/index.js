var routes = {
	'': {
        html: 'home/home.html',
        src: './home/home.js'
	},
	'post': {
		html: 'post/post.html',
	},
	'followers': {
        html: 'followers/followers.html',
        src: './followers/followers.js'
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

var runScript = (function () { 
    var cache = {}; 
    return function (src) {  
        if(cache.hasOwnProperty(src)){ 
            cache[src](); 
        } else { 
        import(src).then(function (module) { 
        cache[src] = module.default; 
        cache[src](); 
        }).catch( function (err) { 
            console.error(err); 
        }) 
        } 
    } 
})();

    var render = (function(){
        var container = document.getElementById('container');
        return function(html){
            container.innerHTML = html;
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
            var urls = routes[hash];
            console.log(routes[hash]);
            requestTemplate(urls.html).then( function (html){
                render(html);
                if(urls.hasOwnProperty('src')){
                    runScript(urls.src);
                }
            })
        }
    }    
})();

window.addEventListener('DOMContentLoaded', heandleRouting);
window.addEventListener('hashchange', heandleRouting);