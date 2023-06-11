//Игра "Гребешок"
//Нужно вводить слова, содержащие те же буквы, что и начальное

let StartString, NewString;
let arr = [];
let redOrBlue = true;
const display = document.querySelector("#display");

//Выбор буквы
function Select(i){
    let parent = document.getElementById("buttons");
    after.innerHTML += document.getElementById(i).innerText;
    parent.removeChild(document.getElementById(i));
}

//Удаление слова
function Delete() {
    after.innerHTML = "";
    refreshButtons();
}

//Проверка на подобный элемент
function Same(el){
    for (let i = 0; i < arr.length; i++)
        if (arr[i] == el)
            return false;
    return true;
}

//Создание нового слова без одного символа
function Cut(index) {
    return NewString.substring(0, index) + NewString.substring(index + 1, NewString.lenght);
}

//Проверка на наличие буквы в начальном слове из производного
function Check(el) {
    NewString = StartString.toLowerCase();
    for (let i = 0; i < el.length; i++) {
        for(let j = 0; j < NewString.length; j++) {
            if (NewString[j] == el[i]) {
                NewString = Cut(j);
                break;
            }
        }
    }
    if (StartString.length == (NewString.length + el.length)) {
        return true;
    }
    return false;
}

//Цвет слов
function Color(rob) {
    if (rob) {
        display.innerHTML += "<span class='red'>" + str + "</span>, ";
        redOrBlue = false;
    }
    else {
        display.innerHTML += "<span class='blue'>" + str + "</span>, ";
        redOrBlue = true;
    }
}

//Ввод первоначального слова
function Word(){
    if (StartString == document.getElementById("StartWord").value)
        return;
    StartString = document.getElementById("StartWord").value;
    display.innerHTML = "<p><b>Начальное слово</b>: <em>" + StartString + "</em></p><div id='buttons' class='line'></div>";
    display.innerHTML += "<p>Своё слово: <span id='after' style='line-height: 1.5'></span></p>";
    display.innerHTML += "<p></p>Производные слова: ";
    
    refreshButtons();
}

//Создание кнопок-букв
function refreshButtons(){
    const buttons = document.getElementById("buttons");
    buttons.innerHTML = "";
    for (let i = 0; i < StartString.length; i++)
        buttons.innerHTML += "<button id='" + i + "' onclick='Select(" + i + ")' class='button'>" + StartString[i].toLowerCase() + "</button>";
    buttons.innerHTML += "<button id='add' onclick='Words()' class='button' style='margin-left: 10px'>+</button>";
    buttons.innerHTML += "<button id='delete' onclick='Delete()' class='button'>←</button>";
}

//Проверка введённого производного слова
function Words() {
    str = document.getElementById("after").innerHTML.toLowerCase();

    if (Same(str) && Check(str) && str != StartString.toLowerCase() && str != "") {
        arr.push(str);
        after.innerHTML = "";
        Color(redOrBlue);
        refreshButtons();
    }
}