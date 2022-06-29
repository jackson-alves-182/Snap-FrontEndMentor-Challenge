import{
  featureArrow,
  featUpArrow,
  featDownArrow,
  featNavigation,
  companyArrow,
  compUpArrow,
  compDownArrow,
  compNavigation,
  featuresDropDown,
  companyDropDown,
  menuNavigation,
  closeMenu
} from "./elements.js"

export default function(){
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
    document.querySelector('.menu').classList.remove('hide');

    const html = document.querySelector('.header-nav').innerHTML;

    document.querySelector('.submenu').innerHTML += html;
  })

  closeMenu.addEventListener('click', function(){
    document.querySelector('.menu').classList.add('hide');
    document.querySelector('.submenu').innerHTML = "";
  })
}