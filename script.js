const menu = document.getElementById("nav-list");
const toggleButton = document.querySelector(".menu-toggle");
const menuItems = document.querySelectorAll('#nav-list a');

function toggleMenu(){
    menu.classList.toggle('show')

    
if (menu.classList.contains('show')) {
    toggleButton.setAttribute('aria-expanded', 'true');
    toggleButton.innerHTML = '&times;'; 


    const firstMenuItem = menu.querySelector('a');
    if (firstMenuItem) firstMenuItem.focus();
    } 
    
    else {
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.innerHTML = '&#9776;'; // Replace with menu icon
    }
    

}

