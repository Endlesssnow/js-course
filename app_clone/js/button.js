var popup = document.querySelector('.section-header-wrapper');
var popup2 = document.querySelectorAll(".section-header-wrapper__form-input-email, .section-header-wrapper__form-input-password, .section-header-wrapper__form-container-button-sign-in");
// var popup2 = document.querySelector('.section-header-wrapper__form-input-password');
console.log(popup2);
var open = document.querySelector('.section-header-wrapper__form-container-button-sign-in');
var open2 = document.querySelector('.section-header-wrapper__form-container-button-sign-up');
popup.style.display = 'block';
popup2[0].style.display = 'block';

open.addEventListener("click",      function() {

    if(popup.style.display == 'block') 
        popup.style.display = 'none';
    else popup.style.display = 'block'
    
  });

open2.addEventListener("click",      function() {

    if(popup2[0].style.display == 'block') 
        popup2[0].style.display = 'none';
    else popup2[0].style.display = 'block'
    
});
