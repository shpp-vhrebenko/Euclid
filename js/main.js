document.addEventListener('DOMContentLoaded', function() {   // отлавливаю событие загрузки страници https://developer.mozilla.org/ru/docs/Web/API/Window/DOMContentLoaded_event
  const navButton = document.querySelector(".header__hamburger"); // получаю елемент navButton по селектору для дальнейшего его использования
  const navList = document.querySelector(".header__panel"); // получаю елемент navList по селектору для дальнейшего его использования

  if(navButton) { // проверка если елемент существует то ...
    navButton.addEventListener("click", function(e) { // отлавливаем событие нажатия на navButton
      document.body.classList.toggle('lock'); // ставим переключатель класса для елемента body
      navButton.classList.toggle("header__hamburger--active"); // ставим переключатель класса для елемента navButton
      navList.classList.toggle("header__panel--active"); // ставим переключатель класса для елемента navList
    })
  }

  const menuLinks = document.querySelectorAll('.nav-header__link[data-goto]');  // получаем список елементов по селектору (список типа NodeList)
  if(menuLinks.length > 0) { // если список не пустой то...
    menuLinks.forEach(menuLink => { // перебираем елементы списка
      menuLink.addEventListener("click", onMenuLinkClick);  // для каждого елемента списка отлавливаем событие нажатия на него, как результат выполнение функции onMenuLinkClick
    });   
  }


  /**
     * Получает елемент,
     * проверяет наличие у него свойства data со значение goto.
     * Прокручивает страницу до того елемента на который сылается данный елемент.
     *
     * @param {Element} e .    
     */
  function onMenuLinkClick(e) {  
    const menuLink = e.target;      
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);        
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;

      if(navButton.classList.contains('header__hamburger--active')) {
        document.body.classList.remove('lock');
        navButton.classList.remove("header__hamburger--active");
        navList.classList.remove("header__panel--active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }


  /* ACCORDIONS */

  const accordions = document.querySelectorAll('.FAQ-list__item');  // получаем список елементов по селектору (список типа NodeList)

  if(accordions.length > 0) { // если список не пустой то...
    for(item of accordions) { // перебираем елементы списка
      item.addEventListener('click', function() { // для каждого елемента списка отлавливаем событие нажатия на него, при котором ...
        if(this.classList.contains('active')) {  // если елемент содержит класс 'active' то ...
          this.classList.remove('active');       // удаляем у него класс 'active'
        } else {                                 // иначе
          for(el of accordions) {                // перебираем елементы списка
            el.classList.remove('active');       // удаляем у всех елементов класс 'active'
          }
          this.classList.add('active');          // добавляем данному елементу класс 'active'
        }
      })
    }
  }


  /* TABS */

  const tabs = document.querySelectorAll('.work-nav__button');  // получаем список елементов по селектору (список типа NodeList)
  if(tabs.length > 0) { // если список не пустой то...
    tabs.forEach(function(tabsBtn){ // перебираем елементы списка      
      tabsBtn.addEventListener('click', function(event){ // для каждого елемента списка отлавливаем событие нажатия на него, при котором ...
        const path = event.currentTarget.dataset.path; // получаем значение атрибута data со значением path
  
        const tabsContent = document.querySelectorAll('.how-work__content'); // получаем список елементов по селектору (список типа NodeList)
        if(tabsContent.length > 0) { // если список не пустой то...
          tabsContent.forEach(function(tabContent) { // перебираем елементы списка 
            tabContent.classList.remove('how-work__content--active'); // для каждого елемента списка убираем у него класс который отвечает за его активное состояние.
          })
        }
        
        if(document.querySelector(`[data-target="${path}"]`)) { // если есть елемент с определёным значением атрибута data-target то...
          document.querySelector(`[data-target="${path}"]`).classList.add('how-work__content--active') // добавляем етому елементу определенный класс
        }

      }); 
      
    });
  }
});