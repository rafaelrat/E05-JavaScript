
// Conceitos básicos

function exercicio_triangulo(lines) {
    for (let i = 1; i <= lines; i++) {
        let msg = '';
        for (let j = 0; j <= i; j++) {
            msg += '#';
        }
        console.log(msg);
    }
}

function exercicio_xadrez(lines) {
    var tline1, tline2 = '';
    for (let i = 0; i < lines; i++) {
        let msg = '';
        for (let j = 0; j < lines; j++) {
            if ((j + i) % 2 == 0) {
                msg += '#';
            }
            else {
                msg += ' ';
            }
        }
        console.log(msg)
    }
}

function exercicio_verifica_palindromo(text) {

    text = text.split('').filter((letra) => letra !== " ");

    return text.join('') == text.reverse().join('');
}

function exercicio_programa_diferente() {
    for (let i = 0; i < 100; i++) {
        if (i % (3 * 5) == 0) {
            console.log('FizzBuzz');
        } else if (i % 3 == 0) {
            console.log('Fizz');
        } else if (i % 5 == 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }

    }
}

// Funções

function min(a, b) {
    if (a < b) return a;
    else return b;
}

function max(a, b) {
    if (a > b) return a;
    else return b;
}

function mod2(number){
    number = Math.abs(number) - 2
    number = Math.abs(number)

    if (number === 0){
        return true;
    }else if (number < 2){
        return false;
    }else{
        return mod2(number)
    }
}

function mod(num, modl){
    if(modl === 0) return NaN

    num = Math.abs(num) - modl
    num = Math.abs(num)

    if (num === 0){
        return true;
    }else if (num < modl){
        return false;
    }else{
        return mod(num, modl)
    }
}

function countChars(frase, c){
    let count = 0;
    for (let i = 0; i < frase.length; i++){
        if(frase[i] === c){
            count++;
        }
    }
    return count;
}

