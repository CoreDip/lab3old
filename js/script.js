let Lab3calc = document.lab3;
let NowResoult = 0;
let NewNumFlag = false;
let NowValue = "";
let Check2Tochka = 0;

function PressedNum (Num) {//натиснута кнопка з цифрою
    if (NewNumFlag) { //якщо натиснута
        Lab3calc.ReadOut.value = Num; //вивод на екран
        NewNumFlag = false; //повернення положення
    }
    else {//якщо  нове
        if (Lab3calc.ReadOut.value === "0") Lab3calc.ReadOut.value = Num;
        else { Lab3calc.ReadOut.value += Num; } //якщо продовжуэмо ввод числа
    }
}

function Tochka () { //функція по нажиму точки
    for (let i=0; i<=Lab3calc.ReadOut.value.length; i++) {
        if (Lab3calc.ReadOut.value[i] === ".") {
        Check2Tochka++;
        }
    }
    if(Check2Tochka>=1){
        alert("В числе может быть только одна точка!");
    }
    else{
        Lab3calc.ReadOut.value += ".";
    }
}

function Invert () { //функція зміни знака числа
    Lab3calc.ReadOut.value=-Lab3calc.ReadOut.value;
}

function ClearEntry () { //функція очистки
    Check2Tochka=0;
    Lab3calc.ReadOut.value=0;
    NewNumFlag = true;
}

function Operations (Op) { //функція по натисканню кнопки операції
    Check2Tochka=0;
    let Readout = Lab3calc.ReadOut.value;
    if (NewNumFlag && NowValue !== "=") {
        Lab3calc.ReadOut.value = NowResoult;
    }
    else {
        NewNumFlag = true;
        if ( '+' === NowValue ) NowResoult += parseFloat(Readout);
        else if ( '-' === NowValue ) NowResoult -= parseFloat(Readout);
        else if ( '/' === NowValue ) NowResoult /= parseFloat(Readout);
        else if ( '*' === NowValue ) NowResoult *= parseFloat(Readout);
        else NowResoult = parseFloat(Readout);
        Lab3calc.ReadOut.value = NowResoult;
        NowValue = Op;
    }
}
