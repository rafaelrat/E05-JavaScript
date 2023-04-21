
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

function mod2(number) {
    number = Math.abs(number) - 2
    number = Math.abs(number)

    if (number === 0) {
        return true;
    } else if (number < 2) {
        return false;
    } else {
        return mod2(number)
    }
}

function mod(num, modl) {
    if (modl === 0) return NaN

    num = Math.abs(num) - modl
    num = Math.abs(num)

    if (num === 0) {
        return true;
    } else if (num < modl) {
        return false;
    } else {
        return mod(num, modl)
    }
}

function countChars(frase, c) {
    let count = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === c) {
            count++;
        }
    }
    return count;
}


// Objetos & Arrays

function range(min, max, i) {
    numbers = []
    for (let j = min + 1; j < max; j += i) {
        numbers.push(j)
    }
    return numbers
}

function reverseArray(array) {
    return array.reverse()
}

function toList(array) {
    let list = {}
    for (let i = 0; i < array.length; i++) {
        let element = list
        // Percorre os nodos
        for (let j = 0; j < i; j++) {
            if (element.rest === undefined || element.rest === null) element.rest = {}
            element = element.rest
        }

        element.value = array[i]
        element.rest = null
    }

    return list
}

function deepEquals(obj1, obj2) {
    // Se são o mesmo objeto retorna true
    if (obj1 === obj2) return true;

    // Checa se são primivos, se sim compara
    if ((obj1 !== Object(obj1)) && (obj2 !== Object(obj2))) return obj1 === obj2;

    // Checa se o número de atributos eh o mesmo, se não retorna falso
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    // Compara os objetos
    for (let key in obj1) {
        //Checa se o outro objeto tem essa propriedade
        if(!(key in obj2)) return false; 

        //Retorna falso se as propriedades forem diferentes, usando recursividade
        if(!deepEquals(obj1[key], obj2[key])) return false;
    }

    return true;
}


