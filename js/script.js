// toggle icon navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// scroll sections
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp() {
    menuIcono();
    scroll();
    vermas();
    copyboard();
}

function menuIcono(){

    menuIcon.onclick = () =>{
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active')
    }
}

function scroll(){

    window.onscroll = () => {

        sections.forEach(sec =>{
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
    
            if (top >= offset && top < offset + height ) {
                navLinks.forEach(links =>{
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    
                });
    
                /*activa la animacion de la secion**/
                sec.classList.add('show-animate');
            }
            else{
                sec.classList.remove('show-animate');
            }
        })
    
        // navegacion fija
    
        let header  = document.querySelector('header');
    
        header.classList.toggle('nav-fija', window.scrollY > 100);
        
        // remove toggle icon and navbar when click navbar links (scroll)
    
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active')
    
    
        // animation footer on scroll
    
    }
    
}

function vermas(){

    const boton = document.querySelector('#leermas');

    boton.addEventListener('click' , function(){
        const clase = document.querySelector('.about-content-text');

        clase.style.display = 'block';

        boton.textContent ='Ver menos';

        accionesBoton();
     
    })
    
}

function accionesBoton(){

    const boton = document.querySelector('#leermas');

    boton.addEventListener('click' , function(){
        const clase = document.querySelector('.about-content-text');

        clase.style.display = 'none';

        boton.textContent ='Leer Más';

        vermas();
     
    })

}

function  copyboard(){

    var copyBoard = document.querySelector('.copyboard');


    copyBoard.addEventListener('click' , function(){

    
        var copyText = document.getElementById('copy-email');
        var elementText = copyText.textContent;

        navigator.clipboard.writeText(elementText);

        copyBoard.classList.add('copiado')

      
        setTimeout(() => {
            copyBoard.classList.remove('copiado')

        }, "3000" );//3s
       


    });



}

