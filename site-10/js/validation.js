var form = document.querySelector("form");                                             // получаем доступ к элементам с которым будем работать
var paymentForm = document.querySelector(".payment__form");
var paymentInputNumber = document.querySelector(".payment__input-number");
var cardNumberOne = paymentForm.querySelector("[name=cardNumberOne]");
var cardNumberTwo = paymentForm.querySelector("[name=cardNumberTwo]");
var cardNumberThree = paymentForm.querySelector("[name=cardNumberThree]");
var cardNumberFour = paymentForm.querySelector("[name=cardNumberFour]");
var cardHolderName = paymentForm.querySelector("[name=cardHolderName]");
var cardCVV = paymentForm.querySelector("[name=cardCVV]");

var cardNumberArray = [cardNumberOne, cardNumberTwo, cardNumberThree, cardNumberFour];  // поля input запишем в массивы, чтобы перебрать их в цикле
var cardCvvArray = [cardCVV];                                                           // будем работать с массивами, так как input`ов для номера карты всего 4
var cardHolderArray = [cardHolderName];                                                 // и чтобы не вызывать функцию с одинаковыми аргументами 4 раза, будет перебирать input`ы в массивах

var matchNumber = /[^0-9]/g;          // только цифры
var matchLetter = /[^a-zA-Z]/g;       // только буквы
var minSymbolsInput = 4;
var minSymbolsCvv = 3;
var inputNumberLetterAlert = "Вы вводите буквы в номер карты";
var inputNUmberFullAlert = "Нужно ввести номер полностью";
var inputHolderLatinAlert = "Держатель карты только латинскими буквами";
var inputHolderLatinMin = "Минимальное кол-во символов 4";

var validationForm = function (checkArray, numberOrLetter, minSymbols, alertOne, alertTwo, event) {   // функция которая будет перебирать массив, в котором будет осуществляться проверка по всем уловиям для каждого input
  for (var i = 0; i < checkArray.length; i++) {
    if (checkArray[i].value.match(numberOrLetter)) {                                         // проверка на ввод только цифр или только букв
      checkArray[i].value = checkArray[i].value.replace(numberOrLetter, '');            // если введены буквы или цифры, стереть их(в зависимости от условия)
      event.preventDefault();
      alert(alertOne);
      checkArray[i].style.border = '1px solid red';                                      // покрасить рамки поля ввода в красный
    } else if (checkArray[i].value === '' || checkArray[i].value.length < minSymbols) {  // если значение input пустое или меньше переданного параметра
      event.preventDefault();
      alert(alertTwo);
      checkArray[i].style.border = '1px solid red';
    } else {                                                                             // если занчение корректно, вернуть цвет рамки в исходное состояние
      checkArray[i].style.border = '1px solid #e4e9ee';
    }
  };
}

form.addEventListener("submit", function (event) {                                       // отслеживаем клик по кнопке подверждения оплаты
  validationForm(cardNumberArray, matchNumber, minSymbolsInput, inputNumberLetterAlert, inputNUmberFullAlert, event);   // вызываем нашу функцию с аргументами для проверки всех полей input
  validationForm(cardCvvArray, matchNumber, minSymbolsCvv, inputNumberLetterAlert, inputNUmberFullAlert, event);
  validationForm(cardHolderArray, matchLetter, minSymbolsInput, inputHolderLatinAlert, inputHolderLatinMin, event);
});
