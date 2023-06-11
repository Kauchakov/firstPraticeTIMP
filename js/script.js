//11. Сортировка выбором символов в строке. Вернуть порядковый номер в строке на текущий и на минимальный символы. 

let str;
const display = document.querySelector("#display");

String.prototype.swap = function(indexFirst, indexSecond) {
    return this.substring(0, indexFirst) + this.charAt(indexSecond) + this.substring(indexFirst + 1, indexSecond) + this.charAt(indexFirst) + this.substring(indexSecond + 1, this.length);
}
const d = document.getElementById("dd");
d.width = 100;
//Функция более не используется
function RandomLetters(){
    let str = "";
    for (let i = 0; i < 10; i++) {
        str += String.fromCharCode(Math.random() * 26 + 97); 
    }
    return str;
}

function Vstavka() {
    if (document.getElementById("inputword").value == "")
        return;
    str = document.getElementById("inputword").value.toLowerCase();
    display.innerHTML = "<p>Начальное слово: " + str + "</p>";

    let position = 0;
    while (position != str.length - 1) {
        let min = str.charAt(position);
        let positionOfMin = position;
        for (let i = position; i < str.length; i++) {
            if (str.charAt(i) < min) {
                min = str.charAt(i);
                positionOfMin = i;
            }
        }
        if (position != positionOfMin){
            str = str.swap(position, positionOfMin);
        }
        display.innerHTML += "<p>[" + position + ", " + positionOfMin + "]<span style='margin-left: 10px'>" + str[positionOfMin] + "⇔" + str[position] + "</span></p>";
        
        position++;
    }
    display.innerHTML += "Итоговое слово: " + str;
    return str;
}

