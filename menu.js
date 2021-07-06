const mainMenu = document.querySelector('.mainMenu');
        const closeMenu = document.querySelector('.closeMenu');
        const openMenu = document.querySelector('.openMenu');
        openMenu.addEventListener('click',show);
        closeMenu.addEventListener('click',close);
        function show(){
        mainMenu.style.display = 'flex';
        mainMenu.style.top = '0';
        }
        function close(){
        mainMenu.style.top = '-100%';
        }


// slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}
function showSlides(n) {
var i;
var slides = document.getElementsByClassName("card");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
}
slides[slideIndex-1].style.display = "block";  
//  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//login
