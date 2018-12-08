var navMain = document.querySelector('.header-nav');            // выбор элемента меню и присвоение переменной
var navToggle = document.querySelector('.header-nav__toggle');  // выбор элемента кнопки и присвоение переменной

navToggle.addEventListener('click', function() {                // отследить событие клик по кнопке
  if (navMain.classList.contains('header-nav--closed')) {       // если у меню есть класс .header-nav--closed(dicplay: none)
    navMain.classList.remove('header-nav--closed');             // то его удалить
    navMain.classList.add('header-nav--opened');                // добавить класс .header-nav--opened(display: block)
  } else {                                                      // в другом случае выпонить теже операции но наоборот
    navMain.classList.add('header-nav--closed');
    navMain.classList.remove('header-nav--opened');
  }
});
