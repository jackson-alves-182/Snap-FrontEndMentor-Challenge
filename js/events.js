import{
  featureArrow,
  featUpArrow,
  featDownArrow,
  featNavigation,
  companyArrow,
  compUpArrow,
  compDownArrow,
  compNavigation,
  menuNavigation,
  closeMenu,
  buttonLogin
} from "./elements.js"

export default function(){

  const navHeader = document.querySelector('.header-nav');
  
  featureArrow.addEventListener('click', function(){
    if(featDownArrow.classList.contains('hide')){
      featUpArrow.classList.add('hide');
      featDownArrow.classList.remove('hide');
      featNavigation.classList.add('hide');
    }
    else{
      featNavigation.classList.remove('hide');
      featUpArrow.classList.remove('hide');
      featDownArrow.classList.add('hide');
    }
  })



  companyArrow.addEventListener('click', function(){

    if(compDownArrow.classList.contains('hide')){
      compUpArrow.classList.add('hide');
      compDownArrow.classList.remove('hide');
      compNavigation.classList.add('hide');
    }
    else{
      compUpArrow.classList.remove('hide');
      compDownArrow.classList.add('hide');
      compNavigation.classList.remove('hide');
    }
  })

  
  menuNavigation.addEventListener('click', function(){
    navHeader.style.display = "flex";

    document.querySelector('.menu').classList.remove('hide');
    document.querySelector('.menu').appendChild(navHeader);
  })
 
  

  closeMenu.addEventListener('click', function(){
    navHeader.style.display = "";
    
    document.querySelector('header').appendChild(navHeader);
    document.querySelector('.menu').classList.add('hide');
  })

  buttonLogin.addEventListener('click', function(){
  } )
}