// Navbar Toggle Menu

// Declare our element variables
const navBarToggle = document.querySelector('.toggle');
const menu = document.querySelector('header');
const menu1 = document.querySelector('#main');
console.log(menu)

// function statement
function menuToggle() {
  console.log('Menu is toggled');
  if (menu.classList.contains('active')){
    // console.log("if")
    menu.classList.remove('active')
    menu1.classList.remove('extra')
  } else {
    // console.log('else') 
    menu.classList.add('active');
    menu1.classList.add('extra');
  }
}

// The code in the `eventHandler` function (defined above) will be invoked each time `button` is clicked
navBarToggle.addEventListener('click', menuToggle, false);