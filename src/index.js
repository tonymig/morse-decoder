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
};

function decode(expr) {
    let isMultipleOfTen = expr.replace(/\D/g,'2').match(/.{10}/g);
	let decode = [];
	let str = '';
	for (let i = 0; i < isMultipleOfTen.length; i++) {
		decode.push(isMultipleOfTen[i].replace(/2/g,'').replace(/00/g,'').replace(/10/g,'.').replace(/11/g,'-'));
	}
	for (let j = 0; j < decode.length; j++) {
		str += (MORSE_TABLE[decode[j]]) ? MORSE_TABLE[decode[j]] : ' ';
    }
    return str;
}

module.exports = {
    decode
}
