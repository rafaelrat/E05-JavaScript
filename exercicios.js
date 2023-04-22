
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


// Funções de Alta Ordem

function bubble_sort(vetor, criterio){
    for(let i = 0; i < vetor.length;i++){
        for(let j = 0; j < (vetor.length - 1); j++){
            if(criterio(vetor[j], vetor[j+1])){
                let tmp = vetor[j+1]
                vetor[j+1] = vetor[j]
                vetor[j] = tmp
            }
        }
    }

    return vetor
}
    
function criterio_crescente(a, b){
    return a > b;
}


function criterio_decrescente(a, b){
    return a < b;
}

function criterio_crescente_impares(a, b){
    // Manda os impares pro final
    if (a % 2 !== 0 && b % 2 !== 0) return a > b;
    else if (a % 2 !== 0) return true;
    else return false;
      
}

function criterio_decrescente_pares(a, b){
    // Manda os pares pro final
    if (a % 2 === 0 && b % 2 === 0) return a < b;
    else if (a % 2 === 0) return true;
    else return false;
      
}


function criptografia(text, cifra){
    text = text.split('')
    for(let i = 0; i < text.length; i++){
        text[i] = cifra(text[i])
    }
    return text.join('')
}

function cifra_de_cezar(c){
    code = c.charCodeAt(0)
    d_code = code + 5
    
    // Z maiúsculo
    if(code <= 90){
        if(d_code > 90){
            d_code = 64 + (d_code - 90)
        }
    }else if(code <= 122){
        if(d_code > 122){
            d_code = 96 + (d_code - 122)
        }
    }

    return String.fromCharCode(d_code)
}

function verifica_numero(number, verificador){
    return verificador(number);
}

function verifica_impar(number){
    return number % 2 !== 0;
}

function verifica_primo(number){
    number = Math.abs(number)
    if(number < 2) return false;
    for(let i = 2; i < number; i++){
        if(number % i === 0) return false;
    }
    return true;
}



function transforma_string(text, transformador){
    text = text.split('')
    for(let i = 0; i < text.length; i++){
        text[i] = transformador(text[i])
    }
    return text.join('')
}


function transformador_caixa_alta_nas_vogais(c){
    index = 'aeiouAEIOU'.indexOf(c)

    if(index >= 0) return c.toUpperCase();
    else return c;
}


function transformador_caixa_alta_nas_consoantes(c){
    index = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'.indexOf(c)

    if(index >= 0) return c.toUpperCase();
    else return c;
}

function transformador_caixa_baixa_nas_vogais(c){
    index = 'aeiouAEIOU'.indexOf(c)

    if(index >= 0) return c.toLowerCase();
    else return c;
}

function transformador_caixa_baixa_nas_consoantes(c){
    index = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'.indexOf(c)

    if(index >= 0) return c.toLowerCase();
    else return c;
}


function cria_matriz(funcao_matricial, linhas, colunas){
    let matriz = []
    for(let i = 0; i < linhas; i++){
        matriz.push([])
        for(let j = 0; j < colunas; j++){
            matriz[i].push(funcao_matricial(i, j))
        }
    }

    return matriz
}

function imprime_matriz(matriz, linhas, colunas){
    for(let i = 0; i < linhas; i++){
        let tmp = ''
        for(let j = 0; j < colunas ;j++){
            tmp += '' + matriz[i][j] + ' '
        }
        console.log(tmp)
    }
}

function testa_matriz(){
    // 
    
    let linhas = 5, colunas = 5;

    matriz_soma = (i, j) => i + j;             
    matriz_mult = (i, j) => i * j;          
    matriz_ident = (i, j) => i == j ? 1 : 0;            
    matriz_naosei_1 = (i, j) => (i ** 2)/(j + 1);
    matriz_naosei_2 = (i, j) => i > j ? 1 : (i < j ? 5 : 0);

    imprime_matriz(cria_matriz(matriz_soma, linhas, colunas), linhas, colunas);
    console.log('\n\n')

    imprime_matriz(cria_matriz(matriz_mult, linhas, colunas), linhas, colunas);
    console.log('\n\n')

    imprime_matriz(cria_matriz(matriz_ident, linhas, colunas), linhas, colunas);
    console.log('\n\n')

    imprime_matriz(cria_matriz(matriz_naosei_1, linhas, colunas), linhas, colunas);
    console.log('\n\n')

    imprime_matriz(cria_matriz(matriz_naosei_2, linhas, colunas), linhas, colunas);
    console.log('\n\n')

    
}

