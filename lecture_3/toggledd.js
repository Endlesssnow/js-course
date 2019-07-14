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

containerToggleDD.style.display = 'none';

menuToggleDD.addEventListener('click', function(){
if (containerToggleDD.style.display == 'none'){
	containerToggleDD.style.display = 'block';
}else {
	containerToggleDD.style.display = 'none';
	}
})

