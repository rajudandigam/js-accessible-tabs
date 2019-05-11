function onLoad() {
  const tabHeader = document.querySelector('#tabHeader');
  const tabContents = document.querySelectorAll('#tabContent > section');
  const tabHeaderElems = tabHeader.querySelectorAll('ul > li > a');
  
  tabHeader.addEventListener('keyup', onTabKeyUp);
  tabHeader.addEventListener('click', onTabClick);

  function onTabKeyUp(event) {
    const target = event.target;
    const li = target.parentNode;
    const elem = event.keyCode === 37 ? li.previousElementSibling : event.keyCode === 39 ? li.nextElementSibling : null;

    elem && updateTabs(elem.children[0].hash.slice(1));
  }

  function updateTabs(id) {
    tabHeaderElems.forEach((elem) => {
      const li = elem.parentNode;

      if(elem.hash.slice(1) === id) {
        li.classList.add('active');
        li.setAttribute('aria-selected', true);
        elem.tabIndex = 0;
        elem.focus();
      } else {
        li.classList.remove('active');
        li.setAttribute('aria-selected', false);
        elem.tabIndex = -1;
      }
    });

    tabContents.forEach((elem) => {
      if(elem.id === id) {
        elem.classList.add('active');
        elem.setAttribute('aria-hidden', false);
      } else {
        elem.classList.remove('active');
        elem.setAttribute('aria-hidden', true);
      }
    });
  }

  function onTabClick(event) {
    event.preventDefault();

    const target = event.target;
    const id = target.hash ? target.hash.slice(1) : target.children[0].hash.slice(1);

    updateTabs(id);
  }
}

document.addEventListener('DOMContentLoaded', onLoad);
