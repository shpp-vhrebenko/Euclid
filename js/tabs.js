document.addEventListener('DOMContentLoaded', function() {
  
  document.querySelectorAll('.work-nav__button').forEach(function(tabsBtn){
    if(tabsBtn) {
      tabsBtn.addEventListener('click', function(event){
        const path = event.currentTarget.dataset.path;
  
        document.querySelectorAll('.how-work__content').forEach(function(tabContent) {
          tabContent.classList.remove('how-work__content--active');
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('how-work__content--active');
      }); 
    }
  });

});