* Проект выполен и защищён в рамках курса: [HTML и CSS, уровень 2](https://htmlacademy.ru/intensive/adaptive).

#### 1. Проект "Mishka"

<a href="https://niksvhvets.github.io/site-6/">
  <img src="img/Screenshot_1.jpg" width="1150" height="608">
</a>

#### 2. Вёрстка

  * Вёрстка под <b>desktop</b>, <b>tablet</b>, <b>mobile</b> !

1. [Вёрстка главной страницы сайта](https://niksvhvets.github.io/site-6/)
2. [Вёрстка раздела "каталог товаров"](https://niksvhvets.github.io/site-6/catalog.html)
3. [Вёрстка раздела "Вязание на заказ"](https://niksvhvets.github.io/site-6/form.html)

#### 3. Общие технические требования

1. HTML5, CSS3
2. Фикс вёрстка
3. Вёрстка Pixel-Perfect
4. Вёрстка из PSD-макета + styleguide5
5. Семантическая вёрстка.
6. Сетка: определена в макете.
7. Адаптивность сетки: мобильная, планшетная и десктопная версии («фикс» или «резина»).
8. Адаптивность графики: ретинизация, векторные изображения.
9. Используемая методология: БЭМ.
10. Используемый препроцессор: Less или Sass.
11. Используемый инструмент автоматизации: Gulp.
12. Используемые фреймворки: нет.
13. Кроссбраузерность: Chrome, Firefox, Opera, Safari, Edge и IE11.
14. Типографика: частично определена в макете (прочее — на усмотрение разработчика).
15. Используемый шрифт: Open Sans.

#### 4. Критерии проверки проекта.

  * <b>Базовые критерии:</b>

  <b>Разметка</b>

  Б1. Выполнена HTML-разметка всех страниц проекта и всех элементов на этих страницах.<br/>
  Б2. Грубые ошибки в разметке отсутствуют.<br/>
  Б3. Документ проходит проверку на валидность https://validator.w3.org/nu/.<br/>
  Б4. В разметке отсутствует дублирование кода для одного и того же элемента, с помощью которых элемент отображается в разных местах страницы на разных версиях: мобильной, десктопной, планшетной. Этот критерий не касается элементов, которые скрываются или показываются в разных версиях.<br/>
  Б5. Отсутствуют типовые ошибки в разметке по методологии.<br/>
  Б32. Названия полей форм привязаны к своим полям с помощью <label>.<br/>
  
  <b>Стилизация</b>

  Б6. Раскладка блоков на странице сделана с помощью флексбоксов.<br/>
  Б7. В CSS отсутствует !important.<br/>
  Б8. Подключены правильные шрифты, их размеры, цвет и толщина равны соответствующим параметрам в макетах и техническом задании.<br/>
  Б9. Нестандартные шрифты подключены локально. Формат шрифтов должен быть woff и woff2.<br/>
  Б10. Указаны альтернативные варианты шрифта и тип семейства в конце перечисления font-family.<br/>
  Б11. При наполнении контентом (как в макете) элементы каждой версии страницы (мобильной, планшетной и десктопной) соответствуют макету.<br/>
  
  <b>CSS-препроцессор</b>

  Б12. Использован CSS-препроцессор.<br/>
  Б13. Код стилей должен быть разбит на несколько частей.<br/>
  
  <b>Адаптивность</b>

  Б14. Выполнена вёрстка трёх состояний каждой страницы: мобильной, планшетной и десктопной.<br/>
  Б15. В разметке есть правильный вьюпорт тег.<br/>
  Б16. Для микросеток использованы флексбоксы.<br/>
  Б17. Выполнена ретинизация растровой графики.<br/>
  Б19. Логотип должен адаптироваться.<br/>
  Б20. Выполнено кадрирование контентных изображений.<br/>
  
  <b>Графика</b>

  Б18. Использована векторная графика.<br/>
  
  <b>Оптимизация</b>

  Б21. «Нежная» ретинизация.<br/>
  
  <b>Сборка проекта</b>

  Б22. Процесс сборки личного проекта настроен с помощью Gulp.<br/>
  Б23. Все зависимости проекта должны быть указаны в файле package.json. Команда npm i должна установить всё необходимое для того, чтобы сборка проекта работала.<br/>
  Б24. Сборка проекта должна запускаться командой npm run build.<br/>
  Б25. В результате сборки должна получаться папка build со всеми необходимыми файлами.<br/>
  Б26. Папка build со всем её содержимым не должна попадать в Гитхаб.<br/>
  
  <b>Разное</b>

  Б27. Вёрстка идентично отображается в последних версиях браузеров Chrome, Opera, Firefox, Safari, Edge, а также в Internet Explorer 11.<br/>
  Б28. Единообразное написание и форматирование кода в HTML, файлах CSS-препроцессора и JavaScript (включая файлы автоматизации).<br/>
  Б29. Отсутствует транслит в названиях классов, атрибутах, переменных CSS-препроцессора, названиях примесей и так далее.<br/>
  Б30. Мобильное меню должно быть работоспособным при отключённом JavaScript.<br/>
  Б31. Проект соответствует техническому заданию.<br/>


  * <b>Дополнительные критерии:</b>

  
  <b>Разметка</b>

  Д1. У всех векторных изображений размер прописан в теге <img>, у встроенных SVG-изображений размер прописан в теге <svg>.<br/>
  Д2. Использовано минимально возможное количество HTML-элементов (нет лишних элементов).<br/>
  
  <b>Стилизация</b>

  Д4. Для стилизации не использованы #id.<br/>
  Д6. Для блока, у которого есть фоновое изображение, прописан фоновый цвет, который соответствует преобладающему цвету изображения (пока изображение не загружено, страница выглядит похоже на макет).<br/>
  Д7. Все состояния элементов (смотрите styleguide.psd) прописаны в стилевом файле.<br/>
  Д16. Нет глобальных стилей тегов.<br/>
  
  <b>CSS-препроцессор</b>

  Д8. Запрещено использовать цветовые функции для изменения цветовых значений в коде.<br/>
  Д9. Примеси не используются для генерации правил с вендорными префиксами.<br/>
  Д10. Вложенность селекторов не больше двух уровней.<br/>
  Д11. & только для псевдоэлементов, псевдоклассов и модификаторов<br/>
  Д12. Не используются расширения (extend).<br/>
  
  <b>Тестирование</b>

  Д13. Вёрстка проходит тест на переполнение контентом.<br/>
  Д14. Критическая функциональность сайта работоспособна без JavaScript (использовано прогрессивное улучшение).<br/>
  
  <b>Доступность</b>

  Д17. У интерактивных элементов при нажатии или фокусе с клавиатуры есть активное состояние.<br/>
  Д18. Все интерактивные элементы имеют текстовое описание.<br/>
  
  <b>Форматирование и внешний вид</b>

  Д19. Код соответствует правилам в EditorConfig<br/>
  Д20. Код соответствует правилам в Stylelint.<br/>
  
  <b>Оптимизация</b>

  Д21. Использованы изображения в формате WebP.<br/>
  Д22. Использован векторный спрайт.<br/>
  Д23. Произведена оптимизация загрузки шрифтов.<br/>
  
  <b>Разное</b>

  Д15. При взаимодействии с элементами (наведение, нажатие) ни сам элемент, ни окружающие его блоки не меняют своего положения (если иное не прописано в техническом задании или styleguide.psd).<br/>
