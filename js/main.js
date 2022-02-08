document.addEventListener('DOMContentLoaded', function() {  
  const navButton = document.querySelector(".header__hamburger");
  const navList = document.querySelector(".header__bottom");

  if(navButton) {
    navButton.addEventListener("click", function(e) {
      document.body.classList.toggle('lock');
      navButton.classList.toggle("header__hamburger--active");
      navList.classList.toggle("header__bottom--active");
    })
  }

  const menuLinks = document.querySelectorAll('.nav-header__link[data-goto]');  
  if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);  
    });

    function onMenuLinkClick(e) {
      const menuLink = e.target;
      console.log(menuLink.dataset.goto);
      console.log(document.querySelector(menuLink.dataset.goto));
      if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        console.log(gotoBlock);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;

        if(navButton.classList.contains('header__hamburger--active')) {
          document.body.classList.remove('lock');
          navButton.classList.remove("header__hamburger--active");
          navList.classList.remove("header__bottom--active");
        }

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth"
        });
        e.preventDefault();
      }
    }
  }


  /* SPOLERS */

  const accordions = document.querySelectorAll('.FAQ-list__item');

  if(accordions.length > 0) {
    for(item of accordions) {
      item.addEventListener('click', function() {
        if(this.classList.contains('active')) {
          this.classList.remove('active');
        } else {
          for(el of accordions) {
            el.classList.remove('active');
          }
          this.classList.add('active');
        }
      })
    }
  }

});