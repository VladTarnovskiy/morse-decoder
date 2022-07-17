const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};

function decode(expr) {
   let q = [];

   for (let i = 0; i < expr.length; i+=10){
        let catTenExpr = expr.substr(i, 10)
        let pushPart = ''

        for (let i = 0; i < catTenExpr.length; i+=2){
            let letTwoExpr = catTenExpr.substr(i, 2)

            if (letTwoExpr == '10'){
                pushPart += '.'
            } else if (letTwoExpr == '11'){
                pushPart += '-'
            } else if (letTwoExpr == '**'){
                pushPart = ' '
            }
        }

        q.push(pushPart)

   }

let result = q.map( item => MORSE_TABLE[item]).join('')
   return result

}

module.exports = {
    decode
}

//ATTEMPTS with methot split 

    // let r = []
    // let z = expr.split('**********').forEach( (elem) => {
    //    elem.split(/(.{10})/).split(/(.{2})/).forEach((k) => {
    //         if (k == 10) {
    //             r.push('.')
    //         } else if (k == 11){
    //             r.push('-')
    //         }
    //     })
    // }
    // )
    // cosole.log (z)

//     let x = expr.split('   ')
//     let y  = [];

// x.forEach((ob) => {
//    ob.split(' ').forEach((el) => {
//     y.push(MORSE_TABLE[el])
//    })
// })

// return y.join(' ');
// }

