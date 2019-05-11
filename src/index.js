function onLoad() {
  const tabHeader = document.querySelector('#tabHeader');
  const tabContents = document.querySelectorAll('#tabContent > section');
  const tabHeaderElems = tabHeader.querySelectorAll('ul > li');
  
  tabHeader.addEventListener('click', onTabClick);

  function onTabClick(event) {
    event.preventDefault();

    const target = event.target;
    const id = target.hash ? target.hash.slice(1) : target.children[0].hash.slice(1); 

    tabContents.forEach((elem) => {
      if(elem.id === id) {
        elem.classList.add('active');
      } else {
        elem.classList.remove('active');
      }
    });

    tabHeaderElems.forEach((elem) => {
      if(elem.getAttribute('data-id') === id) {
        elem.classList.add('active');
      } else {
        elem.classList.remove('active');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', onLoad);
