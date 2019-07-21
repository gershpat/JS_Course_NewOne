'use strict';
    // Lesson #1 task #1
    console.log('Lesson #1 Task #1');

    let a = 1, b = 1, c, d 
    c = ++a; 
    console.log('++a'+ ' ' + c); //2 здесь в общем понятно, поскольку если бы оператор ++ стоял после переменной, то alert(c) выдал бы значение 1 
    d = b++;
    console.log('b++' + ' ' + d); //1 это в продолжение предыдущего примера. Значение, увеличенное на 1 вернулось в переменную d, 
    //но в текущем алерте значение не повышается
    c = (2 + ++a);
    console.log('(2 + ++a)' + ' ' + c);//5 вариант похож на 1 вариант, с той только разницей, что после первого примера в переменную а вернулась единичка, 
    //и теперь через инкремент перед переменной мы увеличиваем значение ещё на 1. То есть а в этом примере уже имеет значение 3 
    d = (2 + b++);//4 значение +1 вернулось в переменную b, но в текущем примере из-за оператора-инкремента, 
    //который стоит после переменной значение по-прежнему 2. Поэтому и результат 4  
    console.log('(2 + b++)' + ' ' + d);
    console.log(a);//3 после двух инкрементов в переменную вернулась двойкаю Поэтому значени 1+2 
    console.log(b);//3 переменную b мы тоже дважды инкрементировали 

    //Lesson #1 task #2
    console.log('Lesson #1 Task #2');

    let e = 2;
    let x = 1 + (e *= 2);
    console.log(e);//4 e == 4 потому, что в переменную вернулось значение, полученное в результате выражения (e *= 2) 
    console.log(x);//5 
 
    //Lesson #1 task #3. Using alert function for showing results 
    console.log('Lesson #1 Task #3');

    let h = parseInt(prompt('Введите число h'));
    let i = parseInt(prompt('Введите число i'));
    if ((h >= 0) && (i >= 0)) { 
        alert(`Разность h и i равна ${h - i}`); 
    } else if ((h <= 0) && (i <= 0)) {
        alert(`Произведение  и В равно ${h * i}`);
    } else if (((h >= 0) && (i <= 0)) || ((h <= 0) && (i >= 0))) {
        alert(`Сумма А и В равна ${h + i}`);
    }

    //Lesson #1 task #4
    console.log('Lesson #1 Task #4');

    let first = 2;
    let second = 4;    

        function sum(num1, num2) {
            return num1 + num2;
        }
        
        function subtract(num1, num2) {
            return num1 - num2;
        } 
        
        function multiplication(num1, num2) {
            return num1 * num2;
        }
        
        function division(num1, num2) {
            return num1 / num2;
        }

    console.log(sum(first, second));  
    console.log(subtract(first, second));
    console.log(multiplication(first, second));
    console.log(division(first, second));

    //Lesson #1 task #5
    console.log('Lesson #1 Task #5');

    let arg1 = parseInt(prompt('Введите первое число'));
    let arg2 = parseInt(prompt('Введите второе число'));
    let operation = prompt('Введите арфиметическую операцию');

        function sum(num1, num2) {
            return num1 + num2;
        }
        
        function subtract(num1, num2) {
            return num1 - num2;
        } 
        
        function multiplication(num1, num2) {
            return num1 * num2;
        }
        
        function division(num1, num2) {
            return num1 / num2;
        }

    function mathOperation(arg1, arg2, operation) {
    
            switch(operation) {
                case 'умножение':
                return multiplication(arg1, arg2);
                case 'деление':
                return division(arg1, arg2);
                case 'сложение':
                return sum(arg1, arg2);
                case 'вычитание':
                return subtract(arg1, arg2);
                default:
                throw new Error('Непонятно, что нужно делать');
            } 
    }
    alert(mathOperation(arg1, arg2, operation));
    console.log(mathOperation(arg1, arg2, operation));

    //Lesson #1 task #6
    console.log('Lesson #1 Task #6');

    function getDigit(num) {
        let beforeLastDigit = getBeforeLastDigit(num);
        if (beforeLastDigit == 1) {
            return 'рублей';
        }
        num = String(num); // я же правильно понимаю, что здесь идёт объявление глобальной переменной? А можно ли это сделать через var или let?
        let lastNumber = Number(num.charAt(num.length - 1));//ещё вопрос: я не совсем понял, зачем нужно переводить переменную lastNumber в число. 
        // то есть если у нас метод char.At работает только со string, зачем нам нужен number? Ведь switch может по идее так же точно пройтись и 
        // по строкам? Игорь, тут вопрос не критики. Я очень хочу разобраться. А пока сделать это не очень получается.  
        switch (lastNumber) {
            case 1:
            return 'рубль';
            break;
            case 2:
            case 3:
            case 4:
            return 'рубля';
            break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 0:
            return 'рублей';
            break;
        }
    }

    //честно говоря, никак не могу понять, зачем нужна эта функция? в каком числе предпоследний знак может быть пустым? в смысле, если человек написал 
    //с ошибкой? но тогда же по логике вещей и все остальные числа нужно проверять, правильно?  
    //не совсем понимаю. Можете прояснить? 
    function getBeforeLastDigit(num) { 
        num = String(num);
        let digit = num.charAt(num.length - 2)
        if (digit !== '') {
            return Number(digit);
        }
        return null;
    }

    let money = parseInt(prompt('Напишите, сколько денег вы планируете положить на счёт в банке'));
    alert(`На ваш счёт зачислено ${money} ${getDigit(money)}.`); 


    //Lesson #1 task #7
    console.log('Lesson #1 Task #7');

    //Игорь, вы не могли по этому заданию прояснить один момент: почему у вас в функции с 22 по 27 строки параметр функции - passLength. 
    //Но функция, которая сюда возвращается находится на 35 строке и называется askPassLength. Скажите пожалуйста, почему js не выдаёт ошибку
    //и почему название функции мэтчится, несмотря на недостающее слово ask?  