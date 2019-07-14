var fragToggleDD = document.createDocumentFragment();

var sectionToggleDD = document.createElement('section');
sectionToggleDD.id = 'section';

var menuToggleDD = document.createElement('div');
menuToggleDD.id = 'menu';

var containerToggleDD = document.createElement('div');
containerToggleDD.id = 'container';
	var actionToggleDD = document.createElement('div');
	actionToggleDD.id = 'action';
	var anotherActionToggleDD = document.createElement('div');
	anotherActionToggleDD.id = 'anotherAction';
	var mayBeActionToggleDD = document.createElement('div');
	mayBeActionToggleDD.id = 'mayBeAction';

fragToggleDD.appendChild(sectionToggleDD);
sectionToggleDD.appendChild(menuToggleDD);
sectionToggleDD.appendChild(containerToggleDD);
containerToggleDD.appendChild(actionToggleDD);
containerToggleDD.appendChild(anotherActionToggleDD);
containerToggleDD.appendChild(mayBeActionToggleDD);

document.body.appendChild(fragToggleDD);

var menuToggleDD = document.querySelector('#menu');

var actionToggleDD = document.querySelector('#action');
var anotherActionToggleDD = document.querySelector('#anotherAction');
var store = document.querySelector('#mayBeAction');

var click = 0;

actionToggleDD.style.display = 'none';
anotherActionToggleDD.style.display = 'none';
mayBeActionToggleDD.style.display = 'none';

menuToggleDD.addEventListener('click', function(){
if (click === 1){
	actionToggleDD.style.display = 'none';
	anotherActionToggleDD.style.display = 'none';
	mayBeActionToggleDD.style.display = 'none';
	click = 0;
}else {
	actionToggleDD.style.display = 'block';
	anotherActionToggleDD.style.display = 'block';
	mayBeActionToggleDD.style.display = 'block';
	click = 1;
	}
})

