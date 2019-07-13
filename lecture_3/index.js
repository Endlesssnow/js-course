
var btnLevel1 = document.querySelector('#btnLevel1');
var btnLevel2 = document.querySelector('#btnLevel2');
var btnLevel3 = document.querySelector('#btnLevel3');

var ctntLevel1 = document.querySelector('#level1-content');
var ctntLevel2 = document.querySelector('#level2-content');
var ctntLevel3 = document.querySelector('#level3-content');

ctntLevel1.style.display = 'none';
ctntLevel2.style.display = 'none';
ctntLevel3.style.display = 'none';

btnLevel1.addEventListener('click', function (){
    ctntLevel1.style.display = 'block';
    ctntLevel2.style.display = 'none';
    ctntLevel3.style.display = 'none';
})

btnLevel2.addEventListener('click', function(){
    ctntLevel1.style.display = 'none';
    ctntLevel2.style.display = 'block';
    ctntLevel3.style.display = 'none';
})

btnLevel3.addEventListener('click', function(){
    ctntLevel1.style.display = 'none';
    ctntLevel2.style.display = 'none';
    ctntLevel3.style.display = 'block';   
})
