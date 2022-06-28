import{
  featureArrow,
  companyArrow,
  featuresDropDown,
  companyDropDown
} from "./elements.js"

export default function(){
  featureArrow.addEventListener('click', function(){
    document.querySelector('.feat-navigation').classList.remove('hide');
  })

}