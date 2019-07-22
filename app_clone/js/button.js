var popup = document.querySelector('.section-header-wrapper__form-input-email');
var popup2 = document.querySelector('.section-header-wrapper__form-input-password');

var open = document.querySelector('.section-header-wrapper__form-container-button-sign-in');
popup.style.display = 'block'
popup2.style.display = 'block'

open.addEventListener("click",      function() {

    if(popup.style.display == 'block') 
        popup.style.display = 'none';
    else popup.style.display = 'block'
    
  });

open.addEventListener("click",      function() {

    if(popup2.style.display == 'block') 
        popup2.style.display = 'none';
    else popup2.style.display = 'block'
    
});