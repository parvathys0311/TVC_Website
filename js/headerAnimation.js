window.addEventListener('scroll', checkHeader);

function checkHeader() { 
  let scrollPosition = Math.round(window.scrollY);
  if (scrollPosition > 105){
    document.querySelector('header').classList.add('sticky');
    document.querySelector('#imgLg').classList.add('logo');
    document.querySelector('#imgLg').classList.remove('logoIndex');
    
  }
  // If not, remove "sticky" class from header
  else {
    document.querySelector('header').classList.remove('sticky');
    document.querySelector('#imgLg').classList.remove('logo');
    document.querySelector('#imgLg').classList.add('logoIndex');
   
  } 
};