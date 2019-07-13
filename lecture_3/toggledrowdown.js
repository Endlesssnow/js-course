var menu = document.querySelector('#menu');

var home = document.querySelector('#home');
var feed = document.querySelector('#feed');
var store = document.querySelector('#store');

var click = 0;

home.style.display = 'none';
feed.style.display = 'none';
store.style.display = 'none';
menu.addEventListener('click', function(){
if (click === 1){
	home.style.display = 'none';
	feed.style.display = 'none';
	store.style.display = 'none';
	click = 0;
}else {
	home.style.display = 'block';
	feed.style.display = 'block';
	store.style.display = 'block';
	click = 1;
	}
})

