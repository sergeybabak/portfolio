const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', ()=> {
    menu.classList.add('active');
});
close.addEventListener('click', ()=> {
    menu.classList.remove('active');
});

// ширина в процентах в блоке tools
document.querySelectorAll('.tools__cell')
.forEach(function(cell) {
    cell.querySelector('.tools__index-top').style.width = cell.querySelector('[data-cell="perc"]').innerHTML;
});
// второй вариант
/* document.querySelectorAll('.tools__cell')
.forEach(function(cell) {
    // Находим элемент с атрибутом data-cell="perc"
    var percentElement = cell.querySelector('[data-cell="perc"]');
    
    // Получаем значение процента из текста элемента
    var percent = parseFloat(percentElement.textContent);
    var width100 = cell.querySelector('.tools__index-bottom').offsetWidth;
    
    // Вычисляем новую ширину для элемента с классом "tools__index-top"
    var newWidth = (width100 * percent) / 100 + 'px';
    
    // Находим элемент с классом "tools__index-top" и изменяем его ширину
    var indexTopElement = cell.querySelector('.tools__index-top');
    indexTopElement.style.width = newWidth;
}); */