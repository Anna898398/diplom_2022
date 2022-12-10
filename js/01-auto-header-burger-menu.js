function btnOpenMenuBurger() {
  let dropDown = document.getElementById('menuBurgerHide');
  if (window.getComputedStyle(dropDown).getPropertyValue('display') === 'none') {
      dropDown.style.display = 'block';
  } else {
      dropDown.style.display = 'none';
  }
}


let menuElem = document.getElementById('sweeties');
    let titleElem = menuElem.querySelector('.title');

    titleElem.onclick = function() {
      menuElem.classList.toggle('open');
    };