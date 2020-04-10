window.onload = function () {

    function addEvent (target, callbackFunction, event='click') {
        array = [...target];
        return array.map(item => item.addEventListener(event, () => callbackFunction(item)));
    }

    function changeDisplayValue (object) {
        return document.form.display.value = document.form.display.value + object.innerHTML;
    }

    function cleanDisplayValue () {
        return document.form.display.value ='';
    }

    function deleteLastSymbol () {
        let currentValue = document.form.display.value;
        return document.form.display.value = currentValue.substring(0,currentValue.length-1)
    }

    function getResult () {
        let currentValue = document.form.display.value;
        if(currentValue) {
        return document.form.display.value = eval(currentValue);
        }
    }

   addEvent(document.getElementsByClassName('symbol'), changeDisplayValue);
   addEvent(document.getElementsByClassName('clean'), cleanDisplayValue);
   addEvent(document.getElementsByClassName('back'), deleteLastSymbol);
   addEvent(document.getElementsByClassName('equal'), getResult);

}