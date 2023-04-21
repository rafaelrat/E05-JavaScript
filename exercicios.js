function exercicio_triangulo(lines) {
    for (let i = 1; i <= lines; i++) {
        let msg = ''
        for (let j = 0; j <= i; j++) {
            msg += '#'
        }
        console.log(msg)
    }
}

function exercicio_xadrez(lines) {
    var tline1, tline2 = ''
    for (let i = 0; i < lines; i++) {
        let msg = ''
        for (let j = 0; j < lines; j++) {
            if ((j + i) % 2 == 0) {
                msg += '#'
            }
            else {
                msg += ' '
            }
        }
        console.log(msg)
    }
}

function exercicio_verifica_palindromo(text) {
    // console.log(text)
    // console.log(text.split('').reverse().join(''))

    text = text.split('').filter((letra) => letra !== " ")

    return text.join('') == text.reverse().join('')
}

function exercicio_programa_diferente() {
    for (let i = 0; i < 100; i++) {
        if (i % (3 * 5) == 0){
            console.log('FizzBuzz')
        }else if( i % 3 == 0){
            console.log('Fizz')
        }else if( i % 5 == 0){
            console.log('Buzz')
        }else {
            console.log(i)
        }

    }
}

